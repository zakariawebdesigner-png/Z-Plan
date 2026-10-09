  
import { SlideATVisible } from "./Smooth-Entry.js";
import { element } from "./Index-Elements.js";



       SlideATVisible(element);


// Initialize EmailJS
const emailjs = window.emailjs;

emailjs.init({
    publicKey: "rrhkj_7PW9BfcS7LO"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_hv5uui6",
        "template_k2a1r9l",
        form
    )
    .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        alert("Message sent successfully!");
        form.reset();
    })
    .catch((error) => {
        console.error("EMAILJS ERROR:", error);

        alert("Failed to send: " + (error.text || error.message || "Unknown error"));
    });
});