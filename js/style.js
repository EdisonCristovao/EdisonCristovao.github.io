

$(document).ready(function() {
    $(".button-collapse").sideNav();
	$('#id-under').addClass('animated flash infinite');

    $(document).scroll(function(event) {
    	if ($(this).scrollTop()>=10) {
			$('h3').addClass('animated bounce');
		}
     });
});