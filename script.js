function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let input = document.getElementById('display').value;
    try {
        if (input.includes('%')) {
            input = input.replace('%', '/100');
        }
        document.getElementById('display').value = eval(input);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

function toggleSign() {
    let display = document.getElementById('display');
    let value = display.value;
    if (value) {
        if (value.startsWith('-')) {
            display.value = value.substring(1);
        } else {
            display.value = '-' + value;
        }
    }
}
