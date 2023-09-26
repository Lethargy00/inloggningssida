function checkLoginStatus() {
    if (localStorage.getItem ("loggedIn") === "true") {
        document.getElementById("message").innerHTML = "Välkommen, du är nu inloggad";
        hideLoginForm();
        showLogoutButton();
    }
}

checkLoginStatus();

function hideLoginForm () {
    const loginForm = document.getElementById("login-form");
    loginForm.style.display = "none";
}


function showLogoutButton() {
    const logoutButton = document.getElementById("logout-button");
    logoutButton.style.display = "block";
}

function logout() {
    localStorage.removeItem("loggedIn");
    showLoginForm();
    hideLogoutButton();
    document.getElementById("message").innerHTML = "";
}


function showLoginForm() {
    const loginForm = document.getElementById("login-form");
    loginForm.style.display = "block";
}

function hideLogoutButton() {
    const logoutButton = document.getElementById("logout-button");
    logoutButton.style.display = "none";
}

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const namn = "Bella";
    const lösenord = "qwe123";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    if (username === namn && password === lösenord) {
        document.getElementById("message").innerHTML = "Välkommen, du är nu inloggad";
        localStorage.setItem("loggedIn", rememberMe)
        hideLoginForm();
        showLogoutButton();

    } else {
        document.getElementById("message").innerHTML = "Ogiltiga inloggningsuppgifter";
    }
});

document.getElementById("remember-me").addEventListener("change", function() {
    localstorage.setItem("loggedIn", this.checked);
});

document.getElementById("logout-button").addEventListener("click", function() {
    logout();
});


