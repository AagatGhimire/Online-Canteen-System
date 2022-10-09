//Online Canteen System

// Code for plus/minus starts here

var incBtn=document.getElementsByClassName('plus');
var decBtn=document.getElementsByClassName('minus');

//plus
for(var i=0;i<incBtn.length;i++)
{
    var button=incBtn[i];
    button.addEventListener('click',function(event){
        var buttonClicked=event.target;
        var input=buttonClicked.parentElement.children[1];
        var inputValue=input.value;
        var newValue=parseInt(inputValue)+1;
        // numberPlace.innerText = newValue;
        input.value=newValue;
    })
}

//minus
for(var i=0;i<decBtn.length;i++)
{
    var button=decBtn[i];
    button.addEventListener('click',function(event){
        var buttonClicked=event.target;
        var input=buttonClicked.parentElement.children[1];
        var inputValue=input.value;
        if(inputValue>0)
        {
        var newValue=parseInt(inputValue)-1;
        // numberPlace.innerText = newValue;
        input.value=newValue;
        }
    })
}
// Code for plus/minus ends here

// Code for cart starts here
const cartIcon=document.querySelector('.fa-basket-shopping');
cartIcon.addEventListener('mouseover',()=>{
    
})
// Code for cart ends here 