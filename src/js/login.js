const signInBtn = document.querySelector(".hello-section__btn--sign-in");
const signInPopup = document.querySelector(".hello-section__popups");
const cancelLoginBtn = document.querySelector(".login-popup__btn--cancel-btn");
const loginBtn = document.querySelector(".login-popup__btn--login-btn");
const registerBtn = document.querySelector(
	".register-popup__btn--register-btn"
);
const cancelRegisterBtn = document.querySelector(
	".register-popup__btn--cancel-btn"
);

const registerTopBtn = document.querySelector(
	".register-popup__register-top-btn"
);
const loginTopBtn = document.querySelector(".login-popup__login-top-btn");
const registerPopup = document.querySelector(".register-popup__register-box");
const logInPopup = document.querySelector(".login-popup__log-in-box");

const loginInput = document.querySelector(".login-popup__login-input--login");
const passwordInput = document.querySelector(
	".login-popup__login-input--password"
);
const loginErrorText = document.querySelector(".login-popup__error-text");

const registerName = document.querySelector(
	".register-popup__register-input--name"
);

const registerLogin = document.querySelector(
	".register-popup__register-input--login"
);

const registerEmail = document.querySelector(
	".register-popup__register-input--register-email"
);

const password1 = document.querySelector(
	".register-popup__register-input--password"
);

const password2 = document.querySelector(
	".register-popup__register-input--repeat-password"
);

let errorNumber;

const checkLogIn = (e) => {
	if (loginInput.value.length < 3 || passwordInput.value.length < 8) {
		e.preventDefault();
		loginErrorText.style.visibility = "visible";
	} else {
		loginErrorText.style.visibility = "hidden";
		loginInput.value = "";
		passwordInput.value = "";
		hideSignInPopup();
	}
};

const countErrors = () => {
	const allRegisterGroups = document.querySelectorAll(
		".register-popup__register-group"
	);
	errorNumber = 0;
	allRegisterGroups.forEach((group) => {
		if (group.classList.contains("error-count")) {
			errorNumber++;
		}
	});
};

const checkRegister = () => {
	checkLength(registerName, 3);
	checkLength(registerLogin, 3);
	checkLength(password1, 8);
	checkMail();
	checkPasswords();
	countErrors();
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input);
	} else {
		hideError(input);
	}
};

const showError = (input) => {
	const registerGroup = input.parentElement;
	registerGroup.classList.add("error-count");
	const errorText = registerGroup.querySelector(".register-popup__error-text");
	errorText.style.visibility = "visible";
};
const hideError = (input) => {
	const registerGroup = input.parentElement;
	registerGroup.classList.remove("error-count");
	const errorText = registerGroup.querySelector(".register-popup__error-text");
	errorText.style.visibility = "hidden";
};

const checkMail = () => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (re.test(registerEmail.value)) {
		hideError(registerEmail);
	} else {
		showError(registerEmail);
	}
};

const checkPasswords = () => {
	if (password1.value !== password2.value) {
		showError(password2);
	} else {
		hideError(password2);
	}
};

const cleanForm = () => {
	const allInputs = [
		registerName,
		registerLogin,
		registerEmail,
		password1,
		password2,
	];
	allInputs.forEach((el) => (el.value = ""));
	allInputs.forEach((el) => {
		hideError(el);
	});
	loginErrorText.style.visibility = "hidden";
	loginInput.value = "";
	passwordInput.value = "";
};

const showSignInPopup = () => {
	signInPopup.style.display = "block";
};
const hideSignInPopup = () => {
	signInPopup.style.display = "none";
};

const showRegisterPopup = () => {
	registerPopup.style.zIndex = "500";
	logInPopup.style.zIndex = "400";
};
const showLogInPopup = () => {
	logInPopup.style.zIndex = "500";
	registerPopup.style.zIndex = "400";
};

signInBtn.addEventListener("click", showSignInPopup);
cancelLoginBtn.addEventListener("click", () => {
	hideSignInPopup();
	cleanForm();
});
cancelRegisterBtn.addEventListener("click", () => {
	hideSignInPopup();
	cleanForm();
});

registerTopBtn.addEventListener("click", showRegisterPopup);
loginTopBtn.addEventListener("click", showLogInPopup);

loginBtn.addEventListener("click", checkLogIn);

registerBtn.addEventListener("click", (e) => {
	checkRegister();
	if (errorNumber !== 0) {
		e.preventDefault();
	} else {
		cleanForm();
	}
});
