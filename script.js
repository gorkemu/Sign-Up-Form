const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const message = document.getElementById('message');

let isTriggered = false;

form.addEventListener('submit', e => {

  if (passwordInput.value !== confirmPasswordInput.value) {
    e.preventDefault();
    confirmPasswordInput.style.border = '2px solid red';
    passwordInput.style.border = '2px solid red';
    message.style.color = 'red';
    message.textContent = '* Passwords do not match';
    message.style.fontSize = '10px';
  }
});

passwordInput.addEventListener('focusout', e => {

  if (passwordInput.value.length < 6 && passwordInput.value !== '') {
    passwordInput.style.border = '2px solid red';
    message.style.color = 'red';
    message.textContent = '* Password must contain at least 6 characters';
    message.style.fontSize = '10px';
  }
  isTriggered = true;
});

passwordInput.addEventListener('focus', e => {

  if (isTriggered = true) {
    passwordInput.style.border = '2px solid #E5E7EB';
    message.textContent = '';
  }
  isTriggered = false;
  }
);

confirmPasswordInput.addEventListener('focus', e => {

  if (isTriggered = true && passwordInput.value.length >= 6) {
    passwordInput.style.border = '2px solid #E5E7EB';
    message.textContent = '';
  }
  isTriggered = false;
  }
);

confirmPasswordInput.addEventListener('keyup', e => {

  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.style.border = '2px solid #E5E7EB';
    message.textContent = '';
  }
  isTriggered = false;
  }
);
