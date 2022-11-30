const container = document.querySelector('.container'),
	showHidePassword = document.querySelector('.showHidePassword'),
	passwordField = document.querySelector('.password'),
	signUp = document.querySelector('.signup-link'),
	loginButton = document.querySelector('.submit-button');

const emailValue = document.getElementById('emailValue');
const passwordValue = document.getElementById('passwordValue');
const alertBox = document.querySelector('.alert');

//   js code to validate email format
function validateEmail(inputText) {
	var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (inputText.value.match(mailFormat)) {
		document.loginForm.email.focus();
		return true;
	} else {
		alertBox.classList.add('visible');
		alert('You have entered an invalid email address.');
		document.loginForm.email.focus();
		return true;
	}
}

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
	loginButton.classList.add('inactive');

	if (!emailValue.value || !passwordValue.value) {
		alert('Please, fill in all inputs.');
	} else {
		alert('Your password is incorrect.');
	}
});

function activeSubmitButton() {
	loginButton.classList.remove('inactive');
}

function renderErrorMessage() {
	const closeBtn = document.querySelector('.close-btn');
	let i;
	window.addEventListener('resize', () => {
		var width = window.innerWidth > 0 && window.innerWidth;
		console.log(
			'%cMyProject%cline:55%cwidth',
			'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
			'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
			'color:#fff;background:rgb(96, 143, 159);padding:3px;border-radius:2px',
			width,
		);

		console.log(width);
		if (width > 420) return;

		// Loop through all close buttons
		for (i = 0; i < closeBtn.length; i++) {
			// When someone clicks on a close button
			closeBtn[i].onclick = function () {
				// Get the parent of <span class="closebtn"> (<div class="alert">)
				var div = this.parentElement;

				// Set the opacity of div to 0 (transparent)
				div.style.opacity = '0';

				// Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
				setTimeout(function () {
					div.style.display = 'none';
				}, 600);
			};
		}
	});
}
renderErrorMessage();
