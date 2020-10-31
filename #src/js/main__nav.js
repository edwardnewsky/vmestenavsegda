var navMain = document.querySelector('.main-nav');
var navBtn = document.querySelector('.main-nav__btn--menu');

var navLink1 = document.querySelector('.js-1');
var navLink2 = document.querySelector('.js-2');
var navLink3 = document.querySelector('.js-3');
var navLink4 = document.querySelector('.js-4');
var navLink5 = document.querySelector('.js-5');
var navLink6 = document.querySelector('.js-6');
var navLink7 = document.querySelector('.js-7');

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

navLink1.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--opened')) {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
});
navLink2.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--opened')) {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
});
navLink3.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--opened')) {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
});
navLink4.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--opened')) {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
});
navLink5.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--opened')) {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
});
navLink6.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--opened')) {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
});
navLink7.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--opened')) {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
});