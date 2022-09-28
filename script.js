//Online Canteen System

// Code for plus/minus

    var minusBtn = document.getElementsByClassName("minus");
     var plusBtn = document.getElementsByClassName("plus");
     var numberPlace = document.getElementsByClassName("numberPlace");
     var number = 0;
     var min = 0;

    // Only works for 1 element becuase ID must be unique
    /*
    var minusBtn = document.getElementById("minus");
    var plusBtn = document.getElementById("plus");
    var numberPlace = document.getElementById("numberPlace");
    var number = 0;
    var min = 0;
    */
    
    minusBtn.onclick = function () {
        if (number > min) {
            number = number - 1;
            numberPlace.innerText = number;
        }
    }

    plusBtn.onclick = function () {
            number = number + 1;
            numberPlace.innerText = number;
    }