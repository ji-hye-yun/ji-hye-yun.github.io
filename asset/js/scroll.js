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
    /*
    $nav_a.on('click', function(){
        var scrollPos = $($(this).attr("data-target")).offset().top;

        console.log(scrollPos)
    
        $('html, body').animate({
            scrollTop: scrollPos
        }, 900);
        return false;
    });
*/

});
