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