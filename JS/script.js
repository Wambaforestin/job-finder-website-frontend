document.addEventListener('DOMContentLoaded', () => {
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
        input.oninput = () => {
            if (input.value.length > input.maxLength) {
                input.value = input.value.slice(0, input.maxLength);
            }
        }
    });

    //for the animated send message button in the contact form

    let btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        btn.setAttribute('class', 'submit process');
        btn.innerHTML = 'Processing';
        setTimeout(() => {
            btn.setAttribute('class', 'submit submitted');
            btn.innerHTML = `
     <span class="tick">&#10004;</span>
     Submitted
     `;
        }, 5000);
    });

    //for the animated sign and sign up form in the login_register page
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    signupBtn.onclick = () => {
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
    };
    loginBtn.onclick = () => {
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
    };
    signupLink.onclick = () => {
        signupBtn.click();
        return false;
    };
}); return false;

