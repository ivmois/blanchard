const searchBtn = document.querySelector('.header__search-open');
const searchMenu = document.querySelector('.header__search');
const closeBtn = document.querySelector('.header__search-close');

searchBtn.addEventListener('click', function () {
  searchMenu.classList.add('search--open');
  searchBtn.classList.add('search--active');
});

closeBtn.addEventListener('click', function () {
  searchMenu.classList.remove('search--open');
  searchBtn.classList.remove('search--active');
});

document.addEventListener('click', function (event) {
  if (!event.target.closest('.header__search') && !event.target.closest('.header__search-open')) {
    searchMenu.classList.remove('search--open');
    searchBtn.classList.remove('search--active');
  }

});



