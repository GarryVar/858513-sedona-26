let showHotelSearchForm = () => {

  let searchHotel = document.querySelector('.hotel-search--hide');
  let showBtn = document.querySelector('.button--search');

  showBtn.addEventListener('click', () => {
    searchHotel.classList.toggle('hotel-search--hide');
    searchHotel.classList.toggle('hotel-search');
  });

};

showHotelSearchForm();
