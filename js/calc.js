

function getNumber(number) {

    const inputNumber = document.getElementById('input');

    switch (number) {
        case 1:
            inputNumber.value += '1';

            break;

        case 2:
            inputNumber.value += '2';
            break;

        case 3:
            inputNumber.value += '3';
            break;

        case 4:
            inputNumber.value += '4';
            break;

        case 5:
            inputNumber.value += '5';
            break;

        case 6:
            inputNumber.value += '6';
            break;

        case 7:
            inputNumber.value += '7';
            break;

        case 8:
            inputNumber.value += '8';
            break;

        case 9:
            inputNumber.value += '9';
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

    const inputOperand = document.getElementById('input');

    const wynik = inputOperand.value





    if (inputOperand.value[inputOperand.value.length - 1] != '.' && inputOperand.value[inputOperand.value.length - 1] != '*' && inputOperand.value[inputOperand.value.length - 1] != '-' && inputOperand.value[inputOperand.value.length - 1] != '+' && inputOperand.value[inputOperand.value.length - 1] != '/') {

        if (inputOperand.value != '') {


            switch (operand) {


                case "*":

                    inputOperand.value += '*';

                    break;

                case "/":


                    inputOperand.value += '/';


                    break;

                case "-":

                    inputOperand.value += '-';


                    break;

                case "+":


                    inputOperand.value += '+';


                    break;
                case ".":

                    inputOperand.value += '.';


                    break;
                case "=":
                    if (wynik != '') {
                        res = parseFloat((+eval(wynik)));

                        document.getElementById('input').value = + res;
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
    document.getElementById('input').value = "";

}

function clearLast() {
    const Numbers = document.getElementById('input');

    const num = Numbers.value;
    let lastNumber = num.toString();

    if (lastNumber.length > 0) {
        lastNumber = lastNumber.substring(0, lastNumber.length - 1);
        Numbers.value = lastNumber;


    }

}
/*
function getComputed() {

    const results = document.getElementById('input');
    if (results.value != '') {
        res = parseFloat((+eval(results.value)));

        document.getElementById('input').value = + res;
    }
}
*/
