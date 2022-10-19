//Online Canteen System

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

// Code for login starts here
document.addEventListener('DOMContentLoaded',checkLoginStatus);
const login=document.querySelector('.login');
const loginPanel=document.querySelector('.login_Panel');
const submit=document.querySelector('.submit_btn');
const userIcon=document.querySelector('.fa-user');
const loggedIcon=document.querySelector('.fa-user-check');
const logOutIcon=document.querySelector('.fa-right-to-bracket');

login.addEventListener('click',showLogin);
submit.addEventListener('click',userLoginRequest);
logOutIcon.addEventListener('click',userLogout);

function showHideIcon(icon,flag){
    flag ? (icon.style.display='none'):(icon.style.display='block');
}

function hideIcon(icon){
    if (icon.classList.contains('hide')) {
        icon.classList.remove('hide');
    }
    else {
        icon.classList.add('hide');
    }
}

function showLogin(){
    if (loginPanel.classList.contains('hide')) {
        loginPanel.classList.remove('hide');
    }
    else {
        loginPanel.classList.add('hide');
    }
}

function userLoginRequest(e)
{
    e.preventDefault();
    // console.log('hi')
    const form=document.querySelector('.login_form');
    const formData=new FormData(form);
    fetch('http://localhost:8085/backend/login.php',{
        method:"POST",
        mode:"cors",
        credentials: "include",
        body:formData 
    }).then((res) => res.json())
    .then((data) => { 
    // console.log(data);
    data.user && displayLoggedUser(data.user)
    })
    .catch(err => console.log(err));
}

function displayLoggedUser(user){
    showLogin(); 
    const loggedUser= document.querySelector('.username');
    loggedUser.textContent=user;
    showHideIcon(userIcon,true);
    loggedIcon.classList.remove('greenText');

    // hideIcon(userIcon)
}

function checkLoginStatus(){
    // console.log('hi')
    fetch("http://localhost:8085/backend/login.php?q=check_status",{
        method:"GET",
        mode:"cors",
        credentials: "include",
})
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            data.user!='guest' && displayLoggedUser(data.user);
            data.user=='guest' && displayLoginRegister();
        })
        .catch(err => console.log(err));
}

function userLogout(){
    fetch("http://localhost:8085/backend/login.php",{
        method:"GET",
        mode:"cors",
        credentials: "include",
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            data.logout && displayLoginRegister();
    })
    .catch(err => console.log(err));
}

function displayLoginRegister()
{
    // showHideIcon(userIcon,false);
    // showHideIcon(loggedIcon,true);
    // showHideIcon(logOutIcon,true);
    const loggedUser= document.querySelector('.username');
    loggedUser.textContent='';
}

function displayLoggedUser(user){
    showLogin(); 
    const loggedUser= document.querySelector('.username');
    loggedUser.textContent=user;
    // showHideIcon(userIcon,true);
    // showHideIcon(loggedIcon,false);
    // showHideIcon(logOutIcon,false);
    // loggedIcon.classList.add('greenText');
    hideIcon(userIcon)
}


// Code for login ends here

// Code for backend stuff starts here

document.addEventListener('DOMContentLoaded', requestFood);
document.addEventListener('DOMContentLoaded', requestDrinks);
let pmButton=document.querySelector('.plus_minus_button');
// let foodSection=document.querySelector('#food_section');
var btn= document.createElement('div');
// console.log(foodSection)

function requestFood() {
    fetch("http://localhost:8085/backend/foods.php",{
        method:"GET",
        mode:"cors",
        credentials: "include",
})
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            if (data.foods) {
                const food= data.foods;
                const catalog=document.createElement('div');
                const foodSection=document.querySelector('#food_section');
                catalog.className='catalog';

                food.forEach(prod => {
                    const fs=document.createElement('div');
                    fs.className='fs';
                    const nameDiv=document.createElement('div');
                    nameDiv.className='food_list';
                    const priceDiv=document.createElement('div');
                    priceDiv.className='price_list';
                    nameDiv.textContent=prod.name;
                    priceDiv.textContent=prod.price;
                    const pmb=document.createElement('div');
                    pmb.className='plus_minus_button';
                    const pb=document.createElement('button');
                    pb.className='plus';
                    pb.name='plus';
                    pb.id='plus';
                    const mb=document.createElement('button');
                    mb.className='minus';
                    mb.name='minus';
                    const nPlace=document.createElement('input');
                    nPlace.className='numberPlace';
                    nPlace.type=Number;
                    nPlace.value='0';
                    pb.textContent='+';
                    mb.textContent='-';
                    
                    //Function for buttons
                        pb.addEventListener('click', getPB.bind(prod))
                        //     var buttonClicked = event.target;
                        //     var input = buttonClicked.parentElement.children[1];
                        //     var inputValue = input.value;
                        //     var newValue = parseInt(inputValue) + 1;
                        //     input.value = newValue;
                        // })

                        mb.addEventListener('click', getMB.bind(prod))
                        //     var buttonClicked = event.target;
                        //     var input = buttonClicked.parentElement.children[1];
                        //     var inputValue = input.value;
                        //     if (inputValue > 0) {
                        //         var newValue = parseInt(inputValue) - 1;
                        //         input.value = newValue;
                        //     }
                        // })

                    pmb.appendChild(mb);
                    pmb.appendChild(nPlace);
                    pmb.appendChild(pb);
                    fs.appendChild(nameDiv);
                    fs.appendChild(priceDiv);
                    fs.appendChild(pmb);
                    catalog.appendChild(fs);
                });
                foodSection.appendChild(catalog);
            }
        }
        )
        .catch(err => console.log(err));
}



function requestDrinks() {
    fetch("http://localhost:8085/backend/drinks.php",{
        method:"GET",
        mode:"cors",
        credentials: "include",
})
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            if (data.drinks) {
                const drink= data.drinks;
                const catalog=document.createElement('div');
                const drinkSection=document.querySelector('#drink_section');
                catalog.className='catalog';

                drink.forEach(prod => {
                    const fs=document.createElement('div');
                    fs.className='fs';
                    const nameDiv=document.createElement('div');
                    nameDiv.className='drink_list';
                    const priceDiv=document.createElement('div');
                    priceDiv.className='price_list';
                    nameDiv.textContent=prod.name;
                    priceDiv.textContent=prod.price;
                    const pmb=document.createElement('div');
                    pmb.className='plus_minus_button';
                    const pb=document.createElement('button');
                    pb.className='plus';
                    pb.name='plus';
                    pb.id='plus';
                    const mb=document.createElement('button');
                    mb.className='minus';
                    mb.name='minus';
                    const nPlace=document.createElement('input');
                    nPlace.className='numberPlace';
                    nPlace.type=Number;
                    nPlace.value='0';
                    pb.textContent='+';
                    mb.textContent='-';

                    //Function for buttons
                    pb.addEventListener('click', getPB.bind(prod))

                    mb.addEventListener('click', getMB.bind(prod))

                    pmb.appendChild(mb);
                    pmb.appendChild(nPlace);
                    pmb.appendChild(pb);
                    fs.appendChild(nameDiv);
                    fs.appendChild(priceDiv);
                    fs.appendChild(pmb);
                    catalog.appendChild(fs);
                });
                drinkSection.appendChild(catalog);            }

        }
        )
        .catch(err => console.log(err));
}

function getPB(event) {
    console.log(this)
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    var inputValue = input.value;
    var newValue = parseInt(inputValue) + 1;
    input.value = newValue;
}

function getMB(event) {
    console.log(this);
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    var inputValue = input.value;
    if (inputValue > 0) {
        var newValue = parseInt(inputValue) - 1;
        input.value = newValue;
    }
}

// Code for backend stuff ends here




//Filler:

// const foodSec= document.querySelector('#food_section');
//                 const foodDiv= document.createElement('div');
//                 let foodlist;
//                 let pricelist;
//                 // const foodSection= document.createElement('div');
//                 foodDiv.className='fs'
//                 // foodSection.className='fs'
//                 data.foods.forEach(foodEl => {
//                     // console.log(foodEl)
//                     foodlist=document.createElement('div');
//                     pricelist=document.createElement('div');
//                     foodlist.className='food_list';
//                     pricelist.className='price_list';
//                     // console.log(foodlist)
//                     // foodlist.addEventListener('click',getFoodProducts)
//                     foodlist.textContent=foodEl.name;
//                     pricelist.textContent=foodEl.price;

//                     // foodSection.appendChild(foodlist)
//                     // foodSection.appendChild(pricelist)
//                     // foodSec.append(foodDiv);
//                     foodDiv.appendChild(foodlist);
//                     foodDiv.appendChild(pricelist);
//                 });
//                 // foodDiv.appendChild(foodlist);
//                 // foodDiv.appendChild(pricelist);
//                 // foodDiv.append(foodSection)
//                 foodSec.append(foodDiv);
//                 console.log(foodSec)

//filler: method 2

// const drink = data.drinks
//                     .map(drinkData => {
//                         return `
//                         <div class='ds'>
//                             <div class='drink_list'>${drinkData.name}</div>
//                             <div class='price_list'>${drinkData.price}</div>
//                             <div class="plus_minus_button">
//                                 <button class="minus" name="minus" id="minus">-</button>
//                                 <input type="text" class="numberPlace" value="0">
//                                 <button class="plus" name="plus" id="fplus1">+</button>
//                             </div>
//                         </div>
//                         `

//                     })
//                     .join("");
//                 // console.log(drink);
//                 // document.querySelector('#drink_section').innerHTML = drink;
//                 document.querySelector('#drink_section').insertAdjacentHTML("afterbegin",drink)

//  filler:Plus Minus Button

// // Code for plus/minus starts here

// var incBtn = document.getElementsByClassName('plus');
// var decBtn = document.getElementsByClassName('minus');

// //plus
// for (var i = 0; i < incBtn.length; i++) {
//     var button = incBtn[i];
//     button.addEventListener('click', function (event) {
//         // echo('ok');
//         var buttonClicked = event.target;
//         var input = buttonClicked.parentElement.children[1];
//         var inputValue = input.value;
//         var newValue = parseInt(inputValue) + 1;
//         // numberPlace.innerText = newValue;
//         input.value = newValue;
//     })
// }

// //minus
// for (var i = 0; i < decBtn.length; i++) {
//     var button = decBtn[i];
//     button.addEventListener('click', function (event) {
//         var buttonClicked = event.target;
//         var input = buttonClicked.parentElement.children[1];
//         var inputValue = input.value;
//         if (inputValue > 0) {
//             var newValue = parseInt(inputValue) - 1;
//             // numberPlace.innerText = newValue;
//             input.value = newValue;
//         }
//     })
// }
// // Code for plus/minus ends here