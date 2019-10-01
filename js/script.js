
var searchForm = function(){

  var searchHotel = document.querySelector('.hotel-search--hide');
  var searchBtn = document.querySelector('.button--search');

  searchBtn.addEventListener('click', function(){
    searchHotel.classList.toggle('hotel-search--hide');
    searchHotel.classList.toggle('hotel-search'); 
  });

};

searchForm();
