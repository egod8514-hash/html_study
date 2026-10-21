const display = document.querySelector("#display");

let isPowerOn = true;

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("숫자 버튼 클릭:", button.textContent);
    });
});

function appendNumber(number) {
    if (!isPowerOn) {
        return;
    }

    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    if (!isPowerOn) {
        return;
    }

    display.value += operator;
}

function performCalculate() {
    if (!isPowerOn) {
        return;
    }

    const result = eval(display.value);
    display.value = result;
}

function clearDisplay() {
    if (!isPowerOn) {
        return;
    }

    display.value = "0";
}

function togglePower() {
    isPowerOn = !isPowerOn;

    if (isPowerOn) {
        display.value = "0";
    } else {
        display.value = "";
    }
}