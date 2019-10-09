var filterForm = document.querySelector('.filter__form');
var filterSubmit = filterForm.querySelector('.filter__submit'); 

var filterCheckbox = filterForm.querySelectorAll('[type=checkbox]');

var filterMinPrice = filterForm.querySelector('[name=min-price]');
var filterMaxPrice = filterForm.querySelector('[name=max-price]');

for (var i = 0; i < filterCheckbox.length; i++) {	

		filterForm.addEventListener('submit', function(event) {

		event.preventDefault();

		if (!filterMinPrice.value || !filterMaxPrice.value && !filterCheckbox[i].checked) {

		alert('Введите данные');	
		}
		
		else if (filterMinPrice.value || filterCheckbox[i].checked) {
					alert(filterMinPrice.value);	
		}

	});
}


