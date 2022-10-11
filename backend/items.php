<?php 
require 'db.php';

if($_SERVER['REQUEST_METHOD']==="GET"){
    $stmt = "select * from items where status=1;";
    if($result= $_conn->query($stmt);){
        $arr= array();
        while($row= $result->fetch_assoc()){
            array_push($arr,$name);
        }
        echo json_encode(['items'=>$arr]);
    }
    else{
        echo json_encode(['error'=>'an error occured']);
    }
    exit();
}