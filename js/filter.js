var filterForm = document.querySelector(".filter__form");  
var filterSubmit = filterForm.querySelector(".filter__submit");

var filterPriceMin = filterForm.querySelector("[name=min-price]");
var filterPriceMax = filterForm.querySelector("[name=max-price]");

var filterCheckbox = filterForm.querySelectorAll("[type=checkbox]");


	filterForm.addEventListener("submit", function(event) {

			if (!filterPriceMin.value || !filterPriceMax.value) {

				event.preventDefault();
				
			} 
			else {

				console.log("Стоимость от " + filterPriceMin.value + " рублей.");
				console.log("Стоимость до " + filterPriceMax.value + " рублей.");

				for(var i = 0; i < filterCheckbox.length; i++) {
					console.log(filterCheckbox[i].checked  && filterCheckbox[i].name);

				}		
			}
	});
