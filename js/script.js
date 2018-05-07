(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 250) {
				$('.main-header').addClass('fixed-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	//Revolution Slider Style One
	if($('.main-slider .tp-banner').length){

		jQuery('.main-slider .tp-banner').show().revolution({
		  dottedOverlay:'yes',
		  delay:10000,
		  startwidth:1200,
		  startheight:700,
		  hideThumbs:600,

		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,

		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview3",

		  touchenabled:"on",
		  onHoverStop:"off",

		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,

		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

		  keyboardNavigation:"off",

		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:40,

		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:20,
		  soloArrowLeftVOffset:20,

		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:20,
		  soloArrowRightVOffset:20,

		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",

		  spinner:"spinner4",

		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,

		  shuffle:"off",

		  autoHeight:"off",
		  forceFullWidth:"on",

		  hideThumbsOnMobile:"on",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"on",
		  hideThumbsUnderResolution:0,

		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"",
		  fullScreenOffsetContainer: ""
	  });

	}
	
	
	//Mixitup Gallery
	if($('.mixitup-gallery').length){
		$('.mixitup-gallery').mixItUp({});
	}
	
	
	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();

	





	//Accordion Box
	if ($('.accordion-box').length) {
	        $('.accordion-box .acc-btn').on('click', function() {
	            if ($(this).hasClass('active') !== true) {
	                $('.accordion-box .acc-btn').removeClass('active');
	            }

	            if ($(this).next('.acc-content').is(':visible')) {
	                $(this).removeClass('active');
	                $(this).next('.acc-content').slideUp(500);
	            } else {
	                $(this).addClass('active');
	                $('.accordion-box .acc-content').slideUp(500);
	                $(this).next('.acc-content').slideDown(500);
	            }
	        });
	    }
	
	
	//Sponsors Slider
	if ($('.sponsors-slider').length) {
		$('.sponsors-slider').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 400,
			autoplay: 4000,
			navText: [],
			responsive:{
				300:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	

	//Four Column Carousel Slider
	if ($('.four-column-carousel').length) {
		$('.four-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1070:{
					items:4
				}
			}
		});    		
	}

	
	//Three Column Carousel Slider
	if ($('.three-column-carousel').length) {
		$('.three-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}


	
	//Two Column Carousel Slider
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				}
			}
		});    		
	}
	
	
	//Single Item Slider
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	

		//Jquery Tabs Box
	if($('.tabs-box').length){
		//Tabs
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			
			e.preventDefault();
			var target = $($(this).attr('href'));
			
			target.parents('.tabs-box').children('.tab-buttons').children('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.tabs-box').children('.tab-content').children('.tab').fadeOut(0);
			target.parents('.tabs-box').children('.tab-content').children('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		});
		
	}

	
		//Tabbed Floor Plans Function
	if($('.tabbed-floor-plans .floor-btn').length){
		
		//Floor Details Hide Show
		$('.tabbed-floor-plans .floor-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('.tabbed-floor-plans .floor-btn').removeClass('active');
			$(this).addClass('active');
			$('.tabbed-floor-plans .floor-details').removeClass('collapsed');
			$('.tabbed-floor-plans .floor-details ').fadeOut(0);
			$(target).fadeIn(300);
		});
		
	}

	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	
	// videoFancybox
	function videoFancybox () {
	 if ($('.video-fancybox').length) {
	  $('.video-fancybox').on('click', function () {
	   $(this).fancybox({
	    'padding' : 0,
	    'autoScale' : false, 
	    'transitionIn' : 'none', 
	    'transitionOut' : 'none', 
	    'title' : this.title, 
	    'width' : 640, 
	    'height' : 385, 
	    'href' : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'), 
	    'type' : 'swf', 
	    'swf' : { 'wmode' : 'transparent', 'allowfullscreen' : 'true' }
	   });
	   return false;
	  })
	 };
	}



	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	//Gallery Popup Hide / Show
	if($('.has-gallery-popup').length){
		
		//Show Gallery Popup
		$('.has-gallery-popup').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('body').addClass('popup-visible');
			$(target).addClass('now-visible');
		});
		
		//Show Gallery Popup
		$('.gallery-box .btn-close,.gallery-box .bg-fade-layer').on('click', function() {
			$('.gallery-box').removeClass('now-visible');
			$('body').removeClass('popup-visible');
		});
		
	}

	//Gallery Popup Slider / Vertical Gallery Slider
	if($('.vertical-slider').length) {
		var slider = new MasterSlider();
		slider.setup('masterslider' , {
			width:850,
			height:470,
			space:10,
			view:'basic',
			dir:'v'
		});
		slider.control('arrows');	
		slider.control('scrollbar' , {dir:'v'});	
		slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
		slider.control('thumblist' , {autohide:false ,dir:'v'});
	}
	
	
	
	//Appointment Calendar
	if($('#appoinment_calendar').length) {
		$('#appoinment_calendar').monthly();
	}


	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});

	

})(window.jQuery);