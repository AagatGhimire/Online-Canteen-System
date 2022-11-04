<?php
require 'db.php';
// require 'cart_user.php';

if($_SERVER['REQUEST_METHOD']=="POST"){
    // global $conn;
    $order=array();
    // $location=$_POST['locations'];
    $user_id=getUserID();
    // getLoggedUserCart();
    $cart_id=getCartID($user_id);
    getAllCartItems($cart_id);
    // addOrder();

    // echo json_encode($order);


    
    
    
    // $username=$_POST['user_id'];
    // $password=$_POST['password'];
    // $stmt='select * from user where user_id=? and password=?;';
    // $prep_stmt=$conn->prepare($stmt);
    // $prep_stmt->bind_param('ss', $username,$password);
    // $prep_stmt->execute();
    // $result=$prep_stmt->get_result();
    // if($user_array=$result->fetch_assoc()){
    //     $_SESSION['logged_user']['id']=$user_array['user_id'];
    //     $_SESSION['logged_user']['credit']=$user_array['credit'];
    //     echo json_encode(['user'=>$_SESSION['logged_user']['id'],'credit'=>$_SESSION['logged_user']['credit']]);
    // }
    // else{
    //     echo json_encode(['error'=>'Invalid UserID or Password']);
    // }
    // $prep_stmt->close();
    exit();
}

function getUserID(){
    return $_SESSION['logged_user']['id'];
}

function getCartID($user_id){
    global $conn;
    $stmt="select id from cart where user_id=$user_id;";
    if($result=$conn->query($stmt)){
        if($result->num_rows){
            $cart_id=$result->fetch_assoc()['id'];
            // print($cart_id);
        }
    }
    return $cart_id;
}

function getAllCartItems($cart_id){
    global $conn;
    $stmt="select p.id, p.name, ci.quantity, i.stock, (p.price*ci.quantity) as price from items p 
    inner join cart_item ci 
    on p.id=ci.prod_id and ci.cart_id=$cart_id 
    INNER join inventory i ON p.id=i.id;";
    if($result=$conn->query($stmt)){
        if($result->num_rows){
            while($row=$result->fetch_assoc()){
                $id=$row['id'];
                $prod_array[$id]['name']=$row['name'];
                $prod_array[$id]['stock']=$row['stock'];
                $prod_array[$id]['quantity']=$row['quantity'];
                $prod_array[$id]['price']=$row['price'];
                // return updateTotalLoggedCart($prod_array);
            }
        }
    }
    // addOrder($prod_array);
    // return updateTotalLoggedCart($prod_array);
    updateTotalLoggedCart($prod_array);
}

function updateTotalLoggedCart($prod_array){

    global $conn;
    $total=0;
    foreach($prod_array as $item){
        // printf($item['name']);
        $total +=$item['price'];

    }
    $prod_array['total']=$total;
    $location=$_POST['locations'];
    $user_id=getUserID();
    $order_status="pending";
    $added_on=date("Y-m-d h:i:s");

    // print($added_on);

    mysqli_query($conn,"insert into order_table (user_id,location,total,order_status,added_on) values 
        ('$user_id','$location','$total','$order_status','$added_on');");

    // $stmt='insert into order_table (user_id,location,total,order_status,added_on) values 
    //     ($user_id,$location,$total,$order_status,$added_on);';
        // $prep_stmt=$conn->prepare($stmt);
        // $prep_stmt->bind_param('iiiss',$user_id,$location,$total,$order_status,$added_on);
        // $prep_stmt->execute();
        // $prep_stmt->close();
        // $conn->query($stmt);
        // printf($conn->query($stmt));
    // return $prod_array;
}

// function addOrder($prod_array){
//     global $conn;
//     $prod_id= $_SESSION['id'];
//     $quantity= $prod_array['quantity'];
//     echo json_encode($order);
//     // $location=$_POST['locations'];
//     // $cart_id =getCartID(getUserID());
//     // $stmt='insert into cart_item (cart_id,prod_id,quantity) values (?,?,?) on duplicate key update quantity= quantity+?;';
//     // $prep_stmt=$conn->prepare($stmt);
//     // $prep_stmt->bind_param('iiii',$cart_id,$prod_id,$quantity,$quantity);
//     // $prep_stmt->execute();
//     // $prep_stmt->close();
//     // $cart=getAllCartItems($cart_id);
//     // echo json_encode(['cart'=>$cart]);
// }