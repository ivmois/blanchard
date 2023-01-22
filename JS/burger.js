
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const navClose = document.querySelector('.header__burger-close');

burger.addEventListener('click', function () {
  nav.classList.add('header__menu')
})

navClose.addEventListener('click', function () {
  nav.classList.remove('header__menu')
})


document.querySelectorAll('.top-menu__link').forEach(function (clickLink) {
  clickLink.addEventListener('click', function () {
    nav.classList.remove('header__menu')
  })

document.querySelector('.header__account-link').addEventListener('click', function () {
    nav.classList.remove('header__menu')
  })

})




