const container = document.querySelector('.container'),
	showHidePassword = document.querySelector('.showHidePassword'),
	passwordField = document.querySelector('.password'),
	signUp = document.querySelector('.signup-link'),
	loginButton = document.querySelector('.submit-button');

const emailValue = document.getElementById('emailValue');
const passwordValue = document.getElementById('passwordValue');
const alertBox = document.querySelector('.alert');

const closeBtn = document.querySelector('.close-btn');
const alert = closeBtn.parentElement;

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let screenWidth = window.innerWidth > 0 && window.innerWidth;

//   js code to show/hide password and change icon
showHidePassword.addEventListener('click', () => {
	if (!passwordValue.value) return;
	if (passwordField.type === 'password') {
		passwordField.type = 'text';
		showHidePassword.classList.replace('uil-eye-slash', 'uil-eye');
	} else {
		passwordField.type = 'password';
		showHidePassword.classList.replace('uil-eye', 'uil-eye-slash');
	}
});

//   js code to validate if inputs don't are empty
loginButton.addEventListener('click', () => {
	closeAlert();
	if (!emailValue.value.match(mailFormat) && emailValue.value) {
		renderErrorMessage('Invalid email format');
		return;
	}
	if (!emailValue.value || !passwordValue.value) {
		renderErrorMessage('Please, fill in all inputs.');
	} else {
		renderErrorMessage('Your password is incorrect.');
	}
});

// -----------------functions-----------------

function renderErrorMessage(errorText) {
	// Get the parent of <span class="close-btn"> (<div class="alert">)
	alert.removeChild(alert.lastChild);

	const error = document.createElement('div');
	error.innerHTML = errorText;

	alert.appendChild(error);
	alert.style.display = 'block';
	alert.style.opacity = '1';
}

//   js code to validate email format
function validateEmail(passwordInput) {
	console.log('validation');
	if (passwordInput.value.match(mailFormat)) {
		document.loginForm.email.focus();
		console.log('email zgodny');
		closeAlert();
	} else {
		return renderErrorMessage('You have entered an invalid email address.');
	}
}

passwordValue.addEventListener('click', () => {
	if (!emailValue.value.match(mailFormat) && passwordValue.value) closeAlert();
});

function closeAlert() {
	alert.style.opacity = '0';
	return false;
}
