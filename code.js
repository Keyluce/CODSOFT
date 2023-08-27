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

    if (equalPressed) {
        reset();
    }
    arr.push(this.textContent);
    if (arr[0] == '0' && arr.length == 2) 
    arr.shift();
    message.textContent = arr.join('');
    console.log(arr);
}

function symbolFunc() {
    console.log(`arr is: ${arr}`);
    console.log('Symbol pressed');

    if (equalPressed == true) {

        equalPressed = false;
        decimalExists = false;
        negativeExists = false;
    }
    else {
        console.log("Else");
        let string = arr.join('');
        if (string == '-') string = -1; 
        arr = [];
        decimalExists = false;
        negativeExists = false;
        if (string == '') {
            operator = this.textContent;
            return;
        }
        console.log(`String is ${string}`);
        arr2.push(+string);
    }

    if (arr2.length == 1) {
        operator = this.textContent;
        decimalExists = false;
        negativeExists = false;

    }
    else if (arr2.length == 2) {
        console.log(`Array 2 is : ${arr2}`);
        number1 = arr2[0];
        number2 = arr2[1];
        console.log(`Two numbers are: ${number1}, ${number2}`);
        let ans = (Math.round(operate(number1, operator, number2) * 1000000000)/1000000000);
        arr2 = [];
        arr2.push(ans);
        console.log(ans);
        operator = this.textContent;
        message.textContent = ans;
        decimalExists = false;
        negativeExists = false;
    }
    
    console.log(`this is array 2 ${arr2}`);
    console.log(`this is operator: ${operator}`);


}

function equalFunc() {



    if (arr2.length == 1 && equalPressed == false) {
        
        console.log("Hi");
        let string = arr.join('');
        if (string == '-') string = -1; 
        arr = [];
        arr2.push(+string);
        number1 = arr2[0];
        number2 = arr2[1];
        if (operator == '/' && number2 == 0)
        {   
            message.textContent = 'LOL!';
            divisionBy0Trigger = true;

            reset();
            return;
        }
        let ans = (Math.round(operate(number1, operator, number2) * 1000000000)/1000000000);
        arr2 = [];
        arr2.push(ans);
        console.log(ans);
        message.textContent = ans;
        console.log(arr2);
        console.log(arr);
        equalPressed = true;
        decimalExists = false;
        negativeExists = false;
    }

}

function reset() {
    console.log("RESET");
    arr = [];
    arr2 = [];
    equalPressed = false;
    if (!divisionBy0Trigger)
    {
        message.textContent = '';
    }
    divisionBy0Trigger = false;
    decimalExists = false;
    negativeExists = false;
    
}

function addDecimal(){
    if (equalPressed)
    {
        reset();
    }
    if (decimalExists)
    {
        return;
    }
    decimalExists = true;
    if (arr.length == 0) arr.push('0');
    arr.push('.');
    message.textContent = arr.join('');
}
function addNegative()
{ 
    if (equalPressed)
    {
        reset();
    }
    if (negativeExists)
    {
        arr.splice(0,1);
        message.textContent = arr.join('');
        negativeExists = false;
        return;
    }
    else arr.unshift('-');
    
    negativeExists = true;
    message.textContent = arr.join('');
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


