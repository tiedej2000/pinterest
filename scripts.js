// Get modal elements
const modal = document.getElementById("signupModal");
const closeModal = document.getElementById("closeModal");
const signUpButton = document.querySelector(".sign-up");

// Show the modal when the sign-up button is clicked
signUpButton.onclick = function () {
    modal.style.display = "block";
}

// Hide the modal when the close button is clicked
closeModal.onclick = function () {
    modal.style.display = "none";
}

// Hide the modal when clicking outside the modal content
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
