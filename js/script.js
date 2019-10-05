
var searchHotel = document.querySelector('.hotel-search');
var searchBtn = document.querySelector('.button--search');

var form = document.querySelector('form');
var inputEntry = searchHotel.querySelector('[name=entry]');
var inputOut = searchHotel.querySelector('[name=leave]');

searchBtn.addEventListener('click', function (event) {
  event.preventDefault();

  searchHotel.classList.toggle('hotel-search--show');
  searchHotel.classList.toggle('hotel-search');

  inputEntry.focus();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!inputEntry.value || !inputOut.value) {
    console.log("ЗАПОЛНИ ПОЛЯ!!!")
  }
  console.log(inputEntry.value, inputOut.value);
});
