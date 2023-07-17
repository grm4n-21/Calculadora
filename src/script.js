onload = (event) => {
body.classList.add('light-theme');
card.classList.add('light-theme');
}

function appendInput(value) {
    document.getElementById('input').value += value;
}

function clearInput() {
    document.getElementById('input').value = '';
}

function calculate() {
    var input = document.getElementById('input').value;
    var result;

    try {
        result = eval(input);
    } catch (error) {
        result = 'Error';
    }

    document.getElementById('input').value = result;
}

function toggleTheme() {
    var body = document.body;
    var card = document.querySelector(".calculator") ;
    var themeToggle = document.getElementById('theme-toggle');

    if (themeToggle.checked) {
        body.classList.add('dark-theme');
        card.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        card.classList.remove('dark-theme');
        card.classList.add('light-theme');
    }
}
