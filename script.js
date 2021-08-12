const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equal = document.getElementById('equal');
const sqrt = document.getElementById('sqrt');

const input = document.getElementById('inputDisplay');

const ac = document.getElementById('ac');
const minus = document.getElementById('minus');
// const dot = document.getElementById('dot'); // Feature to be added

let firstNum = '';
let secondNum = '';
let operator = undefined;

// Execute the program
main();

function main(){
    display();
    clearAll();
    // Square Root
    sqrt.addEventListener('click', () => {
        firstNum = Math.sqrt(firstNum);
        input.textContent = firstNum;
    })

    // Operator listeners
    operators.forEach(op => {
        op.addEventListener('click', () => {
            if(operator || !firstNum) return;
            operator = op.textContent;
        })
    })
    // Converts into negative integer
    minus.addEventListener('click', () => {
        if(operator === undefined) {
            firstNum = -firstNum;
            input.textContent = firstNum;
        }
        else {
            secondNum = -secondNum;
            input.textContent = secondNum;
        }
    })
    // If equal is click, calculate the numbers according to the selected operator
    equal.addEventListener('click', () => {
        input.textContent = operate(firstNum, secondNum, operator);
        operator = undefined;
        firstNum = input.textContent;
        secondNum = '';
    })
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
        input.textContent = '0';

        firstNum = '';
        secondNum = '';
        operator = undefined;
    })
}

function operate(a, b, operator) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);

    if(operator === '+') return add(num1, num2);
    else if(operator === '-') return subtract(num1, num2);
    else if(operator === '*') return multiply(num1, num2);
    else if(operator === '/') return divide(num1, num2);
    else return exponentiate(num1, num2);
}

function display() {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            // If operator isnt chosen, consider the number as number 1
            if(operator === undefined) {
                firstNum += number.textContent;
                input.textContent = firstNum;
            }
            // After operator is chosen, it is number 2
            else {
                secondNum += number.textContent;
                input.textContent = secondNum;
            }
        })
    })
}
// Feature to be added
/*function checkDot(a) {
    let temp = a.split('');
    for(let i = 0; i < temp.length; i++) {
        if(temp[i] === '.') return true;
    }
    return false;
}*/