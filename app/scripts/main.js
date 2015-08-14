'use strict';

(function() {

	//select the <li> elements at the top of every list
	var menus = Array.prototype.slice.call(document.querySelectorAll('.menu > li'));

	menus.forEach(function(menu) {
		//turn on 'active' class on hover enter
		menu.addEventListener('mouseenter', mouseenter, false);
		//turn off 'active' class on hover exit
		menu.addEventListener('mouseleave', mouseleave, false);
	});

	function mouseenter() {
		this.classList.add('active');
	}

	function mouseleave() {
		this.classList.remove('active');
	}

})();
