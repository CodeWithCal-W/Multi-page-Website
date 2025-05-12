document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        
        // Validate name
        const nameInput = document.getElementById('name');
        if (!nameInput.value.trim()) {
            document.getElementById('name-error').textContent = 'Name is required';
            isValid = false;
        }
        
        // Validate email
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email';
            isValid = false;
        }
        
        // Validate subject
        const subjectInput = document.getElementById('subject');
        if (!subjectInput.value.trim()) {
            document.getElementById('subject-error').textContent = 'Subject is required';
            isValid = false;
        }
        
        // Validate message
        const messageInput = document.getElementById('message');
        if (!messageInput.value.trim()) {
            document.getElementById('message-error').textContent = 'Message is required';
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            document.getElementById('message-error').textContent = 'Message should be at least 10 characters';
            isValid = false;
        }
        
        // If form is valid, simulate submission
        if (isValid) {
            const statusElement = document.getElementById('form-status');
            statusElement.textContent = 'Your message has been sent successfully!';
            statusElement.style.backgroundColor = '#d4edda';
            statusElement.style.color = '#155724';
            statusElement.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide status after 5 seconds
            setTimeout(() => {
                statusElement.style.display = 'none';
            }, 5000);
        }
    });
});