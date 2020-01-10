let numbers = '';
let yPow = '';
let xPow = '';
let inputValue = document.getElementById('input');
let inputValuex = document.getElementById('inputx');
flag = 0;
click = '';
flagDot = 0;
flagPow = 0;
function getNumber(number) {

    inputNumber = number;
    numbers += inputNumber;
    if (flagPow == 1) {
        yPow += inputNumber;

        flagPow = 0

    }
    else if (flag == 1) {
        flag = 0
        inputValue.value = '' + inputNumber;
    }
    else inputValue.value += inputNumber;
    if (click === 'clicksqrt') {
        inputValuex.value += inputNumber + ')';

    }
    else inputValuex.value += inputNumber
    switch (number) {
        case 1:
            inputNumber += '1';
            break;

        case 2:
            inputNumber += '2';
            break;

        case 3:
            inputNumber += '3';
            break;

        case 4:
            inputNumber += '4';
            break;

        case 5:
            inputNumber += '5';
            break;

        case 6:
            inputNumber += '6';
            break;

        case 7:
            inputNumber += '7';
            break;

        case 8:
            inputNumber += '8';
            break;

        case 9:
            inputNumber += '9';
            break;

        case 0:
            inputNumber.value += '0';
            break;
        default:
            document.body.textContent = "Nieznana operacja";
            break;
    }
}

function getOperand(operand) {

    if (click === 'clicksqrt') {

        if (yPow != '') {
            let ySqrt = (1 / yPow)
            let resultPow = Math.pow(xPow, ySqrt)
            yPow = '';
            ySqrt = '';
            click = '';
            numbers = numbers.replace(numbers.slice(numbers.indexOf(`"${operand}"`) - 1), resultPow);
            console.log(numbers)
        }
    }
    else if (click === 'clickpow') {

        if (yPow != '') {
            let resultPow = Math.pow(xPow, yPow)
            yPow = '';
            click = '';
            numbers = numbers.replace(numbers.slice(numbers.indexOf(`"${operand}"`) - 1), resultPow);
            console.log(resultPow);
            console.log(operand)
        }
    }


    let inputOperand = numbers;
    let result = inputOperand;


    if (inputOperand[inputOperand.length - 1] != '.' && inputOperand[inputOperand.length - 1] != '*' && inputOperand[inputOperand.length - 1] != '-' && inputOperand[inputOperand.length - 1] != '+' && inputOperand[inputOperand.length - 1] != '/') {

        if (inputOperand != '') {
            if (flagPow == 0) {

                switch (operand) {

                    case "*":
                        inputValuex.value += '*'
                        numbers += '*';
                        flag = 1;
                        flagDot = 0;

                        break;

                    case "/":
                        inputValuex.value += '/'
                        numbers += '/';
                        flag = 1;
                        flagDot = 0;
                        break;

                    case "-":
                        inputValuex.value += '-'
                        numbers += '-';
                        flag = 1;
                        flagDot = 0;
                        break;

                    case "+":
                        inputValuex.value += '+'
                        numbers += '+';
                        flag = 1;
                        flagDot = 0;
                        break;
                    case ".":
                        if (flagDot == 0) {
                            flagDot = 1;
                            numbers += '.';
                            inputValuex.value += '.'
                            inputValue.value += '.'
                        }
                        break;
                    case "=":

                        flagDot = 1;
                        if (result != '') {
                            res = parseFloat((+eval(result)));
                            inputValue.value = + res;
                            inputValuex.value = + res;
                        }

                        break;
                    default:
                        document.body.textContent = "Nieznana operacja";
                        break;
                }
            }
        }
    }

}

function clearScreen() {
    inputValue.value = "";
    numbers = "";
    yPow = '';
    inputValuex.value = "";
}

function clearLast() {


    const numb = numbers;
    let lastNumber = numb.toString();

    if (lastNumber.length > 0) {
        lastNumber = lastNumber.substring(0, lastNumber.length - 1);
        numbers = lastNumber;
    }

    const inputNumbers = inputValue.value;
    let lastInputNumbers = inputNumbers.toString();
    if (lastInputNumbers.length > 0) {
        lastInputNumbers = lastInputNumbers.substring(0, lastInputNumbers.length - 1);
        inputValue.value = lastInputNumbers;
    }

    const inputNumbersVal = inputValuex.value;
    let lastInputNumbersVal = inputNumbersVal.toString();
    if (lastInputNumbersVal.length > 0) {
        lastInputNumbersVal = lastInputNumbersVal.substring(0, lastInputNumbersVal.length - 1);
        inputValuex.value = lastInputNumbersVal;
    }
}

function getPow() {
    if (inputValuex.value != '') {
        click = 'clickpow';
        xPow = inputValue.value
        if (inputValuex.value[inputValuex.value.length - 1] != '^' && inputValuex.value != '') {
            inputValuex.value += '^';
        }
        flagPow = 1;
        flag = 1;
        flagDot = 0; console.log(numbers)
    }
}

function getSqrt() {
    if (inputValuex.value != '') {
        click = 'clicksqrt';
        xPow = inputValue.value
        if (inputValuex.value[inputValuex.value.length - 1] != '√' && inputValuex.value != '') {
            inputValuex.value += `^(1/${yPow}`;
        }
        flagPow = 1;
        flag = 1;
        flagDot = 0;
    }
}


