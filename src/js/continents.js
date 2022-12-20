const percentageSpan = document.querySelector(".visited-countries__percentage");
const wishlistInput = document.querySelector(".countries-wishlist__input");
const addWishBtn = document.querySelector(".countries-wishlist__btn");
const wishListBox = document.querySelector(".countries-wishlist__list");
const wishlistErrorText = document.querySelector(
	".countries-wishlist__error-text"
);
const allCountriesArr = document.querySelectorAll(
	".pick-visited-countries__country"
);
const countryNamesArr = [];
const allCheckboxes = document.querySelectorAll(
	".pick-visited-countries__checkbox"
);

const spanText = document.querySelector(".visited-countries__span");

const checkCountries = () => {
	let countriesArr = [];
	let checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked");
	for (let i = 0; i < checkedBoxes.length; i++) {
		countriesArr.push(checkedBoxes);
	}
	let percentValue = (countriesArr.length / allCountriesArr.length) * 100;
	percentageSpan.textContent = Math.floor(percentValue) + "%";
};

const addWish = () => {
	if (wishlistInput.value === "") {
		wishlistErrorText.style.visibility = "visible";
		wishlistErrorText.textContent = "Write the country";
	} else if (
		wishlistInput.value !== "" &&
		countryNamesArr.indexOf(wishlistInput.value.toLowerCase()) === -1
	) {
		wishlistErrorText.style.visibility = "visible";
		wishlistErrorText.textContent = "Write the correct country";
	} else {
		const singleCountryDiv = document.createElement("div");
		singleCountryDiv.classList.add("pick-visited-countries__single-country");
		const newInput = document.createElement("input");
		newInput.setAttribute("type", "checkbox");
		newInput.setAttribute("name", "country-wishlist");
		newInput.setAttribute("value", `${wishlistInput.value}`);
		newInput.classList.add("countries-wishlist__checkbox");
		const newSpan = document.createElement("span");
		newSpan.classList.add(
			"countries-wishlist__country.countries-wishlist__country"
		);
		newSpan.textContent = wishlistInput.value;
		newSpan.classList.add("countries-wishlist__country");
		const delBtn = document.createElement("button");
		delBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
		delBtn.classList.add("countries-wishlist__delete-btn");
		singleCountryDiv.append(newInput, newSpan, delBtn);
		wishListBox.append(singleCountryDiv);
		wishlistErrorText.style.visibility = "hidden";
		wishlistInput.value = "";
	}
};
const showCountryName = () => {
	allCountriesArr.forEach((country) =>
		countryNamesArr.push(country.textContent.toLowerCase())
	);
};
showCountryName();

const checkClick = (e) => {
	if (e.target.matches(".countries-wishlist__delete-btn")) {
		e.target.closest("div.pick-visited-countries__single-country").remove();
	} else if (e.target.matches(".countries-wishlist__checkbox")) {
		checkVisitedWishes(e);
	}
};

const checkVisitedWishes = (e) => {
	const test = e.target;
	allCheckboxes.forEach((checkbox) => {
		const singleCheckBox = checkbox;
		if (
			test.getAttribute("value").toLowerCase() ===
			singleCheckBox.getAttribute("value").toLowerCase()
		) {
			singleCheckBox.setAttribute("checked", "true");
		}
	});
	test.closest(".pick-visited-countries__single-country").remove();
	checkCountries();
};

addWishBtn.addEventListener("click", addWish);
wishListBox.addEventListener("click", checkClick);
