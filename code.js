function add(num1,num2)
{
    return num1 + num2;
}
function subtract(num1,num2)
{
    return num1 - num2;
}
function multiply(num1,num2)
{
    return num1 * num2;
}
function divide(num1,num2)
{
    return num1 / num2;
}

function operate(num1,op,num2)
{
    switch (op)
    {
        case '+':
            return add(num1,num2);
        
        case '-':
            return subtract(num1,num2);
       
        case '*':
            return multiply(num1,num2);
       
        case '/':
            return divide(num1,num2);
         
    }
}
let number1;
let operator;
let number2;
let displayVar = '';


function displayButton(e){
    displayVar = this.textContent; 
    message.textContent += displayVar;


}



const buttons = document.querySelectorAll('button');
const message = document.querySelector('.message');
buttons.forEach(button => button.addEventListener('click', displayButton));



