let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

// Remove the active class from the navbar when the user scrolls ✌️

window.onscroll = () => {
    navbar.classList.remove('active');
}

//The code below is for the input number to not exceed the max length of the input

document.querySelectorAll('input[type="number"]').forEach((input) => {
    inputNumber.ouinput = () => {
        if(inputNumber.value.length > inputNumber.maxLength) {
            inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
        };
    }
});