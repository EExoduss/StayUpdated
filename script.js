const button = document.querySelector('button');
let email = document.getElementById("email");
let error = document.querySelector(".error");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

email.addEventListener('input', function (e) {
    let currentValue = e.target.value;
    let valid = regexEmail.test(currentValue);

    if (valid) {
        error.style.display = "none";
    } else {
        error.style.display = "inline";
    }
});

button.addEventListener('click', function (e) {

    e.preventDefault();

    let currentValue = email.value;
    let valid = regexEmail.test(currentValue);

    if (!valid) {
        error.style.display = "inline";

        email.style.backgroundColor = "rgba(255, 99, 71, 0.2)";
        email.style.border = "2px solid var(--Tomato)";
        email.style.color = "var(--Tomato)";
    }

    else{
        document.querySelector("h1").style.display = "none";
        document.querySelector("p").style.display = "none";
        document.querySelector(".point1").style.display = "none";
        document.querySelector(".point2").style.display = "none";
        document.querySelector(".point3").style.display = "none";
        document.querySelector("form").style.display = "none";
        document.querySelector("header").style.display = "none";

        // document.querySelector("main").style.padding = "10rem";
        document.querySelector("main").style.paddingLeft = "2rem";
        document.querySelector("main").style.paddingRight = "2rem";


        document.querySelector("main").style.maxWidth = "45rem";
        document.querySelector("main").style.maxHeight = "45rem";
        document.querySelector("main").style.borderRadius = "2rem";


        document.querySelector(".email-submitted").innerHTML = currentValue;

        let hidden = document.querySelectorAll(".hidden");

        hidden.forEach(element => {
            element.classList.remove("hidden");
        });


    }
});
    


