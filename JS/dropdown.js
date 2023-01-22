

const menuBtn = document.querySelectorAll('.bottom-menu__btn');
const drops = document.querySelectorAll('.dropdown');
const links = document.querySelectorAll('.dropdown__link');

menuBtn.forEach(function (el) {
  el.addEventListener('click', function (event) {

    const currentEl = event.currentTarget;
    const drop = currentEl.parentElement.querySelector('.dropdown');
    console.log(drop )

    drop.classList.toggle('dropdown--active');
    drops.forEach(function (el) {
      if (el !== drop) {
        el.classList.remove('dropdown--active')
      };

      new SimpleBar(el.querySelector('.dropdown__content'), {
        scrollbarMaxSize: 5,
      });
    });

    links.forEach(function (el) {
      el.addEventListener('click', function (event) {
        const currentEl = event.currentTarget;
        const drop = currentEl.closest('.dropdown');
        drop.classList.remove('dropdown--active');
      })
    })
  });
});

document.addEventListener('click', function (event) {
  if (!event.target.closest('.bottom-menu__item')) {
    drops.forEach(function (el) {
      el.classList.remove('dropdown--active')
    })
  }
});







