
let numbers = '';
let inputValue = document.getElementById('input');
flag = 0;
flagDot = 0;
function getNumber(number) {

    inputNumber = number;
    numbers += inputNumber;

    if (flag == 1) {
        flag = 0
        inputValue.value = '' + inputNumber;
    }
    else inputValue.value += inputNumber;

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

    let inputOperand = numbers;

    const result = inputOperand;

    if (inputOperand[inputOperand.length - 1] != '.' && inputOperand[inputOperand.length - 1] != '*' && inputOperand[inputOperand.length - 1] != '-' && inputOperand[inputOperand.length - 1] != '+' && inputOperand[inputOperand.length - 1] != '/') {

        if (inputOperand != '') {

            switch (operand) {

                case "*":

                    numbers += '*';
                    flag = 1;
                    flagDot = 0;
                    break;

                case "/":

                    numbers += '/';
                    flag = 1;
                    flagDot = 0;
                    break;

                case "-":

                    numbers += '-';
                    flag = 1;
                    flagDot = 0;
                    break;

                case "+":

                    numbers += '+';
                    flag = 1;
                    flagDot = 0;
                    break;
                case ".":
                    if (flagDot == 0) {
                        flagDot = 1;
                        numbers += '.';

                        inputValue.value += '.'
                    }
                    break;
                case "=":
                    flagDot = 1;
                    if (result != '') {
                        res = parseFloat((+eval(result)));
                        inputValue.value = + res;
                    }

                    break;
                default:
                    document.body.textContent = "Nieznana operacja";
                    break;
            }
        }
    }

}

function clearScreen() {
    inputValue.value = "";
    numbers = "";
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
}

