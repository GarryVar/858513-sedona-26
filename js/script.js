
var searchHotel = document.querySelector('.hotel-search');
var searchBtn = document.querySelector('.button--search');


var inputEntry = searchHotel.querySelector('[name=entry]');
var inputOut = searchHotel.querySelector('[name=leave]');

var inputAdult = searchHotel.querySelector('[name=adult]');
var inputChild = searchHotel.querySelector('[name=child]');

var btnPlusAdult = searchHotel.querySelector('.hotel-search__adult-value--plus');
var btnMinusAdult = searchHotel.querySelector('.hotel-search__adult-value--minus');
var btnPlusChild = searchHotel.querySelector('.hotel-search__child-value--plus');
var btnMinusChild = searchHotel.querySelector('.hotel-search__child-value--minus');

var isStorageSupport = true;
var storage = '';

var summAdult = '';
var summChild = '';

try {

  storage = isStorageSupport.getItem('adult', 'child');
}

catch (err) {

  isStorageSupport = false;
}


searchBtn.addEventListener('click', function (event) {
  event.preventDefault();

  searchHotel.classList.add('hotel-search--show');
  searchHotel.classList.remove('hotel-search');
  if (storage) {
    inputEntry.value = storage;
  }
  inputEntry.focus();
});

searchBtn.addEventListener('click', function (event){
  event.preventDefault();

    if(searchHotel.classList.contains('hotel-search--show')) {

      searchHotel.classList.add('hotel-search');
      searchHotel.classList.remove('hotel-search--show');
    }
});


searchHotel.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!inputEntry.value || !inputOut.value) {
    console.log('Форма не отправилась! Заполните кол-во Взрослых и Детей');
  }

  else {
    if (isStorageSupport) {
      localStorage.setItem('adult', inputAdult.value);
      localStorage.setItem('child', inputChild.value);
    }

    console.log(inputEntry.value);
    console.log(inputOut.value);
    console.log(inputAdult.value);
    console.log(inputChild.value);
    console.log('Форма отправилась');
  }


});

window.addEventListener('keydown', function (event) {

  var key = event.keyСode;
  if (key === 27) {

    if (searchHotel.classList.contains('hotel-search--show')) {

      event.preventDefault();
      searchHotel.classList.remove('hotel-search--show');
    }
  }
});

btnPlusAdult.addEventListener('click', function (event) {
  event.preventDefault();

  if(inputAdult.value >= 0) {

      summAdult.textContent = inputAdult.value;
      summAdult++;
      inputAdult.value = summAdult;
  }

});

btnMinusAdult.addEventListener('click', function (event) {
  event.preventDefault();

  if(inputAdult.value != 0) {

      summAdult.textContent = inputAdult.value;
      summAdult--;
      inputAdult.value = summAdult;
  }

});

btnPlusChild.addEventListener('click', function(event) {
  event.preventDefault();

  if(inputChild.value >=0) {

      summChild.textContent = inputChild.value;
      summChild++;
      inputChild.value = summChild;
  }

});

btnMinusChild.addEventListener('click', function(event) {
  event.preventDefault();

  if(inputChild.value !=0) {

      summChild.textContent = inputChild.value;
      summChild--;
      inputChild.value = summChild;
      }

});





