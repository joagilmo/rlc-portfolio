$( document ).ready(function() {
	$('.image-link').magnificPopup({type:'image'});
	
	$('.accordion-header').click(function() {
		$('.accordion-content').css('display','none');
		$(this).next().css('display','block');
	

	});

	$("img.alt").imageAltAdder();

});

