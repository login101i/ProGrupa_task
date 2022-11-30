const requiredEmail = value => {
	if (!value) return 'wymagane';
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (value.match(validRegex)) {
		return false;
	} else {
		return 'Wymagane';
	}
};
