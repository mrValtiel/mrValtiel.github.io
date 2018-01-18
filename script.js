'use strict';
var loggedUser = "guest";

function showLoggingIn() {
    console.log("Showing logging in area");
    document.getElementById("loggingIn").style.visibility = 'visible';
}
function hideLoggingIn() {
    console.log("Hidding logging in area");
    document.getElementById("loggingIn").style.visibility = 'hidden';
}
function logIn() {
    document.getElementById("incName").style.visibility = 'hidden';
    document.getElementById("incPass").style.visibility = 'hidden';
    var userName = document.getElementById("userNameInput").value;
    var userPassword = document.getElementById("userPasswordInput").value;
    console.log(userName);
    console.log(userPassword);
    if(userName == "admin")
        {
            if(userPassword == "admin1")
                {
                    loggedUser = "admin"
                    hideLoggingIn();
                    console.log("Logged in as admin!");
                    document.getElementById("loggedInUser").innerHTML = "Logged in as: admin";
                }
            else
                {
                    document.getElementById("incPass").style.visibility = 'visible';
                }
        }
    else
        {
            document.getElementById("incName").style.visibility = 'visible';
        }
}