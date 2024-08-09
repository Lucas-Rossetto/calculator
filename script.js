let result = 0;
let number1 = 0;
let number2 = 0;
let displayElem = document.getElementById("display");
let operators = {
    '+': function(a, b){ return a+b},
    '-': function(a, b){ return a-b},
    '/': function(a, b){ return a/b},
    '*': function(a, b){ return a*b}
 }

function add(number1,number2) {
    result = number1 + number2
    return result
}
function subtract(number1,number2){
    result = number1 - number2
    return result
}
function multiply(number1,number2){
    result = number1 * number2
    return result
}
function divide(number1,number2){
    result = number1 / number2
    return result
}

function operate(number1,operator,number2){
    if (operator === '+') add(number1,number2)
    else if (operator === '-') subtract(number1,number2)
    else if (operator === '*') multiply(number1,number2)
    else if (operator === '/') divide(number1,number2)
    else return NaN
}

function display() {
    
    let btn1 = document.getElementById("one").value
    let btn2 = document.getElementById("two").value
    let btn3 = document.getElementById("three").value;
    let btn4 = document.getElementById("four").value;
    let btn5 = document.getElementById("five").value;
    let btn6 = document.getElementById("six").value;
    let btn7 = document.getElementById("seven").value;
    let btn8 = document.getElementById("eight").value;
    let btn9 = document.getElementById("nine").value;
    let btn0 = document.getElementById("zero").value;

    displayElem.innerHTML
}
