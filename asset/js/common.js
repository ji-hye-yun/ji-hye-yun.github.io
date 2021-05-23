$(document).ready(function(){
    var $skip_a = $('#skip_navi > li > a');

    $skip_a.on('focusin', function(){
        $(this).addClass('on');
    });

    $skip_a.on('focusout', function(){
        $(this).removeClass('on');
    });



    // main .work
    $('.work_box li').each(function(i){
        var $thisbox = $('.work_box li.on');

        $('.work_box li').removeClass('on');
        $('.work_box li').css('width', '25%');

        $(this).click(function(e){
            e.preventDefault();
            if( !$(this).hasClass('on') ){
                $('.work_box li').removeClass('on');
                $('.work_box li').not(this).css('width', '16.6%');
                $('.work_box li').not(this).find('a').hide();
                $(this).addClass('on');
                $(this).css('width', '50%');
                $(this).find('a').css('display', 'inline-block');
            }else{
                $(this).removeClass('on');
                $('.work_box li').not(this).find('a').hide();
            }
            
        })
    });
});