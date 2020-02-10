const user_name = document.getElementById('user_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('password_confirm');
const sign_up = document.getElementById('sign');
const first_error = document.getElementById('first_error');
const last_error = document.getElementById('last_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const confirm_error = document.getElementById('confirm_error');
function store() {
    localStorage.setItem('user_name', user_name.value);
    localStorage.setItem('last_name', last_name.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('confirm_password', confirm_password.value);


}

function Validate() {
    // validate username
    if (user_name.value == "") {
        user_name.style.border = "1px solid red";

        //user_error.textContent = "Username is required";
        user_name.focus();
        return false;
    }

    if (email.value == "") {
        email.style.border = "1px solid red";

        //user_error.textContent = "Username is required";
        email.focus();
        return false;
    }

    if (password.value == "") {
        password.style.border = "1px solid red";

        password_confirm.style.border = "1px solid red";
        // password_error.textContent = "Password is required";
        password.focus();
        return false;
    }

    if (password.value != confirm_password.value) {
        password.style.border = "1px solid red";

        confirm_password.style.border = "1px solid red";
        confirm_error.innerHTML = "The two passwords do not match";
        return false;
    }
}
function nameVerify() {
    if (user_name.value != "") {
        user_name.style.border = "1px solid blue";

        //user_error.innerHTML = "";
        return true;
    }
}

function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid blue";

         //email_error.innerHTML = "";
        return true;
    }
}

function passwordVerify() {
    if (password.value != "") {
        password.style.border = "1px solid blue";
        // password_error.innerHTML = "";
        return true;
    }
    if (password.value == confirm_password.value) {
        password.style.border = "1px solid blue";

        confirm_error.innerHTML = "";
        return true;
    }
}

user_name.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
if( Validate()){
sign_up.addEventListener("click",store);
}
