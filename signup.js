function validateSignupForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (username.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      alert("Please fill in all fields.");
      return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
       return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    // Basic email validation (you can enhance this with a more robust regex)
    if (!email.includes("@") || !email.includes(".")) {
      alert("Invalid email address.");
      return false;
    }

    return true;
  }
  
  function redirectToHomepage(event) {
    event.preventDefault();
  
    if (validateSignupForm()) {
      window.location.href = "index.html";
    }
  }