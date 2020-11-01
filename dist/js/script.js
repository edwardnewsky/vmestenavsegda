var navMain = document.querySelector('.main-nav');
var navBtn = document.querySelector('.main-nav__btn--menu');
var navLinkList = document.querySelectorAll('.site-list__link');

// navMain.classList.remove('main-nav--nojs');

navBtn.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');

	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');

	}
});

const onNavLinkClick = function() {
	if (navMain.classList.contains('main-nav--opened')) {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
};

navLinkList.forEach(function(navLink) {
	navLink.addEventListener('click', onNavLinkClick);
});

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
			document.querySelector('body').classList.add('webp');
		}
});
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
// Плавный скрол до элемента
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
var months    = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
var now       = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
var output = document.getElementById('output');

 if(output.textContent !== undefined) {
    output.textContent = thisMonth;
  }
  else {
    output.innerText = thisMonth;
  };

  
class MediaLazyLoad {
  constructor() {
    this.observer = null;

    this.observe = this.observe.bind(this);

    document.addEventListener("DOMContentLoaded", () =>
      document.querySelectorAll("[data-lazy]").forEach(this.observe)
    );
  }

  observe(node) {
    const observer = new IntersectionObserver(entries =>
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting && target.isEqualNode(node)) {
          const { loaderClass, src, srcWebm, srcMp4 } = target.dataset;

          if (loaderClass) {
            node.classList.add(loaderClass);
          }

          if (src) {
            const onLoadHandler = ev => {
              ev.target.classList.remove(loaderClass);

              ev.target.removeEventListener("load", onLoadHandler);
            };

            target.addEventListener("load", onLoadHandler);

            target.src = target.dataset.src;
          }
          if (srcWebm) {
            this.appendSource(target, "webm", srcWebm, loaderClass);
          }
          if (srcMp4) {
            this.appendSource(target, "mp4", srcMp4, loaderClass);
          }

          observer.unobserve(target);
        }
      })
    );

    observer.observe(node);
  }

  handleImageLoader(node, className) {
    if (className) {
      const onLoadHandler = () => {
        node.classList.remove(className);

        node.removeEventListener("load", onLoadHandler);
      };
    }
  }

  appendSource(node, type, src, loaderClass) {
    const source = document.createElement("source");

    source.type = `video/${type}`;
    source.src = src;

    if (loaderClass) {
      const onLoad = node.addEventListener("loadeddata", ev => {
        if (ev.target.readyState >= 3) {
          if (node) {
            node.classList.remove(loaderClass);
          }

          source.removeEventListener("loadeddata", onLoad);
        }
      });
    }

    node.appendChild(source);
  }
}

new MediaLazyLoad();
