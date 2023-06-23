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
 * @param {Number} num1 The first number in the operation. 
 * @param {Number} num2 The second number in the operation. 
 * @param {String} opr The type of operation (div, mul, min, pls).
 * @returns {String} The result of the operation. 
 */
function operate(num1, num2, opr){
    if (opr == "div"){
        return String(num1 / num2);
    }
    else if (opr == "mul"){
        return String(num1 * num2);
    }
    else if (opr == "min"){
        return String(num1 - num2);
    }
    else {
        return String(num1 + num2);
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

// Sets "name" key to active state, and sets the last one to inactive.
function activeKey(name, last){
    if (name){
        let key = document.querySelector("#"+name);
        key.classList += " activeKey";
    }
    
    if (last){
        key = document.querySelector("#"+last);

        if (key && key.classList.contains("activeKey")){
            key.classList.remove("activeKey");
        } 
    }

}



// Called when a button is clicked, and handles what to do with the click. 
function onBtnClick(event){

    // Getting what is clicked
    let btnId = event.target.id
    console.log(btnId);
    
    // Cases based on whats is clicked
    if (btnId == 'ac'){
        dispTxt = "0"
        opr = null;
        num1 = null;
        num2 = null;

        activeKey(null, lastKey);
        lastKey = "ac";
    }
    else if(btnId == 'del'){
        dispTxt = del(dispTxt);

        num1 = null;

        activeKey(null, lastKey);
        lastKey = "del";
    }
    else if(btnId == 'dot'){
        dispTxt = dot(dispTxt);

        activeKey(null, lastKey);
        lastKey = "dot";
    }

    else if(btnId == 'div'){
        opr = 'div';
        clearNext = true;

        if (num1 == null || lastKey == "eql"){
            num1 = Number(dispTxt);
        } 

        activeKey("div", lastKey);
        lastKey = "div";
    }
    else if(btnId == 'mul'){
        opr = 'mul';
        clearNext = true;

        if (num1 == null || lastKey == "eql"){
            num1 = Number(dispTxt);
        } 

        activeKey("mul", lastKey);
        lastKey = "mul";
    }
    else if(btnId == 'min'){
        opr = 'min';
        clearNext = true;

        if (num1 == null || lastKey == "eql"){
            num1 = Number(dispTxt);
        } 

        activeKey("min", lastKey);
        lastKey = "min";
    }
    else if(btnId == 'pls'){
        opr = 'pls';
        clearNext = true;

        if (num1 == null || lastKey == "eql"){
            num1 = Number(dispTxt);
        } 

        activeKey("pls", lastKey);
        lastKey = "pls";
    }
    else if(btnId == 'eql'){

        // console.log(`num1: ${num1}, num2: ${num2}`)

        if (num1 == null){
            num1 = Number(dispTxt);
        }
        if (opr){
            let temp = Number(dispTxt)
        
            if (lastKey != "eql"){
                dispTxt = operate(num1, temp, opr);
                num1 = temp;
            } else{
                dispTxt = operate(temp, num1, opr);
            }
        }


        activeKey(null, lastKey);
        lastKey = "eql";
    }
    
    // If a number is pressed
    else {

        if (clearNext){
            dispTxt = "0";
            clearNext = false;
        }

        if (dispTxt === "0"){
            dispTxt = String(btnId);
        }
        else {
            dispTxt += String(btnId);
        }
        activeKey(null, lastKey);
        lastKey = "num";
    }

    // Update Screen Text
    screenText.textContent = dispTxt;

}



btns.forEach((btn) => {
    btn.addEventListener('click', onBtnClick)
});




