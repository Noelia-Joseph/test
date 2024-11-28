document.getElementById('contactForm').addEventListener('submit', function(event) 
{
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Basic validation
    if (name === '' || email === '' || message === '')
    {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
        return;
    }

    // Simulate form submission
    formMessage.textContent = 'Thank you for your message, ' + name + '!';
    formMessage.style.color = 'green';

    // Clear the form
    document.getElementById('contactForm').reset();
});