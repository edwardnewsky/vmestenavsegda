var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 1,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Навигация
  autoplay: {
    delay: 3000,
  },

  // Адаптивность - mobiles first
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    }
  }

})