function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.sqrt(value);
    } else {
        display.value = "Error";
    }
}

function calculatePercentage() {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value / 100;
    } else {
        display.value = "Error";
    }
}

function appendPower() {
    let display = document.getElementById("display");
    display.value += "**"; 
}