var navMain = document.querySelector('.main-nav');
var navBtn = document.querySelector('.main-nav__btn--menu');
var fixZindex1 = document.querySelector('.header-offer__container1');
var fixZindex2 = document.querySelector('.header-offer__container2');
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
// $(window).scroll(function() {
//   var hT = $('#portfolio').offset().top,
//     hH = $('#portfolio').outerHeight(),
//     wH = $(window).height(),
//     wS = $(this).scrollTop();
//   console.log((hT - wH), wS);
//   if (wS > (hT + hH - wH)) {
//     document.getElementById('page-header').style.background = "blue";
//   }
// });
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
// 