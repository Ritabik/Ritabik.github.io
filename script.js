// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
	    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Add form submission handling
    document.getElementById('reviewForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Use Email.js or any other service to send email notifications
        // Example using Email.js (replace YOUR_EMAIL_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID)
        emailjs.sendForm('YOUR_EMAIL_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_USER_ID')
            .then(function (response) {
                console.log('Email sent successfully:', response);
                // You can add additional actions or feedback to the user here
            }, function (error) {
                console.log('Error sending email:', error);
                // Handle errors or provide feedback to the user
            });
    });
});
