var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



  // Адаптивность - mobiles first
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }

})

var mySwiperPartners = new Swiper('.swiper-container--partners', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Адаптивность - mobiles first
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }

});