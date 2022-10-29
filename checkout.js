// document.addEventListener('DOMContentLoaded',addCheckoutItems);
// const checkoutSection=document.querySelector('#checkout_section');
// checkoutSection.addEventListener('onload',addCheckoutItems)
function addCheckoutItems(data){
    console.log(data);
    const {total,...cart}=data.cart;
    // console.log(data.cart);
    localCart.cart=cart;
    localCart.total=total;
    // console.log(total);
    const checkoutSection=document.querySelector('#checkout_section');
    const checkout_catalog=document.createElement('div');
    checkout_catalog.className='checkout_catalog';

    const checkout_name=document.createElement('span');
    // checkout_name.className='checkout_name';
    // checkout_name.textContent="Name";
    // const checkout_qty=document.createElement('span');
    // checkout_qty.className='checkout_qty';
    // checkout_name.textContent="Quantity"

    // checkout_catalog.appendChild(checkout_name);
    // checkout_catalog.appendChild(checkout_qty);    
    for(const [id,product]of Object.entries(localCart.cart)){
        const {name,price,quantity}=product;
        // console.log(price);



        const checkoutsect=document.createElement('div');
        checkoutsect.className='checkoutsect';
        // checkoutsect.setAttribute('item_name',name);
        const checkout_item_title=document.createElement('span');
        checkout_item_title.className='checkout_item_title';
        const checkout_item_price=document.createElement('span');
        checkout_item_price.className='checkout_item_price';
        const checkout_item_qty=document.createElement('span');
        checkout_item_qty.className='checkout_item_qty';
        const checkout_removeBtn=document.createElement('span');
        checkout_removeBtn.className='checkout_removeBtn';

        checkout_item_title.textContent=name;
        checkout_item_price.textContent=price;
        checkout_item_qty.textContent=quantity;
        checkout_removeBtn.textContent='X';

        checkout_removeBtn.addEventListener('click',deleteProuct.bind(id));

        checkoutsect.appendChild(checkout_item_title);
        checkoutsect.appendChild(checkout_item_price);
        checkoutsect.appendChild(checkout_item_qty);
        checkoutsect.appendChild(checkout_removeBtn);
        checkout_catalog.appendChild(checkoutsect);
        
    }
    const subTotal=document.querySelector('.item_subtotal');
    
    checkoutSection.appendChild(checkout_catalog);
    }
    // let itemsToBuy=[]
    // const itemRows=document.querySelectorAll('.catalog');
    // // console.log(itemRows);
    // itemRows.forEach(row=>{
    //     let obj={}
    //     item_name=row.getAttribute('item_name');
    //     console.log(item_name);
    // })