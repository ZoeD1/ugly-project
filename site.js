// contact form alert

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents Page Reload
    alert("Message Sent!");
    contactForm.reset();
});
