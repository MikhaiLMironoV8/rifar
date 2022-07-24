$(document).ready(function() {
	$('.main_slider_wrapper').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
	});
	
	$('.prods_card_list_slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
	});
	
	$('#catalog_toggle_btn').click(function () {
		$(this).toggleClass('active');
		$('#catalog_menu_wrapper').toggleClass('active');
	});
	
	$(document).click(function (event) {
		let container = $('#catalog_toggle_btn');
		if(!container.is(event.target) && container.has(event.target).length === 0) {
			$('#catalog_toggle_btn').removeClass('active');
			$('#catalog_menu_wrapper').removeClass('active');
		}
	});
});