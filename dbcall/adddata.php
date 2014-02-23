<?php

	require_once('get_db_connection.php');
    mysql_query("SET NAMES UTF8");
	addData();
  
	function addData(){
	    $data = json_decode(file_get_contents("php://input"));
        $newText = $data->text;
        $posx = $data->posx;
        $posy = $data->posy;
    
//		$newText = htmlspecialchars($_POST["text"]);
//		//$roomname = htmlspecialchars($_POST["name"]);
//		
        $query = "INSERT INTO walltext (`text`, `font`, `color`, `size`, `posx`, `posy`) VALUES ('".$newText."', 'Helvetica', '#000000', '16', '".$posx."', '".$posy."');";

		$result = mysql_query($query);
        $id = mysql_insert_id();
       
        echo $id; // return id
	}
?>