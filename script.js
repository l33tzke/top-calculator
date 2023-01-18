let currentOperand1 = '';
let currentOperand2 = '';
let currentOperator = '';

function addToOperand(input) {
    //If the operator is empty, we're still adding digits to the first operand,
    //otherwise we're adding to the second
    if (currentOperator == '') {
        currentOperand1 = currentOperand1 + input;
    } else {
        currentOperand2 = currentOperand2 + input;
    }
} 

function setOperator(operator) {
    currentOperator = operator;
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b) {
    return a/b
}

function operate(a, b, operator){
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return 'Error!'
    }
}

function calculateResult() {
    console.log("calculateResult called!");
    op1 = Number(currentOperand1);
    op2 = Number(currentOperand2)
    console.log(operate(op1, op2, currentOperator));
}

    
function setup() {
    let operandButtons = Array.from(document.querySelectorAll('.operand'));
    operandButtons.forEach(operandButton => {
        operandButton.addEventListener("click", () => {
            addToOperand(operandButton.value);
        });
    });

    let operatorButtons = Array.from(document.querySelectorAll('.operator'));
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener("click", () => {
            setOperator(operatorButton.value);
        });
    });

    let resultButton = document.querySelector('.result');
    resultButton.addEventListener("click", calculateResult);
}

setup()