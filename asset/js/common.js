$(document).ready(function(){
    var $skip_a = $('#skip_navi > li > a');
    var $work_li = $('.work_box li');
    var $portfolio_li = $('.portfolio_box li');

    $skip_a.on('focusin', function(){
        $(this).addClass('on');
    });

    $skip_a.on('focusout', function(){
        $(this).removeClass('on');
    });



    // main .work
    $work_li.on('click', function(){
        //var $thisindex = $(this).index();
        //console.log($thisindex)

        $work_li.removeClass('on');
        $(this).addClass('on');
    });

    // main .portfolio
    $portfolio_li.on('click', function(){

        $portfolio_li.removeClass('on');
        $(this).addClass('on');
    });



});