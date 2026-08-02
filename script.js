const form = document.getElementById("registrationForm");

const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const confirmPasswordInput = document.getElementById("confirmPassword");

const patterns = {
    email: /^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/ //Email verification because html validation doesn't check after @/s for ". com"
}

// console.log(username, usernameError, email, password, emailError, passwordError, confirmPassword)

document.addEventListener("DOMContentLoaded", () =>{
    const username = localStorage.getItem("username");

    if(username){        
        usernameInput.value = localStorage.getItem("username");
    }
    
});

usernameInput.addEventListener("input", (event) => {

    if(localStorage.getItem("username") !== null){
        localStorage.setItem("username",'');
    }

    localStorage.setItem('username', event.target.value.trim());
})

function handleInputEvents(){
   if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity("Please fill out this field. Email cannot be blank.");
  } else if (emailInput.validity.typeMismatch || !patterns.email.test(emailInput.value)) {
    emailInput.setCustomValidity("Please enter a valid format (e.g., name@example.com).");
  } else {
    emailInput.setCustomValidity(""); 
  }

   emailError.textContent = emailInput.validationMessage;
}


// // emailInput.addEventListener('focusin', handleInputEvents);
emailInput.addEventListener('input', handleInputEvents);


form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleInputEvents();
    
})