//Online Canteen System

// Code for plus/minus starts here

var incBtn = document.getElementsByClassName('plus');
var decBtn = document.getElementsByClassName('minus');

//plus
for (var i = 0; i < incBtn.length; i++) {
    var button = incBtn[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[1];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        // numberPlace.innerText = newValue;
        input.value = newValue;
    })
}

//minus
for (var i = 0; i < decBtn.length; i++) {
    var button = decBtn[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[1];
        var inputValue = input.value;
        if (inputValue > 0) {
            var newValue = parseInt(inputValue) - 1;
            // numberPlace.innerText = newValue;
            input.value = newValue;
        }
    })
}
// Code for plus/minus ends here

// Code for cart starts here

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

// Code for cart ends here

// Code for backend stuff starts here

document.addEventListener('DOMContentLoaded', requestFood);
document.addEventListener('DOMContentLoaded', requestDrinks);

function requestFood() {
    fetch("http://localhost:8085/backend/foods.php")
        .then((res) => res.json())
        .then((data) => {
                console.log(data);
                // const food=document.querySelector('.food_section');
                // if(data.items){
                //     const ul=document.createElement('ul');
                //     data.items.array.forEach(item => {
                //         const li= document.createElement('li');
                //         li.className=item;
                //         li.textContent=item;
                //         li.addEventListener('click', getItem);
                //         ul.appendChild(li);
                //     });
                //     food.append(ul);
                // }
            }
        )
        .catch(err => console.log(err));
}

function getItem(){
    console.log('ok');
}

function requestDrinks() {
    fetch("http://localhost:8085/backend/drinks.php")
        .then((res) => res.json())
        .then((data) => {
                console.log(data);
            }
        )
        .catch(err => console.log(err));
}

// Code for backend stuff ends here