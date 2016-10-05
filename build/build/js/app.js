var hamburger = document.querySelector("#hamburger");
var main = document.querySelector('main');
var menuItem = document.querySelector('.nav-list');
var close = document.querySelector('#menu-close');
var drawer = document.querySelector('#drawer');
hamburger.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
});
main.addEventListener('click', function(e) {
	drawer.classList.remove('open');
});
close.addEventListener('click', function(e) {
	drawer.classList.remove('open');
});
menuItem.addEventListener('click', function(e) {
	drawer.classList.remove('open');
});
$(document).ready(function() {
		var ht = $('header').outerHeight()+'px';
    //$('main').css('margin-top', ht);
});
