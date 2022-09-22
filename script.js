const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const message = document.getElementById('message');

let isPasswordRed = false;
let isConfirmPasswordRed = false;

form.addEventListener('submit', e => {

  if (passwordInput.value !== confirmPasswordInput.value) {
    e.preventDefault();
    passwordInput.style.border = '2px solid red';
    confirmPasswordInput.style.border = '2px solid red';
    message.textContent = '* Passwords do not match';
    isPasswordRed = true;
    isConfirmPasswordRed = true;
  }
});

passwordInput.addEventListener('focusout', e => {
  if (passwordInput.value.length < 6 && passwordInput.value !== '') {
    passwordInput.style.border = '2px solid red';
    message.textContent = '* Password must contain at least 6 characters';
    isPasswordRed = true;
  }
  else {
    passwordInput.style.border = '2px solid #E5E7EB';
    isPasswordRed = false;
  }
});

passwordInput.addEventListener('focus', e => {
  message.textContent = '';
  passwordInput.style.border = '2px solid #0000ff';
});

confirmPasswordInput.addEventListener('focus', e => {
  confirmPasswordInput.style.border = '2px solid #0000ff';
});

confirmPasswordInput.addEventListener('focusout', e => {
    confirmPasswordInput.style.border = '2px solid #E5E7EB';
    isConfirmPasswordRed = false;
});