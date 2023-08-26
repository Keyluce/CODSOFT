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
   
   arr.push(this.textContent);
   message.textContent = arr.join('');
   console.log(arr);
}

function symbolFunc() {
    console.log('Symbol pressed');
    let string = arr.join('');
    arr = [];
    arr2.push(+string);
    if (arr2.length == 1)
    {  
        operator = this.textContent;
        
    }
    else if(arr2.length == 2){
        number1 = arr2[0];
        number2 = arr2[1];
        let ans = operate(number1,operator,number2);
        arr2 = [];  
        arr2.push(ans); 
        console.log(ans);
        operator = this.textContent;
        message.textContent = ans;
    }
    console.log(`this is array 2 ${arr2}`);
    console.log(`this is operator: ${operator}`);
    

}

function equalFunc() {
   
}



let arr = [];
let arr2= [];



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


