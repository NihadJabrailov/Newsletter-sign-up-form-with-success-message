const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        errorMessage.style.display = 'block';
        emailInput.classList.add('error');
    } else {
        errorMessage.style.display = 'none';
        emailInput.classList.remove('error');
        console.log('Success! Valid email.');
    }
});
