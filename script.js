const container = document.querySelector('.container'),
	showHidePassword = document.querySelector('.showHidePassword'),
	passwordField = document.querySelector('.password'),
	signUp = document.querySelector('.signup-link'),
	loginButton = document.querySelector('.submit-button');

const emailValue = document.getElementById('emailValue');
const passwordValue = document.getElementById('passwordValue');
const alertBox = document.querySelector('.alert');
const loadAnimation = document.querySelector('.loader');

const closeBtn = document.querySelector('.close-btn');
const alert = closeBtn.parentElement;
const loginButton2 = document.getElementById('loginButton');

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
		renderErrorMessage('Please, fill in all inputs');
	} else {
		showLoader();
		setTimeout(() => {
			renderErrorMessage('Your password is incorrect');
			// focus again on password input
			document.loginForm.password.focus();
		}, 2000);
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

	closeBtn.onclick = function () {
		alert.style.opacity = '0';

		// Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
		setTimeout(function () {
			div.style.display = 'none';
		}, 600);
	};
}

//   js code to validate email format
function validateEmail(passwordInput) {
	if (passwordInput.value.match(mailFormat)) {
		document.loginForm.email.focus();
		closeAlert();
	} else {
		return renderErrorMessage('Invalid e-mail address');
	}
}

passwordValue.addEventListener('click', () => {
	if (!emailValue.value.match(mailFormat) && passwordValue.value) closeAlert();
});

function closeAlert() {
	alert.style.display = 'none';
	return false;
}

// mocking login data and showing load animation
function showLoader() {
	loginButton.style.display = 'none';
	loadAnimation.style.display = 'flex';
	setTimeout(() => {
		loginButton.style.display = 'flex';
		loadAnimation.style.display = 'none';
	}, 2000);
}
