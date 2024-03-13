function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}
function calculateResult() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        if (isFinite(result)) {
            document.getElementById('display').value = result;
        } else {
            throw "Error: Invalid operation";
        }
    } catch (error) {
        document.getElementById('display').value = "Error";
    }
}
