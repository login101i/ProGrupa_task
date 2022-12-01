const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.querySelector('.submit-button');
const eyeIconContainer = document.querySelector('.eye-icon-container');
const eyeIcon = document.getElementById('eyeIcon');
const loadAnimation = document.querySelector('.loader');
const alertBox = document.querySelector('.alert');

// const eyeIcon = document.querySelector('.eye-icon');
const closeBtn = document.querySelector('.close-btn');
const alert = closeBtn.parentElement;

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// -----------------   DOM manipulation   ----------------- //

//   show/hide password, change eye icon, add atrubutes
eyeIconContainer.addEventListener('click', () => {
	if (passwordInput.type === 'password') {
		passwordInput.type = 'text';
		eyeIcon.setAttribute('title', 'password visible');
		eyeIcon.setAttribute('alt', '');
		eyeIcon.classList.add('eye-icon-open');
	} else {
		passwordInput.type = 'password';
		eyeIcon.setAttribute('title', 'password hidden');
		eyeIcon.setAttribute('alt', '');
		eyeIcon.classList.remove('eye-icon-open');
	}
});

//   validate if inputs are filled
loginButton.addEventListener('click', () => {
	closeAlert();
	if (!mailFormat.test(emailInput.value) && emailInput.value) {
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

//   hide all inputs required error after click on passwordInput
passwordInput.addEventListener('input', () => {
	if (!mailFormat.test(emailInput.value)) return;
	else {
		if (mailFormat.test(emailInput.value) && passwordInput.value) closeAlert();
	}
});

//  set atribute on load
eyeIcon.setAttribute('title', 'password hidden');

// -----------------   functions   ----------------- //

function renderErrorMessage(errorText) {
	// Get the parent of <span class="close-btn">
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
			alert.style.display = 'none';
		}, 600);
	};
}

//   js code to validate email format / remove error when clear emailInput
function validateEmail(email) {
	if (!email || !email.value) {
		closeAlert();
		return;
	}
	if (mailFormat.test(email.value)) {
		closeAlert();
	} else {
		return renderErrorMessage('Invalid email format');
	}
}

//  hide alert every time LogInButton is pressed
function closeAlert() {
	alert.style.display = 'none';
	return false;
}

// 	fake login data fetch and showing load animation
function showLoader() {
	loginButton.style.display = 'none';
	loadAnimation.style.display = 'flex';
	setTimeout(() => {
		loginButton.style.display = 'flex';
		loadAnimation.style.display = 'none';
	}, 2000);
}
