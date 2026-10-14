 function toggleForm() {
      var signupForm = document.getElementById("signup-form");
      var loginForm = document.getElementById("login-form");
      var toggleLink = document.getElementById("toggle-link");
      
      if (signupForm.style.display === "none") {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
        toggleLink.innerHTML = "Log in";
      } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        toggleLink.innerHTML = "Sign up";
      }
    }
    
    function validateForm() {
      var firstName = document.getElementById("first_name").value;
      var lastName = document.getElementById("last_name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var errorContainer = document.getElementById("error-container");
      
      errorContainer.innerHTML = ""; // Clear previous error messages
      
      if (firstName === "" || lastName === "") {
        errorContainer.innerHTML += "<p class='error-message'>First and Last Name fields cannot be blank.</p>";
      }

      function validatePhoneNumber() {
  var phoneNumberInput = document.getElementById("phone_number");
  var phoneNumber = phoneNumberInput.value.trim();
  var errorContainer = document.getElementById("error-container");
  
  errorContainer.innerHTML = ""; // Clear previous error messages
  
  if (!isNumeric(phoneNumber)) {
    errorContainer.innerHTML = "<p class='error-message'>Phone Number should only contain numeric values.</p>";
    phoneNumberInput.value = ""; // Clear the invalid input
    phoneNumberInput.focus(); // Set focus back to the phone number input field
  }
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}

      
      if (!validateEmail(email)) {
        errorContainer.innerHTML += "<p class='error-message'>Email should be valid.</p>";
      }
      
      if (!validatePassword(password)) {
        errorContainer.innerHTML += "<p class='error-message'>Password should have at least eight characters or longer. It must contain 1 lowercase character, 1 uppercase character, 1 number, and at least one special character in this set (!@#$%^&*).</p>";
      }
      
      if (errorContainer.innerHTML !== "") {
        return false; // Prevent form submission if there are errors
      }
      
      return true; // Allow form submission if all validations pass
    }
    
    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    function validatePassword(password) {
      var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
      return passwordRegex.test(password);
    }

            const menubtn = document.querySelector('.menu-btn')
        const navlinks = document.querySelector('.nav-links')

        menubtn.addEventListener('click',()=>{
            navlinks.classList.toggle('mobile-menu')
        })