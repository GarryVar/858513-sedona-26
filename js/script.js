
var searchHotel = document.querySelector('.hotel-search');
var searchBtn = document.querySelector('.button--search');

var form = document.querySelector('form');

var inputEntry = searchHotel.querySelector('[name=entry]');
var inputOut = searchHotel.querySelector('[name=leave]');

var inputAdult = searchHotel.querySelector('[name=adult]');
var inputChild = searchHotel.querySelector('[name=child]');

var btnPlus = searchHotel.querySelector('.hotel-search__adult-value--plus');
var btnMinus = searchHotel.querySelector('.hotel-search__adult-value--minus');

var isStorageSupport = true;
var storage = '';

var summ = '';

try {
  storage = isStorageSupport.getItem('adult', 'child');
}

catch (err) {
  isStorageSupport = false;
}

searchBtn.addEventListener('click', function (event) {
  event.preventDefault();

  searchHotel.classList.toggle('hotel-search--show');
  searchHotel.classList.toggle('hotel-search');
  if (storage) {
    inputEntry.value = storage;
  }
  inputEntry.focus();
});



form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!inputEntry.value || !inputOut.value) {
    console.log('Форма не отправилась! Заполните кол-во Взрослых и Детей');
  }

  else {
    if (isStorageSupport) {
      localStorage.setItem('adult', inputAdult.value);
      localStorage.setItem('child', inputChild.value);
    }

    console.log(inputAdult.value);
    console.log(inputChild.value);
    console.log('Форма отправилась');
  }


});

window.addEventListener('keydown', function (event) {
  if (event.keyСode === 27) {
    if (searchHotel.classList.contains('hotel-search--show')) {
      event.preventDefault();
      searchHotel.classList.remove('hotel-search--show');
    }
  }
});

btnPlus.addEventListener("click", function (event) {
  event.preventDefault();

  summ.textContent = inputAdult.value;
  summ++;
  inputAdult.value = summ;
});

btnMinus.addEventListener("click", function (event) {
  event.preventDefault();

  summ.textContent = inputAdult.value;
  summ--;
  inputAdult.value = summ;
});



