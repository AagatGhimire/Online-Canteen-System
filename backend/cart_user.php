<?php
require 'db.php';

function getLoggedUserCart(){
    if(!isset($_SESSION['cart']))
    {
        $_SESSION['cart']=array();
    }
    echo json_encode(['cart'=>$_SESSION['cart']]);
}

function addLoggedUserCart(){
    global $conn;
    $user_id=$_POST['user_id'];
    $id=$_POST['id'];
    $name=$_POST['name'];
    $price=getProductPrice($id);
    $quantity=$_POST['quantity'];
    $select_cart=mysqli_query($conn,"SELECT * from `cart` where id='$id' and user_id='user_id' ") or die('query failed');
    mysqli_query($conn,"INSERT INTO `cart`(user_id, prod_id,name,price,quantity) VALUES ('$user_id','$id','$name','$price','$quantity') ")
        or die('query failed');
    if(!isset($_SESSION['cart'][$id])){
        $_SESSION['cart'][$id]['name']=$name;
            // $_SESSION['cart'][$id]['price']=$price;
        $_SESSION['cart'][$id]['quantity']=$quantity;
    }
    else{
        $_SESSION['cart'][$id]['quantity']+= $quantity;
    }
    $_SESSION['cart'][$id]['price']=($price*$_SESSION['cart'][$id]['quantity']);
    updateTotalCart();
    echo json_encode(['cart'=>$_SESSION['cart']]);
    exit();
}

function deleteLoggedUserCart($_DELETE){
    global $conn;
    $id=$_DELETE['id'];
    $delete_cart_item=mysqli_query($conn,"delete from `cart` where prod_id='$id' ") or die('query failed');
    unset($_SESSION['cart'][$id]);
    updateTotalCart();
    echo json_encode(['cart'=>$_SESSION['cart']]);    
}