var filterForm = document.querySelector(".filter__form");  
var filterSubmit = filterForm.querySelector(".filter__submit");

var filterPriceMin = filterForm.querySelector("[name=min-price]");
var filterPriceMax = filterForm.querySelector("[name=max-price]");

var filterCheckbox = filterForm.querySelectorAll("[type=checkbox]");

var isStorageSupport = true;
var storage = "";

try {
	storage = isStorageSupport.getItem("filterPriceMin","filterPriceMax","filterCheckbox")
}
catch (err) {

	isStorageSupport = false;
}


	filterForm.addEventListener("submit", function(event) {

			if (!filterPriceMin.value || !filterPriceMax.value) {

				event.preventDefault();
				
			} 
			else {

					localStorage.setItem("fliterPriceMin", fliterPriceMin.value);
					localStorage.setItem("fliterPriceMax", fliterPriceMax.value);
					localStorage.setItem("fliterCheckbox", fliterCheckbox.value);
			}
	});
