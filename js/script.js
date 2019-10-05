
var searchHotel = document.querySelector('.hotel-search');
var searchBtn = document.querySelector('.button--search');

var form = document.querySelector('form');

var inputEntry = searchHotel.querySelector('[name=entry]');
var inputOut = searchHotel.querySelector('[name=leave]');

var inputAdult = searchHotel.querySelector('[name=adult]');
var inputChild = searchHotel.querySelector('[name=child]');

var isStorageSupport = true;
var storage = '';

try {
  storage = isStorageSupport.getItem('entry')
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

  if (!inputEntry.value || !inputOut.value || !inputAdult.value || !inputChild.value) {
    console.log("ЗАПОЛНИ ПОЛЯ!!!")
  }

  else {
    if (isStorageSupport) {
      localStorage.setItem('entry', inputEntry.value);
      localStorage.setItem('leave', inputOut.value);
      localStorage.setItem('adult', inputAdult.value);
      localStorage.setItem('child', inputChild.value);
    }

  }

  console.log(inputOut.value);
  console.log(inputEntry.value);
  console.log(inputAdult.value);
  console.log(inputChild.value);

  console.log('Форма отправилась');

});


window.addEventListener('keydown', function (event) {
  if (event.keyDown === 27) {
    if (searchHotel.classList.contains('hotel-search--show')) {
      event.preventDefault();
      searchHotel.classList.remove('hotel-search--show');
    }
  }
});
