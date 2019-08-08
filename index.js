const outPutDiv = document.querySelector('div');
const form = document.createElement('form');
outPutDiv.appendChild(form);

const input = document.createElement('input');
form.appendChild(input);
input.type = 'text';
input.classList.add('display');
input.setAttribute('readonly', true);
const display = document.querySelector('.display');

const digits = document.createElement('div');
form.appendChild(digits);
digits.id = 'digits';

for (let i = 0; i < 10; i++) {
    const buttons = document.createElement('button');
    digits.appendChild(buttons);
    buttons.innerText = i;
}
const digitsAll = document.querySelectorAll('#digits button');
console.log(digitsAll);

const operations = document.createElement('div');
form.appendChild(operations);
operations.id = 'operation'

for (let i = 0; i < 6; i++) {
    const buttonOperations = document.createElement('button');
    operations.appendChild(buttonOperations);
    console.log(buttonOperations);
}
const buttonOpSymbols = document.querySelectorAll('#operation button');
console.log(buttonOpSymbols);

buttonOpSymbols[0].innerText = '+';
buttonOpSymbols[1].innerText = '-';
buttonOpSymbols[2].innerText = '/';
buttonOpSymbols[3].innerText = '*';
buttonOpSymbols[4].innerText = '.';
buttonOpSymbols[5].innerText = 'c';


const digitsAndOperations = document.querySelectorAll('#digits button, #operation button');

digitsAndOperations.forEach(digit => digit.addEventListener('click', digitsAndOperationsPressed));

function digitsAndOperationsPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
    if (e.target.innerText === 'c') {
        display.value = ' ';
    }
}

const equal = document.createElement('button');
form.appendChild(equal);
equal.classList.add('eq');
equal.innerText = '=';
const equalButton = document.querySelector('.eq');
equalButton.addEventListener('click', equalPressed);

function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}
