let myButton = document.getElementById('myButton');
myButton.innerHTML = "Нажми меня";
myButton.addEventListener('mouseover', () => myButton.style.background = 'red');
myButton.addEventListener('mouseout', () => myButton.style.background = "grey");

let textInput = document.getElementById('textInput');
let displayText = document.getElementById('displayText');
textInput.addEventListener('input', () => {displayText.textContent = textInput.value});

let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('input[name="username"]').value;
    console.log(name)});
