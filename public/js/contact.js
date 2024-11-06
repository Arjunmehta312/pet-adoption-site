// public/js/contact.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    function showStatus(message, isError = false) {
        formStatus.textContent = message;
        formStatus.style.display = 'block';
        formStatus.className = `form-status ${isError ? 'error' : 'success'}`;
        
        // Hide the status message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Disable submit button to prevent double submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                if (response.ok) {
                    showStatus('Thank you for your message. We will get back to you soon!');
                    contactForm.reset();
                } else {
                    showStatus(data.error || 'There was an error sending your message. Please try again.', true);
                }
            } catch (error) {
                console.error('Error:', error);
                showStatus('There was an error sending your message. Please try again.', true);
            } finally {
                // Re-enable submit button
                submitButton.disabled = false;
            }
        });
    }
});