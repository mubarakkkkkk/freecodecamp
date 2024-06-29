document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    
    if (name === '' || email === '') {
        alert('Please fill out all required fields.');
        return;
    }
    
    if (number !== '' && (isNaN(number) || number < 10 || number > 99)) {
        alert('Please enter a valid age between 10 and 99.');
        return;
    }
    
    // If validation passes, you can submit the form or process the data here
    alert('Form submitted successfully!');
});