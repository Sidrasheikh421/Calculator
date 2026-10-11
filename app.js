let display = document.querySelector("#display");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");
let equalBtn = document.querySelector(".equal");
let sqrtBtn = document.querySelector(".sqrt");
let percentBtn = document.querySelector(".percent");

let firstNumber = "";
let operator = "";
let newNumber = true;

// Numbers
numbers.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = button.textContent;

        if (newNumber) {
            display.value = value === "." ? "0." : value;
            newNumber = false;
        } else {
            if (value === "." && display.value.includes(".")) {
                return;
            }

            if (display.value === "0" && value !== ".") {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    });
});

// Operators
operators.forEach(function(button) {
    button.addEventListener("click", function() {
        firstNumber = parseFloat(display.value);
        operator = button.textContent;
        newNumber = true;
    });
});

// Equal button
equalBtn.addEventListener("click", function() {
    if (operator === "") {
        return;
    }

    let secondNumber = parseFloat(display.value);
    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    }
    else if (operator === "-") {
        result = firstNumber - secondNumber;
    }
    else if (operator === "*") {
        result = firstNumber * secondNumber;
    }
    else if (operator === "/") {
        if (secondNumber === 0) {
            display.value = "Error";
            operator = "";
            newNumber = true;
            return;
        }

        result = firstNumber / secondNumber;
    }

    display.value = Number(result.toFixed(8));
    operator = "";
    newNumber = true;
});

// Clear button
clearBtn.addEventListener("click", function() {
    display.value = "0";
    firstNumber = "";
    operator = "";
    newNumber = true;
});

// OFF button
deleteBtn.addEventListener("click", function() {
    display.value = "0";
    firstNumber = "";
    operator = "";
    newNumber = true;
});

// Square root
sqrtBtn.addEventListener("click", function() {
    let number = parseFloat(display.value);

    if (number < 0) {
        display.value = "Error";
    } else {
        display.value = Math.sqrt(number);
    }

    newNumber = true;
});

// Percentage
percentBtn.addEventListener("click", function() {
    display.value = parseFloat(display.value) / 100;
    newNumber = true;
});