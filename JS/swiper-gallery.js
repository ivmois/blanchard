
 const swiperGallery = new Swiper('.swiper-gallery', {
  // Optional parameters
  direction: 'horizontal',


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-gallery-prev',
    prevEl: '.swiper-gallery-next',
  },

  pagination: {
    el: '.swiper-gallery-pagination',
    type: 'fraction',
  },

  breakpoints: {

    300: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1
    },

    577: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2
    },

    1351: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3
    }
  },

  // a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }
});
