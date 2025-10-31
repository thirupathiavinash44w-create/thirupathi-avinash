// Wait for the document to be fully loaded before running scripts
$(document).ready(function() {

    // --- Simple Fade-In Animation ---
    // Select the main content and fade it in over 800 milliseconds
    $('main').fadeIn(800);

    
    // --- Contact Form Validation ---
    
    // Listen for the 'submit' event on the form with id 'contact-form'
    $('#contact-form').on('submit', function(event) {
        
        // Prevent the form from submitting the traditional (non-AJAX) way
        event.preventDefault();
        
        // Get the form status element to display messages
        let $formStatus = $('#form-status');
        
        // Get the values from the form fields
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let message = $('#message').val().trim();
        
        // Simple validation: check if required fields are empty
        if (name === '' || email === '' || message === '') {
            // Show error message
            $formStatus.text('Please fill out all required fields.').css('color', 'red');
        } else {
            // --- This is a DEMO ---
            // In a real application, you would send this data to a server
            // using AJAX, e.g., $.post('send_email.php', $(this).serialize(), ...)
            
            // Show success message
            $formStatus.text('Thank you for your message! (This is a demo)').css('color', 'green');
            
            // Clear the form fields after successful "submission"
            // $(this)[0].reset(); 
            // OR
            $('#contact-form')[0].reset();
        }
    });

});
