# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [GitHub Repository](https://github.com/NihadJabrailov/Newsletter-sign-up-form-with-success-message)
- Live Site URL: [Vercel Live Site](https://sign-up-form-chi-three.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (DOM Manipulation & Regex Validation)

### What I learned

In this project, I improved my JavaScript skills by learning how to validate an email using Regular Expressions (Regex) and dynamically toggle between different UI screens (main form and success message) using DOM manipulation and CSS classes.

Here is the JavaScript code snippet I am proud of:

```js
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        // Show error state
        errorMessage.style.display = 'block';
        emailInput.classList.add('error');
    } else {
        // Show success state and display user email
        userEmail.textContent = emailValue;
        mainContainer.classList.add('hidden');
        successContainer.classList.remove('hidden');
    }
});
