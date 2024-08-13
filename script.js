let result = 0;
let number1 = null;
let number2 = 0;
let numberOfButtonsDigits = 9
let displayPrev = document.getElementById("displayPrev");
let displayCurrent = document.getElementById("displayCurrent");
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const operatorBtn = document.querySelectorAll('.operators');
let buttonsActionsValues = "" ;

let operator = null;

/*let operators = {
    '+': function(a, b){ return a+b},
    '-': function(a, b){ return a-b},
    '/': function(a, b){ return a/b},
    '*': function(a, b){ return a*b}
 }*/

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
    switch(operator) {
    case '+':
        return add(number1, number2);
    break;
    case '-':
        return subtract(number1, number2);
    break;
    case 'x':
        return multiply(number1, number2);
    break;
    case '÷':
        return divide(number1, number2);
    default:
    }
}

    
for (let i =0; i <= numberOfButtonsDigits; i++ ) {
        let btn= document.getElementById("btn" + i);
        if(btn){
            btn.onclick = (event) => {
                getNum(event.target.textContent)
            }
        }
}
function getNum(num) {
    number2 += num;
    number2 = parseFloat(number2);
    displayCurrent.textContent = number2;
}



operatorBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        getOp(event.target.textContent);
    });
});
function getOp(op) {
    if(operator === null){
    number1 = number2;
    } else if (number1 != null) {
        number1 = operate(number1,operator,number2)
    }

    displayPrev.textContent = number1 + ' ' + operator;
    operator = op;
    number2 = '';
    displayCurrent.innerHTML = '0';
}

function buttonSubmit() {
    if(submit) {
    submit.onclick = () => {
        let operates = operate(number1,operator,number2)
        console.log(operates)
        displayCurrent.innerHTML = operates
        }
    }
}



function buttonClear() {
    if(clear) {
    clear.onclick = () => {
        number2 = ''
        displayPrev.textContent = ''
        displayCurrent.textContent = ''
        }
    }
}

buttonClear()
buttonSubmit()