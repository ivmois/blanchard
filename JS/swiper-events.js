
const swiperEvents = new Swiper('.swiper-events', {
  // Optional parameters
  direction: 'horizontal',
  // autoHeight:true,

  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-events-next',
    prevEl: '.swiper-events-prev',
  },

  pagination: {
    el: '.swiper-events-pagination',
    clickable: true
  },

  breakpoints: {

    300: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1
    },

    701: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3
    },

    1351: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3
    }
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

});
