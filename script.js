const buttons = document.querySelectorAll('button');
const input = document.getElementById('inputDisplay');
const output = document.getElementById('outputDisplay');

const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('divison');

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

function operate(a, b) {
    addition.addEventListener('click', () => {
        add(a, b);
    })
    // code to implement when add is called
    
    subtract(a, b);
    // code to implement when subtract is called

    multiply(a, b);
    // code to implement when multiply is called

    divide(a, b);
    // code to implement when divide is called

}

function displayInput(a, b) {
    const result = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            input.textContent += button.value;
        })
    })

    return addition.addEventListener('click', () => {
        return add(a, b);
    })
}

function displayOutput() {
    return displayInput();
}

displayInput();