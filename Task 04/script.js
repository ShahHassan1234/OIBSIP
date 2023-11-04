document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        window.location.href = "secured.html";
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password. Please try again.";
    }
});
