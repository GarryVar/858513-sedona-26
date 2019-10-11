
var searchHotel = document.querySelector(".hotel-search");
var searchBtn = document.querySelector(".button--search");


var inputEntry = searchHotel.querySelector("[name=entry]");
var inputOut = searchHotel.querySelector("[name=leave]");

var inputAdult = searchHotel.querySelector("[name=adult]");
var inputChild = searchHotel.querySelector("[name=child]");

var btnPlusAdult = searchHotel.querySelector(".hotel-search__adult-value--plus");
var btnMinusAdult = searchHotel.querySelector(".hotel-search__adult-value--minus");
var btnPlusChild = searchHotel.querySelector(".hotel-search__child-value--plus");
var btnMinusChild = searchHotel.querySelector(".hotel-search__child-value--minus");

var isStorageSupport = true;
var storage = "";

var summAdult = "";
var summChild = "";

try {

  storage = isStorageSupport.getItem("adult", "child");
}

catch (err) {

  isStorageSupport = false;
}

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();


  searchHotel.classList.toggle("hotel-search");
  searchHotel.classList.toggle("hotel-search--hide");
  searchHotel.classList.remove('hotel-search--error');

  if (storage) {
    inputEntry.value = storage;
  }
});


searchHotel.addEventListener("submit", function (event) {

  if (!inputEntry.value || !inputOut.value) {
    event.preventDefault();

    inputEntry.focus(); 
    
    searchHotel.classList.remove('hotel-search--error');
    searchHotel.offsetWidth =  searchHotel.offsetWidth;
    searchHotel.classList.add('hotel-search--error');
  }

  else {
     if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    
  }


});

window.addEventListener("keydown", function (event) {

  if (event.keyCode === 27) {

    if (searchHotel.classList.contains("hotel-search--hide")) {

      event.preventDefault();

      searchHotel.classList.remove("hotel-search--hide");
      searchHotel.classList.add("hotel-search");
      earchHotel.classList.remove('hotel-search--error');
      
    }
  }
});

btnPlusAdult.addEventListener("click", function (event) {
  event.preventDefault();

  if(inputAdult.value >= 0) {

    summAdult.textContent = inputAdult.value;
    summAdult++;
    inputAdult.value = summAdult;
  }

});


btnMinusAdult.addEventListener("click", function (event) {
  event.preventDefault();

  if(inputAdult.value != 0) {

    summAdult.textContent = inputAdult.value;
    summAdult--;
    inputAdult.value = summAdult;
  }

});


btnPlusChild.addEventListener("click", function(event) {
  event.preventDefault();

  if(inputChild.value >=0) {

    summChild.textContent = inputChild.value;
    summChild++;
    inputChild.value = summChild;
  }

});


btnMinusChild.addEventListener("click", function(event) {
  event.preventDefault();

  if(inputChild.value !=0) {

    summChild.textContent = inputChild.value;
    summChild--;
    inputChild.value = summChild;
  }

});


