(function(){
    // Initialize EmailJS — replace with your EmailJS user ID
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

    const form = document.getElementById("contactForm");
    const responseText = document.getElementById("formResponse");
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Clear previous messages
        responseText.innerText = '';
        responseText.className = '';

        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        const originalButtonText = submitButton.innerText;
        submitButton.innerText = 'Sending...';

        emailjs.sendForm('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', this)
        .then(() => {
            responseText.innerText = "✓ Thank you! We'll contact you soon.";
            responseText.style.color = '#10b981';
            responseText.style.background = 'rgba(16, 185, 129, 0.2)';
            responseText.style.border = '1px solid #10b981';
            form.reset();
            
            // Reset button
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
            submitButton.innerText = originalButtonText;

            // Scroll to response message
            responseText.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        })
        .catch(err => {
            responseText.innerText = "✗ Oops! Something went wrong. Please try again or call us directly.";
            responseText.style.color = '#ef4444';
            responseText.style.background = 'rgba(239, 68, 68, 0.2)';
            responseText.style.border = '1px solid #ef4444';
            console.error('EmailJS Error:', err);
            
            // Reset button
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
            submitButton.innerText = originalButtonText;
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
})();
