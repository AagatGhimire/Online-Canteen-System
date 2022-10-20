// Code for cart starts here
document.addEventListener('DOMContentLoaded',updateCart);
const cartIcon = document.querySelector('.fa-basket-shopping');
const cartWindow = document.querySelector('.cart_window');

cartIcon.addEventListener('click', () => {
    if (cartWindow.classList.contains('hide')) {
        cartWindow.classList.remove('hide');
    }
    else {
        cartWindow.classList.add('hide');
    }
})
function updateCart(){
    fetch("http://localhost:8085/backend/cart.php",{
        method:"GET",
        mode:"cors",
        credentials: "include",
    })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            responseUpdateCart(data);
    })
    .catch(err => console.log(err));    
}

function responseUpdateCart(data){
    console.log(data)
}

function addToCart(event){
    console.log(this);
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    console.log(input.value)
    const payload=new URLSearchParams();
    payload.append('id',this.id);
    payload.append('name',this.name);
    payload.append('price',this.price);
    payload.append('quantity',input.value);
    fetch('http://localhost:8085/backend/cart.php',{
        method:"POST",
        mode:"cors",
        credentials: "include",
        body:payload 
    }).then((res) => res.json())
    .then((data) => { 
    // console.log(data);
    })
    .catch(err => console.log(err));
}
// Code for cart ends here