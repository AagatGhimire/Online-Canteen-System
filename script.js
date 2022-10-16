//Online Canteen System


// Code for plus/minus starts here

var incBtn = document.getElementsByClassName('plus');
var decBtn = document.getElementsByClassName('minus');

//plus
for (var i = 0; i < incBtn.length; i++) {
    var button = incBtn[i];
    button.addEventListener('click', function (event) {
        // echo('ok');
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
let pmButton=document.querySelector('.plus_minus_button');
// let foodSection=document.querySelector('#food_section');
var btn= document.createElement('div');
// console.log(foodSection)

function requestFood() {
    fetch("http://localhost:8085/backend/foods.php")
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
                    pb.addEventListener('click', pbclicked)
                    mb.addEventListener('click', mbclicked)
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
    fetch("http://localhost:8085/backend/drinks.php")
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
                    pb.addEventListener('click', pbclicked)
                    mb.addEventListener('click', mbclicked)
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

function pbclicked(){
    console.log('ok',this)
        // var buttonClicked = event.target;
        // var input = buttonClicked.parentElement.children[1];
        // var inputValue = input.value;
        // var newValue = parseInt(inputValue) + 1;
        // // numberPlace.innerText = newValue;
        // input.value = newValue;
}
function mbclicked(){
    console.log('hmm')
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