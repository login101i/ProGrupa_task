const container = document.querySelector('.container');
const eyeIcon = document.querySelector('.eye-icon');
const passwordField = document.querySelector('.password');
const loginButton = document.querySelector('.submit-button');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const alertBox = document.querySelector('.alert');
const loadAnimation = document.querySelector('.loader');
const eyeIconContainer = document.querySelector('.eye-icon-container');
const closeBtn = document.querySelector('.close-btn');
const alert = closeBtn.parentElement;

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//   js code to show/hide password and change icon
eyeIconContainer.addEventListener('click', () => {
	if (passwordField.type === 'password') {
		passwordField.type = 'text';
		eyeIcon.classList.replace('uil-eye-slash', 'uil-eye');
	} else {
		passwordField.type = 'password';
		eyeIcon.classList.replace('uil-eye', 'uil-eye-slash');
	}
});

//   js code to validate if inputs don't are empty
loginButton.addEventListener('click', () => {
	closeAlert();
	if (!emailInput.value.match(mailFormat) && emailInput.value) {
		renderErrorMessage('Invalid email format');
		return;
	}
	if (!emailInput.value || !passwordInput.value) {
		renderErrorMessage('Please, fill in all fields');
	} else {
		showLoader();
		setTimeout(() => {
			renderErrorMessage('Your password is incorrect');
		}, 2000);
	}
});

passwordInput.addEventListener('click', () => {
	if (!emailInput.value.match(mailFormat) && passwordInput.value) closeAlert();
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
function validateEmail(emailInput) {
	if (emailInput.value.match(mailFormat)) {
		closeAlert();
	} else {
		return renderErrorMessage('Invalid email format');
	}
}

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
