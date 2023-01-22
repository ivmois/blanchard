const openBtns = document.querySelectorAll('.swiper-gallery__slide');
const overlay = document.querySelector('.modals-gallery__overlay');
const closeBtns = document.querySelectorAll('.modals-gallery__close')

openBtns.forEach(function (el) {
  el.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path;
    const target = `[data-target ="${path}"]`;

    if (document.querySelector(target)) {
      overlay.classList.add('overlay--active');
      document.querySelector(target).classList.add('modal--active');
      document.body.style.overflow = 'hidden';
    };

    closeBtns.forEach(function (el) {
      el.addEventListener('click', function () {
        overlay.classList.remove('overlay--active');
        document.querySelector(target).classList.remove('modal--active');
        document.body.style.overflow = 'auto';
      });
    });

    overlay.addEventListener('click', function(event) {
      if(event.target == overlay) {
        overlay.classList.remove('overlay--active');
        document.querySelector(target).classList.remove('modal--active');
        document.body.style.overflow = 'auto';
      }
    })
  });
})






