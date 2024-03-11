let currentResult = '';

function appendToResult(value) {
    currentResult += value;
    document.getElementById('result').value = currentResult;
}

function clearResult() {
    currentResult = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        currentResult = eval(currentResult);
        document.getElementById('result').value = currentResult;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Handle keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearResult();
    } else {
        appendToResult(key);
    }
});