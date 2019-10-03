
var searchForm = function () {

  var searchHotel = document.querySelector('.hotel-search--hide');
  var searchBtn = document.querySelector('.button--search');

  searchBtn.addEventListener('click', function () {
    searchHotel.classList.toggle('hotel-search--hide');
    searchHotel.classList.toggle('hotel-search');
  });

};

searchForm();

var personNumber = function () {

  var form = document.querySelector('.hotel-search'),
    personInput = document.querySelectorAll('.hotel-search__input'),
    adultPlus = document.querySelector('.hotel-search__adult-value--plus'),
    adultMinus = document.querySelector('.hotel-search__adult-value--minus');

}

personNumber();
