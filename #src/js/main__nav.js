var navMain = document.querySelector('.main-nav');
var navBtn = document.querySelector('.main-nav__btn--menu');
var fixZindex1 = document.querySelector('.header-offer__container1');
var fixZindex2 = document.querySelector('.header-offer__container2');

// navMain.classList.remove('main-nav--nojs');

navBtn.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
		// fixZindex1.classList.remove('header-offer__container--close');
		// fixZindex2.classList.remove('header-offer__container--close');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
		// fixZindex1.classList.add('header-offer__container--close');
		// fixZindex2.classList.add('header-offer__container--close');
	}
});

// ФИКС ЕБУЧИЙ БАГ, хз как сделалать, спасибо JS