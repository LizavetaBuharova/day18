let myButton = document.getElementById('myButton');
myButton.innerHTML = "Нажми меня";
myButton.addEventListener('mouseover', () => myButton.style.background = 'red');
myButton.addEventListener('mouseout', () => myButton.style.background = "grey");

