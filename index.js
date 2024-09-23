const textElement = document.getElementById('text');
const button = document.getElementById('changeTextButton');

function changeText() {
    textElement.innerText = "ТЕКСТ ЗМІНЕНО!";
}

button.addEventListener('click', changeText);

function changeBackgroundColor() {
    document.body.style.backgroundColor ="lightBlue";
}

button.addEventListener('click', changeBackgroundColor);