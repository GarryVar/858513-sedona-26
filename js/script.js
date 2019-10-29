
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

var summAdult = "";
var summChild = "";

var isStorageSupport = true;
var storage = "";

try {

  storage = isStorageSupport.getItem("entry","out","adult","child");
}

catch (err) {

  isStorageSupport = false;
}


document.addEventListener("DOMContentLoaded", function() {

   if(searchHotel.classList.contains("hotel-search")) {
      searchHotel.classList.toggle("hotel-search--hide");
      searchHotel.classList.toggle("hotel-search");
   }

});


searchBtn.addEventListener("click", function (event) {
  event.preventDefault();

  searchHotel.classList.toggle("hotel-search");
  searchHotel.classList.toggle("hotel-search--hide");
  searchHotel.classList.remove("hotel-search--error");

  if (storage) {

    inputEntry.value = storage;
    inputOut.value = storage;
    inputAdult.value = storage;
    inputChild.value = storage;

  }

});


searchHotel.addEventListener("submit", function (event) {

  if (!inputEntry.value || !inputOut.value) {
    event.preventDefault();

    inputEntry.focus(); 
    
    searchHotel.classList.remove("hotel-search--error");
    searchHotel.offsetWidth =  searchHotel.offsetWidth;
    searchHotel.classList.add("hotel-search--error");
  }

  else {

        localStorage.setItem("entry", inputEntry.value);
        localStorage.setItem("out", inputOut.value);

        localStorage.setItem("adult", inputAdult.value);
        localStorage.setItem("child", inputChild.value);
  }

});

window.addEventListener("keydown", function (event) {

  if (event.keyCode === 27) {

    if (searchHotel.classList.contains("hotel-search")) {

      event.preventDefault();

      searchHotel.classList.add("hotel-search--hide");
      searchHotel.classList.remove("hotel-search");
      earchHotel.classList.remove("hotel-search--error");
      
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
