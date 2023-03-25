let result = "";

function appendNumber(num) {
    result += num;
    document.getElementById("result").value = result;
}

function clearResult() {
    result = "";
    document.getElementById("result").value = "";
}

function calculateResult() {
    const calculation = eval(result);
    result = calculation.toString();
    document.getElementById("result").value = result;
}
