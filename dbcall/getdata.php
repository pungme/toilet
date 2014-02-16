<?php

	require_once('get_db_connection.php');
    mysql_query("SET NAMES UTF8");
	getData();
  
	function getData() {
		$query = "SELECT * FROM walltext";
		$result = mysql_query($query);
		$nbrows = mysql_num_rows($result);	
		if($nbrows>0){
			while($rec = mysql_fetch_assoc($result)){
				$arr[] = $rec;
			}
			$jsonresult = JEncode($arr); //encode JSON
			echo $jsonresult;
		} else {
			echo 'query fail';
		}
	}
	
	function JEncode($arr){
		if (version_compare(PHP_VERSION,"5.2","<"))
		{    
			require_once("./JSON.php");   //if php<5.2 need JSON class
			$json = new Services_JSON();  //instantiate new json object
			$data=$json->encode($arr);    //encode the data in json format
		} else
		{
			$data = json_encode($arr);    //encode the data in json format
		}
		return $data;
	}
?>
