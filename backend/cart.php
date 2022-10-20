<?php
require 'cart_guest.php';
require 'cart_user.php';

// return the cart to user
if($_SERVER['REQUEST_METHOD']==="GET"){
    if(isset($_SESSION['logged_user'])){
        getLoggedUserCart();
    }
    else{
        getGuestUserCart();
    }
    exit();
}

// add new product to cart
if($_SERVER['REQUEST_METHOD']==="POST"){
    if(isset($_SESSION['logged_user'])){
        addLoggedUserCart();
    }
    else{
        addGuestUserCart();
    }
    exit();
}