<?php
require 'db.php';
header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']==="GET"){
    $stmt = "select * from items where status=1 and type='food';";
    if($result= $conn->query($stmt)){
        $arr= array();
        //while($name= $result->fetch_assoc()['name']){
        while($name= $result->fetch_assoc()){
            array_push($arr,$name); 
        }
        echo json_encode(['items'=>$arr]);
    }
    else{
        echo json_encode(['error'=>'an error occured']);
    }
    exit();
}
