'use strict';

(function() {

	//select the <li> elements at the top of every list
	var menus = Array.prototype.slice.call(document.querySelectorAll('.menu > li'));

	menus.forEach(function(menu) {
		//turn on 'active' class on hover enter
		menu.addEventListener('mouseenter', function () {
			this.classList.add('active');
		}, false);
		//turn off 'active' class on hover exit
		menu.addEventListener('mouseleave', function () {
			this.classList.remove('active');
		}, false);
	});

})();
