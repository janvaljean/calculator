//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const display = document.querySelector('.current-display');
const keys = document.querySelector('.buttons-container');
const preDisplay = document.querySelector('.previous-display');


let displayValue = "0";
let previousDisplayValue =null;
let operator = null;
let waitingForSecondValue = false

newDisplay();

function newDisplay() {
    display.textContent = displayValue;
    preDisplay.textContent = previousDisplayValue;

}

keys.addEventListener("click", function(e){
    let el = e.target;
    if(!el.matches('.button'))return;

    if(el.classList.contains('operator')){
        console.log("operator", el.textContent);
        handleOperator(el.textContent);
        newDisplay()

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

    if(el.classList.contains('percent')){
        console.log("percent", el.textContent);
        
        return;
  
    }
    
    inputNumber(el.textContent);
    newDisplay();


})

function inputNumber(num) {
    if(waitingForSecondValue){
        displayValue = num;
        waitingForSecondValue = false;  
    }
    else{
    displayValue = displayValue === "0"? num : displayValue + num;
    }
    console.log("displayValue", displayValue);
    console.log("previousDisplayValue", previousDisplayValue);

}


function inputDecimal() {
    if(!displayValue.includes(".")){
        displayValue   += ".";
    }
}


function clearDisplay() {
    displayValue = "0";
    previousDisplayValue = "0";

}


function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);

    if(operator && waitingForSecondValue){
        operator = nextOperator;
        return;
    }
    if(previousDisplayValue === null){
        previousDisplayValue = value
    }else if(operator){
        const result = calculate(previousDisplayValue, value, operator);
        displayValue = result.toFixed(2);
        previousDisplayValue = result;
    }
    waitingForSecondValue = true;
    operator = nextOperator;

    console.log(displayValue, previousDisplayValue, operator,waitingForSecondValue);

}
function calculate(previousValue, currentValue, operator) {
    if(operator === '+'){
        return previousValue + currentValue;
    }else if(operator === '-'){
        return previousValue - currentValue;  
    }else if(operator === 'x'){
        return previousValue * currentValue
    }else if(operator === '÷'){
        return previousValue / currentValue 
    }
    return currentValue;
}

        

