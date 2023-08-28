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
function displayButton(lol) {

    let num;
    if (equalPressed) {

        reset();
    }
    if (this.textContent !== undefined) {
        num = this.textContent;
    }
    else num = lol;




    arr.push(num);
    if (arr[0] == '0' && arr.length == 2)
        arr.shift();
    message.textContent = arr.join('');
    if (message.textContent.length > 15) {
        message.textContent = 'Length Exceeded!';
        divisionBy0Trigger = true;
        reset();
    }

}

function symbolFunc(e) {


    const selected = document.querySelector('.selected');

    if (selected != null) selected.classList.remove('selected');


    if (equalPressed == true) {

        equalPressed = false;
        decimalExists = false;
        negativeExists = false;

        if (this.classList !== undefined)
            this.classList.add('selected');


    }
    else {

        if (this.classList !== undefined)
            this.classList.add('selected');
        let string = arr.join('');

        if (string == '-') string = -1;
        arr = [];
        decimalExists = false;
        negativeExists = false;
        if (string == '') {
            operator = this.textContent;
            return;
        }

        arr2.push(+string);
    }

    if (arr2.length == 1) {
        if (this.classList !== undefined)
            this.classList.add('selected');

        operator = this.textContent;
        if (this.classList === undefined)
            operator = e.key;
        decimalExists = false;
        negativeExists = false;

    }
    else if (arr2.length == 2) {
        if (this.classList !== undefined)
            this.classList.add('selected');

        number1 = arr2[0];
        number2 = arr2[1];

        let ans = (Math.round(operate(number1, operator, number2) * 1000000000) / 1000000000);
        arr2 = [];
        arr2.push(ans);

        operator = this.textContent;
        if (this.classList === undefined)
            operator = e.key;
        message.textContent = ans;
        decimalExists = false;
        negativeExists = false;
    }




}

function equalFunc() {



    if (arr2.length == 1 && equalPressed == false) {

        const selected = document.querySelector('.selected');
        if (selected != null) selected.classList.remove('selected');

        let string = arr.join('');
        if (string == '-') string = -1;
        if (string == '') {
            message.textContent = "WHAT!?";
            divisionBy0Trigger = true;
            reset();
            return;
        }
        arr = [];
        arr2.push(+string);
        number1 = arr2[0];
        number2 = arr2[1];
        if (operator == '/' && number2 == 0) {
            message.textContent = 'LOL!';
            divisionBy0Trigger = true;

            reset();
            return;
        }
        let ans = (Math.round(operate(number1, operator, number2) * 1000000000) / 1000000000);

        if (ans.toString().length > 15) {
            message.style.fontSize = '35px';
        }
        arr2 = [];
        arr2.push(ans);

        message.textContent = ans;

        equalPressed = true;
        decimalExists = false;
        negativeExists = false;
    }

}

function reset() {
    const selected = document.querySelector('.selected');
    if (selected != null) selected.classList.remove('selected');

    arr = [];
    arr2 = [];
    equalPressed = false;
    if (!divisionBy0Trigger) {
        message.textContent = '';
    }
    divisionBy0Trigger = false;
    decimalExists = false;
    negativeExists = false;
    message.style.fontSize = '50px';


}

function addDecimal() {
    if (equalPressed) {
        reset();
    }
    if (decimalExists) {
        return;
    }
    decimalExists = true;
    if (arr.length == 0) arr.push('0');
    arr.push('.');
    message.textContent = arr.join('');
}
function addNegative() {
    if (equalPressed) {
        reset();
    }
    if (negativeExists) {
        arr.splice(0, 1);
        message.textContent = arr.join('');
        negativeExists = false;
        return;
    }
    else arr.unshift('-');

    negativeExists = true;
    message.textContent = arr.join('');
}

function doBackspace() {
    if (arr.pop() == '.') decimalExists = false;
    message.textContent = arr.join('');
}

function operatorEnabled() {
    this.classList.add('selected');
}
function operatorDisabled() {
    this.classList.remove('selected');
}

function hoverEffect() {
    this.classList.toggle('hover');
}
function clickEffect() {
    this.classList.add('click')
    setTimeout(() => this.classList.remove('click'), 60);

}






let negativeExists = false;
let decimalExists = false;
let divisionBy0Trigger = false;
let arr = [];
let arr2 = [];
let equalPressed = false;
let number1;
let operator;
let number2;

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', doBackspace);
const digits = document.querySelectorAll('.digit');
const symbols = document.querySelectorAll('.symbol');
const message = document.querySelector('.message');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const negative = document.querySelector('.negative');
negative.addEventListener('click', addNegative);
decimal.addEventListener('click', addDecimal);
digits.forEach(button => button.addEventListener('click', displayButton));
symbols.forEach(button => button.addEventListener('click', symbolFunc))
equal.addEventListener('click', equalFunc);
clear.addEventListener('click', reset);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseenter', hoverEffect));
buttons.forEach(button => button.addEventListener('mouseleave', hoverEffect));
buttons.forEach(button => button.addEventListener('click', clickEffect));
buttons.forEach(button => button.addEventListener('click', clickEffect));

window.addEventListener('keydown', (e) => {

    e.preventDefault();
    if (e.key in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) {
        displayButton(e.key);
    }
    else if (e.key == 'Backspace') {
        doBackspace();
    }
    else if (e.key == 'Enter') {
        equalFunc();
    }
    else if (e.key == '.') {
        addDecimal();
    }
    else if (e.key == '/' || e.key == '-' || (e.key == '+' && e.shiftKey) || (e.key == '*' && e.shiftKey)) {

        symbolFunc(e);
    }



});














