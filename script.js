(function(){
    // Initialize EmailJS — replace with your EmailJS user ID
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

    const form = document.getElementById("contactForm");
    const responseText = document.getElementById("formResponse");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', this)
        .then(() => {
            responseText.innerText = "Thank you! We'll contact you soon.";
            form.reset();
        })
        .catch(err => {
            responseText.innerText = "Oops! Something went wrong.";
            console.error(err);
        });
    });
})();
