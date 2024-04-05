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

//for the animated send message button in the contact form

let btn = document.getElementById('btn');
btn.addEventListener("click", function() {
  btn.setAttribute('class', 'submit process');
  btn.innerHTML = 'Processing';
  setTimeout(()=>{
     btn.setAttribute('class', 'submit submitted');
     btn.innerHTML = `
     <span class="tick">&#10004;</span>
     Submitted
     `;
  },5000);
});