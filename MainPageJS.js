var loginSlogans = [
    {
        firstPart: "Codes are your language, <span class='yellow-text'>login</span> button is your door!",
        secondPart: "Open it with your password."
    },
    {
        firstPart: "Coding is in your DNA, now it's time to <span class='yellow-text'>log in</span>!",
        secondPart: "Transform into a coding superhero!"
    },
    {
        firstPart: "You have an account, you have knowledge, now just a click away from <span class='yellow-text'>logging in</span>.",
        secondPart: "Yes, just one click away!"
    },
    {
        firstPart: "King of codes,<br/> master of the <span class='yellow-text'>login</span> screen!",
        secondPart: "Come on, the only thing you need to know is your password."
    },
    {
        firstPart: "Want to pass through the information labyrinth behind the encrypted doors to <span class='yellow-text'>log in</span>?",
        secondPart: "Login now!"
    }
];

var registerSlogans = [
    {
        firstPart: "Do you want to join the coding family? If yes, click <span class='yellow-text'>register</span>.",
        secondPart: "If you say no, let's at least have a coffee?"
    },
    {
        firstPart: "Coding is your superpower, now it's time to save the day! <span class='yellow-text'>Sign up</span>, be powerful!",
        secondPart: " Sign up, be powerful!"
    },
    {
        firstPart: "Welcome to the coding party! Now all you have to do to join is click <span class='yellow-text'>register</span>.",
        secondPart: "Come on, join the fun!"
    },
    {
        firstPart: "Welcome to the coding playground! <span class='yellow-text'>Register</span> now for a ticket to endless creativity.",
        secondPart: "Your journey begins with a simple sign-up.  Ready, set, code!"
    },
    {
        firstPart: "Ready to enter the coding wonderland? No dragons, just bugs to slay!",
        secondPart: "Click <span class='yellow-text'>Register</span> and become a coding wizard."
    }
];
var forgotPasswordMessages = [
    "Lost password blues? Click here to start the recovery jam!",
    "Password playing hide and seek? Click here and let the search party begin!",
    "Password in hiding? Click here to launch the rescue operation!",
    "Forgotten your secret password? Click here and let's unveil the mystery together!",
    "Lost in password space? Click here and let's bring it back to Earth!"
];


function showRandomPasswordLink() {
var randomForgotPasswordMessage = forgotPasswordMessages[Math.floor(Math.random() * forgotPasswordMessages.length)];
    var element = document.querySelector("#forgot-password-link");
    element.innerHTML = randomForgotPasswordMessage;
}


function showRandomLoginSlogan() {
    var slogan = loginSlogans[Math.floor(Math.random() * loginSlogans.length)];
    var firstPartElement = document.querySelector("#login-slogan-text .first-part");
    var secondPartElement = document.querySelector("#login-slogan-text .second-part");

  
    firstPartElement.innerHTML = slogan.firstPart;
    secondPartElement.innerHTML = slogan.secondPart;
}
function showRandomRegisterSlogan() {
    var slogan = registerSlogans[Math.floor(Math.random() * registerSlogans.length)];
    var firstPartElement = document.querySelector(".register-first-part");
    var secondPartElement = document.querySelector(".register-second-part");

    firstPartElement.innerHTML = slogan.firstPart;
    secondPartElement.innerHTML = slogan.secondPart;
}
showRandomLoginSlogan();
showRandomRegisterSlogan();
showRandomPasswordLink();

function toggleLoginSlogan() {
    var loginSloganElement = document.getElementById("login-slogan");
    var cardElement = document.getElementsByClassName("left-half-card-container")[0];

    loginSloganElement.style.animation = "fadeOut 0.5s forwards";
    cardElement.style.animation = "fadeIn 0.5s forwards";
    var loginSloganElement = document.getElementById("login-slogan");


    setTimeout(function () {
        if (loginSloganElement) {
            loginSloganElement.parentNode.removeChild(loginSloganElement);
        }
        cardElement.style.display = "flex";
    }, 500);
}
function toggleRegisterSlogan() {
    var registerSloganElement = document.getElementById("register-slogan");
    var cardElement = document.getElementsByClassName("right-half-card-container")[0];

    registerSloganElement.style.animation = "fadeOut 0.5s forwards";
    cardElement.style.animation = "fadeIn 0.5s forwards";
    var registerSloganElement = document.getElementById("register-slogan");


    setTimeout(function () {
        if (registerSloganElement) {
            registerSloganElement.parentNode.removeChild(registerSloganElement);
        }
        cardElement.style.display = "flex";
    }, 500);
}
