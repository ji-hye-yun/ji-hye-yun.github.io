
var $bannerWrap = $('#banner');
var $banner = $bannerWrap.children('ul');
var len = $banner.children('li').length;
var timer;
var mleft=0;

timer = setInterval(move,20);

$banner.on('mouseenter',function(){
    clearInterval(timer);
});
$banner.on('mouseleave',function(){
    timer = setInterval(move,20);
});

function move(){
    if(mleft<=-240){
        mleft =0;
        $banner.find('li').first().appendTo($banner);
    }else {
        mleft-=2;
    }

    $banner.css({'margin-left':mleft});
}