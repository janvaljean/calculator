//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const display = document.querySelector('.current-display');
const keys = document.querySelector('.buttons-container');

let displayValue = "0";

newDisplay();

function newDisplay() {
    display.textContent = displayValue;
    

}

keys.addEventListener("click", function(e){
    let el = e.target;
    if(!el.matches('.button'))return;

    if(el.classList.contains('operator')){
        console.log("operator", el.textContent);
        return; 
    }
    //decimal dont work again
    if(el.classList.contains('decimal')){
        inputDecimal();
        newDisplay();
        return;
    }
    //delete display
    if(el.classList.contains('ac')){
        clearDisplay();
        newDisplay();
        return;
    }
    if(el.classList.contains('equal')){
        console.log("equal", el.textContent);
        return;
  
    }
    
    inputNumber(el.textContent);
    newDisplay();


})

function inputNumber(num) {

    displayValue = displayValue === "0"? num : displayValue + num;
    
}
function inputDecimal() {
    if(!displayValue.includes(".")){
        displayValue   += ".";
    }
}
function clearDisplay() {
    displayValue = "0";

}

        

