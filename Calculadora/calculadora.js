document.addEventListener('DOMContentLoaded', function () {

    let display = document.getElementById('result');
    let operand1 = '';
    let operator = '';
    let operand2 = '';


    const clearDisplay = () => {
        display.textContent = '0';
    };

    const updateDisplay = () => {
        display.textContent = operand1 + operator + operand2;
    };

    const appendToOperand = (value) => {
        if (operator === '') {
            operand1 += value;
        } else {
            operand2 += value;
        }
        updateDisplay();
    };

    const setOperator = (op) => {
        if (operator !== '') {
            calculate();
        }
        operator = op;
        updateDisplay();
    };

    const calculate = () => {
        if (operand1 !== '' && operand2 !== '') {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(operand1) + parseFloat(operand2);
                    break;
                case '-':
                    result = parseFloat(operand1) - parseFloat(operand2);
                    break;
                case 'x':
                    result = parseFloat(operand1) * parseFloat(operand2);
                    break;
                case '÷':
                    if (parseFloat(operand2) === 0) {
                        result = 'Numero no valido';
                    } else {
                        result = parseFloat(operand1) / parseFloat(operand2);
                    }
                    break;
                default:
                    break;
            }
            clearDisplay();
            display.textContent = result;
            operand1 = result.toString();
            operator = '';
            operand2 = '';
        }
    };

    document.querySelectorAll('.keypad button').forEach((button) => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent;

            switch (buttonText) {
                case 'C':
                    clearDisplay();
                    operand1 = '';
                    operator = '';
                    operand2 = '';
                    break;
                case '=':
                    calculate();
                    break;
                case '+':
                case '-':
                case 'x':
                case '÷':
                    setOperator(buttonText);
                    break;
                default:
                    appendToOperand(buttonText);
                    break;
            }
        });
    });
});
