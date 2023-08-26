function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, op, num2) {
    switch (op) {
        case '+':
            return add(num1, num2);

        case '-':
            return subtract(num1, num2);

        case '*':
            return multiply(num1, num2);

        case '/':
            return divide(num1, num2);

    }
}
function displayButton(e) {
    console.log("Hi");
    if (opSwitch == true) {
        displayVar = this.textContent;
        message.textContent = displayVar;
        opSwitch = false;
    }
    else {
        displayVar += this.textContent;
        message.textContent = displayVar;
    }

    num = num * 10 + +this.textContent;
    console.log(num);
}

function symbolFunc() {
    opSwitch = true;
    console.log("Operator pressed");
    opArray.push(this.textContent);
    numArray.push(num);
    if (numArray.length == 2) {
        number1 = +numArray[0];
        numArray.splice(0, 1);
        number2 = +numArray[0];
        numArray.splice(0, 1);
        operator = opArray[0];
        numArray.unshift(operate(number1, operator, number2));
        opArray.shift();
        message.textContent = numArray[0];
    }
    console.log(numArray);
    console.log(opArray);
    num = 0;
}

function equalFunc() {
    opSwitch = true;
    numArray.push(num);
    if (numArray.length == 2) {
        number1 = +numArray[0];
        numArray.splice(0, 1);
        number2 = +numArray[0];
        numArray.splice(0, 1);
        operator = opArray[0];
        numArray.unshift(operate(number1, operator, number2));
     
    }
    console.log(numArray);
    console.log(opArray);
    num = 0;
    message.textContent = numArray[0];
}





let opSwitch = false;
let number1;
let operator;
let number2;
let displayVar = '';
let numArray = [];
let opArray = [];
let num = 0;

const digits = document.querySelectorAll('.digit');
const symbols = document.querySelectorAll('.symbol');
const message = document.querySelector('.message');
const equal = document.querySelector('.equal');
digits.forEach(button => button.addEventListener('click', displayButton));
symbols.forEach(button => button.addEventListener('click', symbolFunc))
equal.addEventListener('click', equalFunc);


