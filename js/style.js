

$(document).ready(function($) {
    $(".button-collapse").sideNav();

	$('#id-under').addClass('animated flash infinite');

	$('.inicio-anc').click(function(event) {
		$('.button-collapse').sideNav('hide');
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});

	$('.sobre-anc').click(function(event) {
		$('.button-collapse').sideNav('hide');
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});

	$('.objetivo-anc').click(function(event) {
		$('.button-collapse').sideNav('hide');
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});

	$('.escolaridade-anc').click(function(event) {
		$('.button-collapse').sideNav('hide');
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});

	$('.profiss-anc').click(function(event) {
		$('.button-collapse').sideNav('hide');
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});

	$('.cursos-anc').click(function(event) {
		$('.button-collapse').sideNav('hide');
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});

	$(".progres").each(function() {
        var finalWidth = parseInt($(this).attr("aria-valuenow"));
        var finalWidth = 70;
        $(this).css("width", "0px").animate({width: finalWidth+"%"}, 1500);
    });


    $(document).scroll(function(event) {
    	if ($(this).scrollTop()>=10) {
			$('h3').addClass('animated bounce');
		}
     });
});