$(document).ready(function(){

   console.log('test3');

   var winH, pos1,pos2,pos3,pos4,pos5,pos6,pos7;
   var $visual = $('figure');
   var $btns = $('#vertical_navi > li');
   var $navi = $('.my_scroll');
   var base_line = -400;

   matchHeight();

   $(window).on('resize',function(){
      matchHeight();
   });   

   setTimeout(initPos, 1000);

   function matchHeight(){
      winH = $(window).height();
   } 

   function initPos(){
      pos1 = $navi.eq(0).offset().top+base_line;
      pos2 = $navi.eq(1).offset().top+base_line;
      pos3 = $navi.eq(2).offset().top+base_line;
      pos4 = $navi.eq(3).offset().top+base_line;
      pos5 = $navi.eq(4).offset().top+base_line;  
   }

   $(window).on('scroll',function(){
      var scroll = $(this).scrollTop();
      $btns.removeClass('on');

      if(scroll>=pos1 && scroll<pos2){
         $btns.eq(0).addClass('on');
         $navi.eq(0).addClass('on');
      }
      if(scroll>=pos2 && scroll<pos3){
         $btns.eq(1).addClass('on');
         $navi.eq(1).addClass('on');
      }
      if(scroll>=pos3 && scroll<pos4){
         $btns.eq(2).addClass('on');
         $navi.eq(2).addClass('on');
      }
      if(scroll>=pos4 && scroll<pos5){
         $btns.eq(3).addClass('on');
         $navi.eq(3).addClass('on');
      }
      if(scroll>=pos5){
         $btns.eq(4).addClass('on');
         $navi.eq(4).addClass('on');
         $('.deco2').css({width : 400+scroll});
      }
   });  

   $btns.on('click',function(e){
      e.preventDefault();
      
      var i = $(this).index();
      var targetPos = $('.my_scroll').eq(i).offset().top;
      $('html,body').stop().animate({'scrollTop':targetPos},1000);
   })

});