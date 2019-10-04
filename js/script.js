var searchSection = document.querySelector('.page-index');
var searchHotel = document.querySelector('.hotel-search');
var searchBtn = document.querySelector('.button--search');


searchBtn.addEventListener('click', function (event) {
  event.preventDefault();
  searchHotel.classList.toggle('hotel-search');
  searchHotel.classList.toggle('hotel-search--show');
});


// searchBtn.addEventListener('keydown', function (event) {
//   if (event.keydown === 27) {
//     if ()
//       searchHotel.classList.add('hotel-search--hide');
//     searchHotel.classList.remove('hotel-search');
//   }
// });


