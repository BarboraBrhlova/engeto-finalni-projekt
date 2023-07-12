const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const navbar = document.querySelector("nav");
const arrowIcon = document.querySelector(".arrow-icon");
const changeButton = document.querySelector(".switch-theme-button");
const body = document.querySelector("body");
const links = document.querySelectorAll(".nav-links a");
const form = document.querySelector("form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const passwordAgain = document.querySelector(".password-again");
const paragraph = document.createElement("p");
const formSection = document.querySelector(".form-section");

// BURGER MENU NAVIGATION

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    nav.style.transition = "transform 0.5s ease-in";

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
            }s`;
        }
    });

    burger.classList.toggle("toggle");
});

// SCROLL NAVIGATION

window.addEventListener("scroll", () => {
    if (body.className !== "dark-mode") {
        if (window.scrollY >= 400) {
            navbar.style.backgroundColor = "rgb(197, 190, 181)";
        } else {
            navbar.style.backgroundColor = "rgb(226, 220, 209)";
        }
    } else {
        if (window.scrollY >= 400) {
            navbar.style.backgroundColor = "rgb(60, 59, 59)";
        } else {
            navbar.style.backgroundColor = "rgb(42, 40, 40)";
        }
    }

    const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    if (window.scrollY >= maxHeight) {
        arrowIcon.style.opacity = "1";
    } else {
        arrowIcon.style.opacity = "0";
    }
});

// REMOVE NAVBAR TRANSITION ON RESIZE

window.onresize = function (event) {
    nav.style.transition = "none";
};

// LIGHT/DARK MODE

changeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
    burger.classList.toggle("dark-mode");
    if (body.className === "dark-mode") {
        navbar.style.backgroundColor = "rgb(42, 40, 40)";
    } else {
        navbar.style.backgroundColor = "rgb(226, 220, 209)";
    }

    links.forEach((a) => {
        a.classList.toggle("dark-mode");

        if (body.className === "dark-mode") {
            changeButton.textContent = "Light";
        } else {
            changeButton.textContent = "Dark";
        }
    });
});

// DRESS PHOTOS

const photos = document.querySelectorAll(".latest-news .photo");

photos.forEach((photo) => {
    photo.addEventListener("mouseenter", () => {
        photo.style.transform = "scale(1.1)";
    });

    photo.addEventListener("mouseleave", () => {
        photo.style.transform = "scale(1)";
    });
});

// PASSWORD CHECK

form.addEventListener("submit", (event) => {
    const passwordValue = password.value;
    const passwordAgainValue = passwordAgain.value;

    if (passwordValue !== passwordAgainValue) {
        paragraph.textContent = "Password is incorrect.";
        formSection.appendChild(paragraph);
    } else if (passwordValue.length < 6 || passwordAgainValue.length < 6) {
        paragraph.textContent = "Password must contain at least 6 characters.";
        formSection.appendChild(paragraph);
    } else {
        email.value = "";
        password.value = "";
        passwordAgain.value = "";
        paragraph.textContent = "";
        formSection.appendChild(paragraph);
    }

    event.preventDefault();
});
