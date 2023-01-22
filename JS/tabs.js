const tabsBtn = document.querySelectorAll ('.content-accordion__link');
const tabsContent = document.querySelectorAll ('.catalog__artist-card');

tabsBtn.forEach(function (el) {
  el.addEventListener ('click', function(event){
    const path = event.currentTarget.dataset.path;


    tabsContent.forEach (function (el) {
      el.classList.remove('artist--active');
    })

    document.querySelector (`[data-target ="${path}"]`).classList.add('artist--active');
  })
})
