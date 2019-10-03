var searchHotel = document.querySelector('.hotel-search--hide');
var searchBtn = document.querySelector('.button--search');

searchBtn.addEventListener('click', function (event) {
  event.preventDefault();
  searchHotel.classList.toggle('hotel-search--hide');
  searchHotel.classList.toggle('hotel-search');
});


// searchBtn.addEventListener('keydown', function (event) {
//   if (event.keydown === 27) {
//     if ()
//       searchHotel.classList.add('hotel-search--hide');
//     searchHotel.classList.remove('hotel-search');
//   }
// });


