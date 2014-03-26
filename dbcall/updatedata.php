<?php

	require_once('get_db_connection.php');
    mysql_query("SET NAMES UTF8");
  
    $data = json_decode(file_get_contents("php://input"));

    $textId = $data->id;
    $newText = $data->text;
    $textSize = $data->size;
    $font = $data->font;
    $posx = $data->posx;
    $posy = $data->posy;

    echo $textId;

    $query = "UPDATE walltext SET text='". $newText."', font ='".$font."', posx='" .$posx."',posy='" .$posy. "'  WHERE id=" .$textId."";

    $result = mysql_query($query);
    //echo $query;

    mysql_close($conn);

?>