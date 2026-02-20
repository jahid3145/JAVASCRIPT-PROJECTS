window.onload = function () {
    let saveuser = localStorage.getItem("username");

    if (saveuser) {
        document.getElementById("username").value = saveuser;
        document.getElementById("rememberme").checked = true;
    }
}

function login() {
    let username = document.getElementById("username").value.trim();
    let remember = document.getElementById("rememberme").checked;

    if (username === "") {
        alert("Please enter username");
        return;
    }

    if (remember) {
        localStorage.setItem("username", username);
    } else {
        localStorage.removeItem("username");
    }

    alert("Login successful");
}
