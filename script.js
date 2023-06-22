

let btns = document.querySelectorAll('.btn');
let screenText = document.querySelector('#screenDisp')

let num1 = null;
let num2 = null;
let opr = null;

let dispTxt = "0"

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


function onBtnClick(event){

    let btnId = event.target.id
    console.log(btnId);
    
    if (btnId == 'ac'){
        dispTxt = "0"
        num1 = 0;
        num2 = 0;
    }
    else if(btnId == 'del'){
        dispTxt = "0"
    }
    else if(btnId == 'div'){
        opr = 'div';
    }
    else if(btnId == 'mul'){
        opr = 'mul';
    }
    else if(btnId == 'min'){
        opr = 'min';
    }
    else if(btnId == 'pls'){
        opr = 'pls';

        if (num1 == null){
            num1 = Number(dispTxt);
            dispTxt = "0";
        } else{
            num2 = Number(dispTxt);
            num1 = operate(num1, num2, opr);
            num2 = null;
            dispTxt = String
        }

    }
    else if(btnId == 'eql'){
        opr = 'eql';
    }
    else if(btnId == 'dot'){
        if (dispTxt.indexOf(".") == -1){
            dispTxt += "."
        }
    }
    
    // If a number is pressed
    else {

        if (dispTxt === "0"){
            dispTxt = btnId;
        }
        else {
            dispTxt += btnId;
        }
        
    }

    // Update Screen Text
    screenText.textContent = dispTxt;

}

btns.forEach((btn) => {
    btn.addEventListener('click', onBtnClick)
});




