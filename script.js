const form = document.getElementById("registrationForm");

const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordRequirementsList = document.getElementById("passwordRequirements");

const passwordRequirements = [];


const patterns = {
    email: /^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/ ,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
    //Email verification because html validation doesn't check after @/s for ". com"
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

function handleEmailInput(){
   if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity("Please fill out this field. Email cannot be blank.");
  } else if (emailInput.validity.typeMismatch || !patterns.email.test(emailInput.value)) {
    emailInput.setCustomValidity("Please enter a valid format (e.g., name@example.com).");
  } else {
    emailInput.setCustomValidity(""); 
  }

   emailError.textContent = emailInput.validationMessage;
}


function updatePasswordRequirements(){
    const value = passwordInput.value;

    // checking if the input have atleast 8 characters
    passwordRequirementsList.children[0].classList.toggle('valid',  value.length >= 8)
    // checking if the input have atleast 1 uppercase characters
    passwordRequirementsList.children[1].classList.toggle('valid',  /[A-Z]/.test(value))
    // checking if the input have atleast 1 lowercase characters
    passwordRequirementsList.children[2].classList.toggle('valid',  /[a-z]/.test(value))
     // checking if the input have atleast 1 lowercase characters
    passwordRequirementsList.children[3].classList.toggle('valid',  /\d/.test(value))
    
}


function handlePasswordInput(){
    
    if(passwordInput.validity.valueMissing){
        passwordInput.setCustomValidity("Please enter a password.")
    }else if( !patterns.password.test(passwordInput.value)){
         passwordInput.setCustomValidity("Password must be at least 8 characters and include an uppercase letter, a lowercase letter, and a number.")
    }else{
         passwordInput.setCustomValidity("");
    }

    passwordError.textContent = passwordInput.validationMessage;
    passwordInput.classList.toggle("valid", passwordInput.checkValidity());
    
    updatePasswordRequirements();
    if (confirmPasswordInput.value) {
        handleConfirmPasswordInput();
    }
   
   
}


function handleConfirmPasswordInput(){
    if (confirmPasswordInput.validity.valueMissing) {
        confirmPasswordInput.setCustomValidity("Please confirm your password.");
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match.");
    } else {
        confirmPasswordInput.setCustomValidity("");
    }

    confirmPasswordError.textContent = confirmPasswordInput.validationMessage;
    confirmPasswordInput.classList.toggle("valid", confirmPasswordInput.checkValidity());
    

}

emailInput.addEventListener('input', handleEmailInput);
passwordInput.addEventListener('input', handlePasswordInput);
confirmPasswordInput.addEventListener("input", handleConfirmPasswordInput);


form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleEmailInput();
    handlePasswordInput()
    handleConfirmPasswordInput()

     if (form.checkValidity()) {
        alert("Form is valid!");
    }
})