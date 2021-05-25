$(document).ready(function(){
    
    var $nav = $('header nav');
    var $nav_a = $('header nav li a');
    var $sec = $('.section');
    var $nav_pos = $nav.offset().top;
    var float_back = parseInt( $('.moback').css('top') ) + 350;

    $('html, body').on('scroll', function(){
        var scroll = $(this).scrollTop();
    
        var floating = scroll - float_back + 'px';
        
        if ( scroll > $nav_pos ) {
            $nav.addClass('fix');
        }else{
            $nav.removeClass('fix');
        }

        $('.moback').stop().animate({
            'top' : floating
            }, {
                'duration' : 500
        });
    });


    
    /* Back To Top */
	$('.back').on('click', function(e){  
		e.preventDefault();  
		$('html,body').animate({scrollTop:0}, 1500);
		return false;  
	}); 

    $('.moback').on('click', function(e){
        e.preventDefault();  
		$('html,body').animate({scrollTop:0}, 1000);
		return false; 
    });

});
