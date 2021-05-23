$(document).ready(function(){
    
    var $nav = $('header nav');
    var $nav_pos = $nav.offset().top;

    $('html, body').on('scroll', function(){
        var scroll = $(this).scrollTop();
        
        if ( scroll > $nav_pos ) {
            $nav.addClass('fix');
        }else{
            $nav.removeClass('fix');
        }
    });
    /*
    $('html, body').on('touchmove mousewheel',function(){
        var wheel = e.originalEvent.wheelDelta;
        
        if(wheel>0){
            
        }else{
            
        }	
    });
    */
});
