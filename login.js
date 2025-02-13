function validateLoginForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return false;
    }

    return true;
  }
  function redirectToHomepage(event) {
    event.preventDefault();
  
    if (validateLoginForm()) {
        // Store login status in sessionStorage
        sessionStorage.setItem("isLoggedIn", "true");
      // Assuming successful login, redirect to the homepage
      window.location.href = "index.html";
    }
  }