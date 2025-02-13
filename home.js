// Check login status on page load
document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const welcomeContainer = document.getElementById("welcome-container");
    const welcomeMessage = document.getElementById("welcome-message");
    const getStartedButton = document.getElementById("get-started-button");

    if (isLoggedIn === "true") {
        // Show welcome message and logout button, hide Get Started button
        welcomeContainer.style.display = "block";
        welcomeMessage.textContent = "Welcome to LogiTrack!";
        getStartedButton.style.display = "none";
    } else {
        // Show Get Started button if not logged in
        getStartedButton.style.display = "block";
    }
});

// Logout function to clear session and reload page
function logout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.reload(); // Reload to apply changes
}