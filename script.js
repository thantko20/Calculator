const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equal = document.getElementById('equal');

const input = document.getElementById('inputDisplay');
const output = document.getElementById('outputDisplay');

let firstNum = '';
let secondNum = '';
let operator = undefined;
let result = 0;

displayInput();

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a > b ? a-b : b-a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    a = parseInt(a);
    b = parseInt(b);

    if(operator === '+') {
        return add(a, b);
    }
}

function displayInput() {
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
    })
}