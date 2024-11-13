/* ------------------- modal ----------------------*/

const modalsignup = document.getElementById("signupModal");
const modalsignin = document.getElementById("signinModal");
const closeModal = document.getElementById("closeModal");
const signUpButton = document.querySelector(".sign-up");
const signInButton = document.querySelector(".sign-in");

signUpButton.onclick = function () {
    modalsignup.style.display = "block";
}

signInButton.onclick = function () {
    modalsignin.style.display = "block";
}

closeModal.onclick = function () {
    modalsignup.style.display = "none";
    modalsignin.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modalsignup) {
        modalsignup.style.display = "none";
    }
    if (event.target === modalsignin) {
        modalsignin.style.display = "none";
    }
}

/* ------------------- carousel ----------------------*/

const carouselTexts = [
    "Abendessen an Wochentagen",
    "Einrichtungsidee",
    "Outfit im neuen Look",
    "Gruener Daumen"
];

const carouselColor = [
    "rgb(194, 139, 0)",
    "rgb(97, 140, 123)",
    "rgb(0, 118, 211)",
    "rgb(64, 122, 87)"
]

function updateCarouselText() {
    const textElement = document.getElementById("carousel-text");
    const radios = document.getElementsByName("carousel");

    radios.forEach((radio, index) => {
        if (radio.checked) {
            textElement.textContent = carouselTexts[index];
            textElement.style.color =  carouselColor[index];
            radio.style.backgroundColor = carouselColor[index];
        } else{
            radio.style.backgroundColor = 'lightgray'
        }
    });
}

document.querySelectorAll(".radios input[type='radio']").forEach(radio => {
    radio.addEventListener("change", updateCarouselText);
});

updateCarouselText();





