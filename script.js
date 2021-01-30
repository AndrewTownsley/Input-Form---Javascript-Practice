const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordVerify = document.getElementById('passwordVerify');
const submit = document.getElementById('submit');

// Stop the default submit event of the submit button untill all the fields are correctly filled out...

form.addEventListener('submit', e => {
  e.preventDefault();

  // ADD FUNCTION THAT CHECKS INPUTS FOR VALIDITY HERE...
  checkInputs();   
});

// CHECK THAL ALL INPUT FIELDS HAVE VALID INFORMATION ENTERED BEFORE SUBMITTING...
function checkInputs() {

  // Remove the whitespace from the input fields, so that just the text that the user enters is used for validation...
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordVerifyValue = passwordVerify.value.trim();
  // Make sure that the Username input has at least 5 characters,
  // If not, display an error message when the "submit" button is clicked...
  if(userNameValue === '') {
    displayErrorFor(userName, 'Username cannot be blank');
  } else {
    displaySuccessFor(userName);
  }

  // Make sure that the Email that the user inputs is a valid Email address,
  //  If not, display an error message when the "submit" button is clicked...

  if(emailValue === '') {
    displayErrorFor(email, 'Email cannot be blank');
  } else if( !verifyEmail(emailValue)) {
    displayErrorFor(email, 'Please enter a valid Email address');
  } else {
    displaySuccessFor(email);
  }
  
  // Make sure that the password entered is at least 6 characters long,
  //  If not, display an error message when the "submit" button is clicked...
  if(passwordValue === '') {
    displayErrorFor(password, 'Password cannot be blank');
  } else {
    displaySuccessFor(password);
  }
  
  // Make sure that when the password is re-entered in the "Verify-Password" input, it matches the first password input...
  //  If not, display an error message when the "submit" button is clicked...
  if(passwordVerifyValue === '') {
    displayErrorFor(passwordVerify, 'Password cannot be blank');
  } else if
  (passwordVerifyValue !== passwordValue) {
    displayErrorFor(passwordVerify, 'Passwords must match');
  } else {
    displaySuccessFor(passwordVerify);
  }
}

// Create function to display error message, and add 'error' className to .form-control to change its color and display error icon...
function displayErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = "form-control error";
  small.innerText = message;
}

// Create function for successful input, and add 'success' className to .form-control to change its color and display success icon...
function displaySuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


// Create Function to validate Email address...
function verifyEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}