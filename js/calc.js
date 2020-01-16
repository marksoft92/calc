let numbers = '';
let operands = '';
let yPow = '';
let xPow = '';
let inputValue = document.getElementById('input');
let inputValuex = document.getElementById('inputx');
currencyClick = '';
dotOperand = '';
flagCurrency = 1;
flag = 0;
click = '';
flagDot = 0;
flagPow = 0;
function getNumber(number) {
    flagCurrency = 1;
    inputNumber = number;
    numbers += inputNumber;
    if (flagCurrency == 1) {
        if (flagPow == 1) {
            yPow += inputNumber;
            flagCurrency = 0;
        }
        else if (flag == 1) {
            flag = 0
            inputValue.value = '' + inputNumber;
        }
        else inputValue.value += inputNumber;
        if (click === 'clicksqrt') {
            inputValuex.value += inputNumber;
        }

        else inputValuex.value += inputNumber
    }
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
    flagPow = 0
    dotOperand = operand;

    if (click === 'clicksqrt') {
        operands += operand;

        if (yPow != '') {
            let lastOperandIndex = operands.length - 2;
            let operandValue = operands.charAt(lastOperandIndex);
            let ySqrt = (1 / yPow)
            console.log('x', ySqrt)
            let resultPow = Math.pow(xPow, ySqrt)

            yPow = '';
            ySqrt = '';
            click = '';
            numbers = numbers.replace(numbers.slice(numbers.lastIndexOf(`${operandValue}`) + 1), resultPow)
            inputValuex.value += ")";
        }
    }
    else if (click === 'clickpow') {
        operands += operand;
        if (yPow != '') {
            let lastOperandIndex = operands.length - 2;
            let operandValue = operands.charAt(lastOperandIndex);
            let resultPow = Math.pow(xPow, yPow)

            yPow = '';
            click = '';
            numbers = numbers.replace(numbers.slice(numbers.indexOf(`${operandValue}`) + 1), resultPow);
        }
    }
    let inputOperand = numbers;
    let result = inputOperand;
    if (inputOperand[inputOperand.length - 1] != '.' && inputOperand[inputOperand.length - 1] != '*' && inputOperand[inputOperand.length - 1] != '-' && inputOperand[inputOperand.length - 1] != '+' && inputOperand[inputOperand.length - 1] != '/') {
        if (inputOperand != '' && inputValuex.value[inputValuex.value.length - 1] != "^") {
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
                        if (flagCurrency == 1) {
                            if (flagDot == 0) {
                                flagDot = 1;
                                numbers += '.';
                                inputValuex.value += '.';
                                inputValue.value += '.';
                                flagCurrency = 0;
                            }
                        }
                        break;
                    case "=":
                        flagDot = 1;
                        if (result != '') {
                            res = parseFloat((+eval(result)));
                            const resu = (currencyClick === 'click' ? res.toFixed(2) : res)
                            inputValue.value = + res;
                            inputValuex.value = + resu + (currencyClick === 'click' ? 'PLN' : '');
                            currencyClick = '';
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
    click = '';
    flagCurrency = 1;
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
}
function getPow() {
    if (flagCurrency == 1) {
        if (inputValuex.value != '') {
            click = 'clickpow';
            xPow = inputValue.value
            if (inputValuex.value[inputValuex.value.length - 1] != '^' && inputValuex.value != '') {
                inputValuex.value += '^';
            }
            flagPow = 1;
            flag = 1;
            flagDot = 0;
            flagCurrency = 0;
        }
    }
}
function getSqrt() {
    if (yPow == '') {
        if (flagCurrency == 1) {
            if (inputValuex.value != '') {
                click = 'clicksqrt';
                xPow = inputValue.value
                if (inputValuex.value[inputValuex.value.length - 1] != '√' && inputValuex.value != '') {
                    inputValuex.value += `^(1/${yPow}`;
                }
                flagPow = 1;
                flag = 1;
                flagDot = 0;
                flagCurrency = 0;
            }
        }
    }
}
fetch("http://api.nbp.pl/api/exchangerates/tables/a/last/?format=json")
    .then(rates => rates.json())
    .then(rates => {
        rate = rates[0].rates;
        rate.forEach(rates => {
            const el = document.createElement("input");
            el.setAttribute("class", `${rates.code}`);
            el.type = "button";
            el.value = `${rates.code}`;
            el.setAttribute("onclick", `getCurrency(${rates.mid},"${rates.code}")`);
            const div = document.querySelector(".currency");
            div.appendChild(el);
        })
    })
function getClassActive() {
    const currency = document.querySelector('.currency')
    currency.classList.toggle('active')
}
function getCurrency(value, code) {
    if (flagCurrency == 1) {
        if (inputValuex.value != '') {
            if (inputValuex.value[inputValuex.value.length - 1] != dotOperand) {
                inputValuex.value += `(${code})`;
                numbers += `*${value}`;
                currencyClick = 'click';
                flagCurrency = 0;
            }
        }

    }
}
let arr = { a: 1, b: 2, c: 3 }



for (let prop in arr) {

    const b = prop + "=" + arr[prop]
    console.log(b)
}