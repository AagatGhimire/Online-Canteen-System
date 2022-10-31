<?php
require 'db.php';

if($_SERVER['REQUEST_METHOD']=="POST"){
    $admin_id=$_POST['admin_id'];
    $password=$_POST['admin_password'];
    $stmt='select * from admin_user where id=? and password=?;';
    $prep_stmt=$conn->prepare($stmt);
    $prep_stmt->bind_param('is', $admin_id,$password);
    $prep_stmt->execute();
    $result=$prep_stmt->get_result();
    if($user_array=$result->fetch_assoc()){
        $_SESSION['logged_user']['id']=$user_array['id'];
        echo json_encode(['user'=>$_SESSION['logged_user']['id'],]);
    }
    else{
        echo json_encode(['error'=>'Invalid UserID or Password']);
        // echo('Invalid UserID or Password');
    }
    $prep_stmt->close();
    exit();
}