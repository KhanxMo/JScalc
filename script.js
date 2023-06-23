// Script for Calculator 



// Defining Variables
let btns = document.querySelectorAll('.btn');
let screenText = document.querySelector('#screenDisp')

let num1 = null;
let num2 = null;
let opr = null;

let dispTxt = "0"
let clearNext = false;

let lastKey = null;

/**
 * 
 * @param {Number} num1 The first number in the operation. 
 * @param {Number} num2 The second number in the operation. 
 * @param {String} opr The type of operation (div, mul, min, pls).
 * @returns {Number} The result of the operation. 
 */
function operate(num1, num2, opr){

    if (opr == "div"){
        return num1 / num2;
    }
    else if (opr == "mul"){
        return num1 * num2;
    }
    else if (opr == "min"){
        return num1 - num2;
    }
    else {
        return num1 + num2;
    }
}



function del(text){

    if (text.length == 1){
        return "0";
    }
    return text.slice(0, -1);
}

function dot(text){
    // If dot does not exist, add a dot.
    if (text.indexOf(".") == -1){
        return text += "."
    }
    return text
}





// Called when a button is clicked, and handles what to do with the click. 
function onBtnClick(event){

    // Getting what is clicked
    let btnId = event.target.id
    console.log(btnId);
    
    // Cases based on whats is clicked
    if (btnId == 'ac'){
        dispTxt = "0"
        num1 = 0;
        num2 = 0;
        lastKey = "ac";
    }
    else if(btnId == 'del'){
        dispTxt = del(dispTxt);
        lastKey = "del";
    }
    else if(btnId == 'dot'){
        dispTxt = dot(dispTxt);
        lastKey = "dot";
    }

    else if(btnId == 'div'){
        opr = 'div';
        lastKey = "div";
    }
    else if(btnId == 'mul'){
        opr = 'mul';
        lastKey = "mul";
    }
    else if(btnId == 'min'){
        opr = 'min';
        lastKey = "min";
    }
    else if(btnId == 'pls'){
        if (lastKey == "num"){
            opr = 'pls';
            if (num1 == null){
                num1 = Number(dispTxt);
                dispTxt = "0";
            }
            else{
                num1 = operate(num1, Number(dispTxt), opr);
                dispTxt = num1;
                clearNext = true;
            }
        }
        lastKey = "pls";
    }
    else if(btnId == 'eql'){
        
        if (lastKey == "num"){
            if (num1){
                num1 = operate(num1, Number(dispTxt), opr);
                dispTxt = num1;
                clearNext = true;
            }
        }

        lastKey = "eql";
    }
    
    // If a number is pressed
    else {

        if (clearNext){
            dispTxt = "0";
        }

        if (dispTxt === "0"){
            dispTxt = btnId;
        }
        else {
            dispTxt += btnId;
        }

        lastKey = "num";
    }

    // Update Screen Text
    screenText.textContent = dispTxt;

}



btns.forEach((btn) => {
    btn.addEventListener('click', onBtnClick)
});




