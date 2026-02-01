let form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();   // Stop page reload

    // Get input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Error elements
    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");

    // Clear previous errors
    userError.innerText = "";
    passError.innerText = "";

    // Validation
    if (username === "") {
        userError.innerText = "Username is required";
    }

    if (password.length < 6) {
        passError.innerText = "Password must be at least 6 characters";
    }

    // Success condition
    if (username !== "" && password.length >= 6) {
        alert("Login Successful!");
    }
});
