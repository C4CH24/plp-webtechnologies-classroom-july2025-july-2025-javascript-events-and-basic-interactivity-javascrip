// Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Counter Game
const counterValue = document.getElementById('counterValue');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');
let count = 0;

function updateCounter() {
    counterValue.textContent = count;
    counterValue.style.color = count > 0 ? 'var(--success-color)' : 
                              count < 0 ? 'var(--error-color)' : 
                              'var(--primary-color)';
}

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

updateCounter();

// Form Validation
const form = document.getElementById('validationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName() {
    if (nameInput.value.trim().length < 2) {
        nameError.style.display = 'block';
        nameInput.style.borderColor = 'var(--error-color)';
        return false;
    } else {
        nameError.style.display = 'none';
        nameInput.style.borderColor = '#ddd';
        return true;
    }
}

function validateEmail() {
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
        emailInput.style.borderColor = 'var(--error-color)';
        return false;
    } else {
        emailError.style.display = 'none';
        emailInput.style.borderColor = '#ddd';
        return true;
    }
}

function validatePassword() {
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
        passwordInput.style.borderColor = 'var(--error-color)';
        return false;
    } else {
        passwordError.style.display = 'none';
        passwordInput.style.borderColor = '#ddd';
        return true;
    }
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    if (isNameValid && isEmailValid && isPasswordValid) {
        successMessage.style.display = 'block';
        
        setTimeout(() => {
            form.reset();
            successMessage.style.display = 'none';
        }, 3000);
    }
});