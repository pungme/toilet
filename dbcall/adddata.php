<?php

	require_once('get_db_connection.php');
    mysql_query("SET NAMES UTF8");
	addData();
  
	function addData(){
	    $data = json_decode(file_get_contents("php://input"));
        $newText = $data->text;
    
//		$newText = htmlspecialchars($_POST["text"]);
//		//$roomname = htmlspecialchars($_POST["name"]);
//		
        $query = "INSERT INTO walltext (`text`, `fonttype`, `color`, `size`, `posx`, `posy`) VALUES ('".$newText."', 'Helvetica', '#000000', '16', '0', '0');";
		//$query = "UPDATE rooms SET name = '" .$roomname. "' WHERE id = '" .$room_id. "'";
		$result = mysql_query($query);
//		
		echo '({"success": true})';
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