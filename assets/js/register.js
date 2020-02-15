const user_name = document.getElementById('user_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('password_confirm');
const sign_up = document.getElementById('sign');
const user_error = document.getElementById('user_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const confirm_error = document.getElementById('confirm_error');
const login_user = document.getElementById('login_user');
const login_password = document.getElementById('login_password');
const login = document.getElementById('login');
const checkbox = document.getElementById('checkbox');
const userLogin_error = document.getElementById('userLogin_error');
const passwordLogin_error = document.getElementById('passwordLogin_error');
const loginBtn = document.getElementById('loginBtn')
const close_log = document.getElementById('close_log');
const sign_close = document.getElementById('sign_close');
const loginBtnn = document.getElementById("loginBtn");
const signBtnn = document.getElementById('signBtn');
const logOut = document.getElementById('logoutBtn');
var users;
var loginUser = "";
var loginpass = "";
const emailRegix = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function register(event) {



    event.preventDefault();
    ValidateRegister();

    //localStorage.setItem('user_name', user_name.value);
    //localStorage.setItem('email', email.value);
    //localStorage.setItem('password', password.value);
    //localStorage.setItem('confirm_password', confirm_password.value);
    if (nameVerify() && passwordVerify() && emailVerify() && ValidateEmail() && confirmVerify()) {
        users = JSON.parse(localStorage.getItem('Users')) || [];
        var userData = {
            Username: document.getElementById("user_name").value,
            Email: document.getElementById("email").value,
            Password: document.getElementById('password').value
        };

        users.push(userData);
        localStorage.setItem('Users', JSON.stringify(users));
        document.getElementById('id01').style.display = "none";
    }
    //document.getElementById('id01').style.display="none";



}


function Login(event) {
    validateLogin()
    event.preventDefault();

    var flag = false;

    if (verifyLoginUser() && verifyLoginPassword()) {
        var retriveData = [];

        retriveData = JSON.parse(localStorage.getItem('Users'));



        for (var i = 0; i < retriveData.length; i++) {

            // console.log(retriveData[i].Username);
            //console.log(retriveData[i].Password);
            //console.log(login_password.value);
            //console.log(login_user.value);





            if (login_user.value == retriveData[i].Username && retriveData[i].Password == login_password.value) {

                flag = true;
                break;

            }
            else {
                flag = false;

            }








        }
        if (flag == true) {

            document.getElementById('loginBtn').style.display="none";
            document.getElementById('signBtn').style.display="none";
            document.getElementById('log').style.display="none";
            document.getElementById('logoutBtn').style.display="block";
            document.getElementById('add-recipe-modal').style.display="block";

            loginUser=login_user.value;
            loginpass=login_password.value;
            localStorage.setItem('loginUser', loginUser);
            localStorage.setItem('loginpass',loginpass);

        }
        else {
            // alert("Error");
            document.getElementById('log').style.display = "none";
        }
    }
}










function ValidateRegister() {

    // validate username
    if (user_name.value == "") {
        user_name.style.border = "1px solid red";

        user_error.textContent = "Username is required";
        user_name.focus();
        return false;
    }

    if (email.value == "") {
        email.style.border = "1px solid red";

        email_error.textContent = "email is required";
        email.focus();
        return false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        email.style.border = "1px solid red";

        email_error.textContent = "email not valid";
        email.focus();
        return false;
    }

    if (password.value == "") {
        password.style.border = "1px solid red";

        password_confirm.style.border = "1px solid red";
        password_error.textContent = "Password is required";
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

        user_error.innerHTML = "";
        return true;
    }
}

function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid blue";

        email_error.innerHTML = "";
        return true;

    }
}
function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style.border = "1px solid blue";

        email_error.innerHTML = "";
        return (true)
    }
}

function passwordVerify() {
    if (password.value != "") {
        password.style.border = "1px solid blue";
        password_error.innerHTML = "";
        return true;
    }
}
function confirmVerify() {
    if (password.value == confirm_password.value) {
        password.style.border = "1px solid blue";

        confirm_error.innerHTML = "";
        return true;
    }

}




function validateLogin() {
    if (login_user.value == "") {
        login_user.style.border = "1px solid red";

        userLogin_error.textContent = "Username is required";
        login_user.focus();
        return false;
    }
    if (login_password.value == "") {
        login_password.style.border = "1px solid red";

        passwordLogin_error.textContent = "password is required";
        login_password.focus();
        return false;
    }


}
function verifyLoginUser() {
    if (login_user.value != "") {
        login_user.style.border = "1px solid blue";

        userLogin_error.innerHTML = "";
        return true;
    }
}
function verifyLoginPassword() {
    if (login_password.value != "") {
        login_password.style.border = "1px solid blue";

        passwordLogin_error.innerHTML = "";
        return true;
    }
}

function createLoginButton(event) {
    event.preventDefault();
    document.getElementById('log').style.display = 'block'
}
function createSignButton(event) {
    event.preventDefault();
    document.getElementById('id01').style.display = 'block'
}


function closeLog(event) {
    event.preventDefault();
    document.getElementById('log').style.display = 'none';
}

function closeSign(event) {
    event.preventDefault();
    document.getElementById('id01').style.display = 'none';
}
function logOutBtn(e) {
    e.preventDefault();
    document.getElementById('logoutBtn').style.display = "none";
    document.getElementById('loginBtn').style.display = "inline-block";
    document.getElementById('signBtn').style.display = "inline-block";
    localStorage.removeItem('loginUser');
    localStorage.removeItem('loginpass');

}


user_name.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
login_password.addEventListener('blur', verifyLoginPassword, true);
login_user.addEventListener('blur', verifyLoginUser, true);


sign_up.addEventListener("click", register);
login.addEventListener("click", Login);
close_log.addEventListener("click", closeLog);
sign_close.addEventListener('click', closeSign);
loginBtnn.addEventListener('click', createLoginButton);
signBtnn.addEventListener('click', createSignButton);
logoutBtn.addEventListener('click', logOutBtn);

