/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

window.addEventListener('scroll', function(){
	let animacion = this.document.getElementById('AniSection-L');
	let posicionObjt = animacion.getBoundingClientRect().top;
	let tamañoDePantalla = window.innerHeight;

	if(posicionObjt < tamañoDePantalla){
		animacion.style.animation = 'slidein-L 2s ease-out'
	}
})

window.addEventListener('scroll', function(){
	let animacion = this.document.getElementById('AniSection-R');
	let posicionObjt1 = animacion.getBoundingClientRect().top;
	let tamañoDePantalla = window.innerHeight;

	if(posicionObjt1 < tamañoDePantalla){
		animacion.style.animation = 'slidein-R 2s ease-out'
	}
})

window.addEventListener('scroll', function(){
	let animacion = this.document.getElementById('AniSection-R2');
	let posicionObjt1 = animacion.getBoundingClientRect().top;
	let tamañoDePantalla = window.innerHeight;

	if(posicionObjt1 < tamañoDePantalla){
		animacion.style.animation = 'slidein-R 2s ease-out'
	}
})

window.addEventListener('scroll', function(){
	let animacion = this.document.getElementById('AniSection-LM');
	let posicionObjt1 = animacion.getBoundingClientRect().top;
	let tamañoDePantalla = window.innerHeight;

	if(posicionObjt1 < tamañoDePantalla){
		animacion.style.animation = 'slidein-L 1.2s ease-out'
	}
})

window.addEventListener('scroll', function(){
	let animacion = this.document.getElementById('AniSection-RV');
	let posicionObjt1 = animacion.getBoundingClientRect().top;
	let tamañoDePantalla = window.innerHeight;

	if(posicionObjt1 < tamañoDePantalla){
		animacion.style.animation = 'slidein-R 1.2s ease-out'
	}
})

window.addEventListener('scroll', function(){
	let animacion = this.document.getElementById('AniSection-TV');
	let posicionObjt1 = animacion.getBoundingClientRect().top;
	let tamañoDePantalla = window.innerHeight;

	if(posicionObjt1 < tamañoDePantalla){
		animacion.style.animation = 'slidein-T 1.2s ease-out'
	}
})

document.addEventListener('DOMContentLoaded', () => {
	const elementosCarousel = document.querySelectorAll('.carousel');
	M.Carousel.init(elementosCarousel, {
		duration: 150,
		dist: -80,
		shift: 5,
		padding: 5,
		numVisible: 3,
		indicators: true,
	});
});

document.querySelectorAll(".modal-container img").forEach(el=>{
	el.addEventListener("click",function(ev){
		ev.stopPropagation();
		this.parentNode.classList.add("active");
	})
})

document.querySelectorAll(".modal-container").forEach(el=>{
	el.addEventListener("click",function(ev){
		this.classList.remove("active");
	})
})