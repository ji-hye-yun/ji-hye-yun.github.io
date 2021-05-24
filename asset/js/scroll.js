$(document).ready(function(){
    
    var $nav = $('header nav');
    var $nav_a = $('header nav li a');
    var $sec = $('.section');
    var $nav_pos = $nav.offset().top;

    $('html, body').on('scroll', function(){
        var scroll = $(this).scrollTop();
        
        if ( scroll > $nav_pos ) {
            $nav.addClass('fix');
        }else{
            $nav.removeClass('fix');
        }
    });
    
    /* Back To Top */
	$('.back').on('click', function(e){  
		e.preventDefault();  
		$('html,body').animate({scrollTop:0}, 1500);
		return false;  
	}); 

});
