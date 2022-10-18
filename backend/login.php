<?php
require 'db.php';
header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']==="POST"){
    $username=$_POST['user_id'];
    $password=$_POST['password'];
    $stmt='select * from user where user_id=? and password=?;';
    $prep_stmt=$conn->prepare($stmt);
    $prep_stmt->bind_param('ss', $username,$password);
    if($prep_stmt->execute()){
        $result=$prep_stmt->get_result();
        $user_array=$result->fetch_assoc();
        $_SESSION['logged_user']['id']=$user_array['user_id'];
        $_SESSION['logged_user']['credit']=$user_array['credit'];
        echo json_encode(['user'=>$_SESSION['logged_user']['id']]);
    }
    else{
        echo json_encode(['user'=>'Invalid UserID or Password']);
    }
    $prep_stmt->close();
    exit();
}