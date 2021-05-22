$(document).ready(function(){

   //전역변수의 돔 초기화 
   var $header = $('header');
   var $gnb = $('#gnb');
   var $gnb_li = $gnb.children('li');
   var $gnb_li_a = $gnb_li.children('a');
   var $gnb_li_div = $gnb_li.children('div');
   var $skip_a = $('#skip_navi > li > a');

   //전역변수에 자주 쓰이는 값 초기화
   var ht_arr = [];
   var ht_max = 0;
   var ht_header = $header.height();
   var bg_color = 'rgba(255,255,255,0.8)';
   var speed = 300;
   var duration = 500;

   
   //스킵메뉴 탭키로 포커스 이동
   $skip_a.on('focusin', function(){
      $(this).addClass('on');
   });

   $skip_a.on('focusout', function(){
      $(this).removeClass('on');
   })

   //모바일 메뉴 이벤트 연결
   $('.btn_call').on('click',function(e){
      e.preventDefault();

      var isOpen = $('#mo_panel').hasClass('on');
      (isOpen)? $('#mo_panel').removeClass('on') : $('#mo_panel').addClass('on')
   });

   //모바일 메뉴 열기
   var burger = $('.btn_call');

   burger.each(function(index){
      var $this = $(this);
    
      $this.on('click', function(e){
         e.preventDefault();
         $(this).toggleClass('active-' + (index+1));
      })
   });

   //모바일 메뉴의 서브메뉴 열기
   $('.mo_gnb > ul > li > a').on('click', function(e){
      e.preventDefault();

      if($(this).next('ul').hasClass('show')==false){
         $(this).find('i').removeClass('fa-angle-right').addClass('fa-angle-down');
         $(this).next('ul').stop().slideDown().addClass('show');
         
      }else if($(this).next('ul').hasClass('show')==true){
         $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-right');
         $(this).next('ul').stop().slideUp().removeClass('show');
      } 
   });

   //Back to Top
   $('.back_to_top').on('click', function(e){
      e.preventDefault();  
		$('html,body').animate({scrollTop:0}, duration); 
   });

   //브라우저 리사이즈 시 960을 넘어가면 무조건 모바일 패널 닫도록
   $(window).on('resize', function(){
      var wid = $(window).width();
      if(wid<960) $('#mo_panel').removeClass('on');
   })

   //로딩되자마자 서ㅂ메뉴 높이값 계산함수 호출
   getSubHeight();

   //gnb영역 호버시 메뉴 열고닫는 함수 호출 
   $gnb.on('mouseenter',openSub);
   $gnb.on('mouseleave',closeSub);

   //gnb포커스 이벤트 연결 (탭키 눌렀을 때)
   $gnb_li.on('focusin', function(){
      $(this).addClass('on');
      $(this).children('a').addClass('on');
      $(this).children('a.on').next('div').stop().slideDown(speed);
   });

   $gnb_li.each(function(){
      $(this).children('div').find('a').last().on('focusout',function(){
         $(this).parent('li').parent('ul').parent('div').parent('div').parent('li').find('a').removeClass('on');
         $gnb_li_div.stop().slideUp(speed);
      });
   })

   //1depth메뉴 활성화 유지
   $gnb_li.on('mouseenter', function(){
      $(this).children('a').addClass('on');
   });
   
   $gnb_li.on('mouseleave', function(){
      $(this).children('a').removeClass('on');
   })

   //자동으로 서브메뉴의 높이값을 계산(서브메뉴 배경.bgGnb)하는 함수 정의
   function getSubHeight(){
      $gnb_li.each(function(i){
         ht_arr.push( $(this).children('div').height() );
         ht_max = Math.max(ht_max, ht_arr[i]);
      })
      console.log(ht_max);
   }

   //서브메뉴 열리는 함수 정의
   function openSub(){
    $gnb_li.on('mouseenter',function(){
        $(this).addClass('on');
        $(this).children('a').addClass('on');
        $(this).children('a.on').next('div').stop().slideDown(speed);
    });

    $gnb_li.on('mouseleave',function(){
        $(this).removeClass('on');
        $(this).children('a').removeClass('on');
        $(this).children('a').next('div').stop().slideUp(speed);
    });
   }

   //서브메뉴 닫히는 함수 정의
   function closeSub(){
      $gnb_li_div.stop().slideUp(speed);
   }

});