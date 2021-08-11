const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equal = document.getElementById('equal');

const input = document.getElementById('inputDisplay');

const ac = document.getElementById('ac');
const del = document.getElementById('backspace');
const minus = document.getElementById('minus');
const dot = document.getElementById('dot');

let firstNum = '';
let secondNum = '';
let operator = undefined;

// Execute the program
main();

function main(){
    display();
    clearAll();
    //clearLast(firstNum);
    //clearLast(secondNum);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function exponentiate(a, b) {
    return a**b;
}

function clearAll() {
    ac.addEventListener('click', () => {
        input.textContent = '';

        firstNum = '';
        secondNum = '';
        operator = undefined;
    })
}

function clearLast(a) {
    del.addEventListener('click', () => {
        let temp = a.split('');
        temp.splice(-1, 1);
        a = temp.join('');
        input.textContent = a;
    })
}

function operate(a, b, operator) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);

    if(operator === '+') return add(num1, num2);
    else if(operator === '-') return subtract(num1, num2);
    else if(operator === '*') return multiply(num1, num2);
    else if(operator === '/') return divide(a, b);
    else return exponentiate(num1, num2);
}

function display() {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            if(operator === undefined) {
                firstNum += number.textContent;
                input.textContent = firstNum;
            }
            else {
                secondNum += number.textContent;
                input.textContent = secondNum;
            }
        })
    })

    operators.forEach(op => {
        op.addEventListener('click', () => {
            operator = op.textContent;
        })
    })

    equal.addEventListener('click', () => {
        input.textContent = operate(firstNum, secondNum, operator);
        operator = undefined;
        firstNum = input.textContent;
        secondNum = '';
    })
}