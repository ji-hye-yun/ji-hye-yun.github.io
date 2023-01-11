
/** author: Hyeji Yun **/


/* 사이드내비게이션 햄버거 버튼 */
$('.menu').on('click', function(){
  $('.sidenav').toggleClass('on');
  if($('.sidenav').hasClass('on')){
    $('.sidenav').animate({'right' : '0'},100);
  }else{
    $('.sidenav').animate({'right':'-330px'},100);
  }
});
$('.close').on('click', function(){
  $('.sidenav').removeClass('on');
  $('.sidenav').animate({'right':'-330px'},100);
});


/* 즐겨찾기 */
const markSettings = {
  scrollbar : {
		el : '.swiper-scrollbar',
		draggable: true
	},
  slidesPerView: 2,
  spaceBetween: 10
}
const fractionSwiper = new Swiper('.mark_swiper', markSettings);


/* 게시판 소팅 메뉴 */
$('.con-noti').each(function(i){
  var sortTab = $(this);
  var tabIndex = $(this).find('.active').attr('id').match(/\d+$/);

  $(this).find('.tab_con').find('#tab_con_' + tabIndex[0]).show();
  $(this).find('.sort ul li a').click(function(){
    var tabIndex = $(this).attr('id').match(/\d+$/);

    sortTab.find('.sort ul li a').removeClass('active');
    $(this).addClass('active');
    sortTab.find('.tab_con ul').hide();
    sortTab.find('.tab_con').find('#tab_con_' + tabIndex[0]).show();

    return false;
  });
});


/* 플로팅 상담 버튼 */
var floatBtn = parseInt($('.floatBtn').css('top'))
$(window).scroll(function(){
    var currentTop = $(window).scrollTop();
    var bannerTop = currentTop + floatBtn + 'px';

    $('.floatBtn').stop().animate({
      'top' : bannerTop
    }, 400);
}).scroll();
