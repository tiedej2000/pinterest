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
/* ------------------- image sets ----------------------*/

const imageSetOne = {
    imgOne: "./media/tappas.jpg",
    imgOneFive: "./media/cake.jpg",
    imgTwo: "./media/noodles.jpg",
    imgThree: "./media/coffee.jpg",
    imgFour: "./media/lasagne.jpg",
    imgFive: "./media/soup.jpg",
    imgSix: "./media/tappas.jpg",
    imgSeven: "./media/ruehrei.jpg",
    imgSevenFive: "./media/dessert.jpg"
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

    textElement.classList.add('fade-out')

    setTimeout(() => {
        radios.forEach((radio, index) => {
            if (radio.checked) {
                textElement.textContent = carouselTexts[index];
                textElement.style.color =  carouselColor[index];
                radio.style.backgroundColor = carouselColor[index];
            } else{
                radio.style.backgroundColor = 'lightgray'
            }
        });

        textElement.classList.remove("fade-out");
        textElement.classList.add("fade-in");

        setTimeout(() => {
            textElement.classList.remove("fade-in");
        }, 1000);
    }, 1000);
    
}

let currentIndex = 0;

function rotateCarousel() {
    const radios = document.getElementsByName("carousel");
    radios[currentIndex].checked = false; 
    currentIndex = (currentIndex + 1) % radios.length; 
    radios[currentIndex].checked = true; 

    updateCarouselText();
}


setInterval(rotateCarousel, 5000);

document.querySelectorAll(".radios input[type='radio']").forEach(radio => {
    radio.addEventListener("change", updateCarouselText);
});

updateCarouselText();





