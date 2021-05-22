$(document).ready(function(){

   var $box_bg = $('.body_txt > .img_box_bg');
   var $box_border = $('.body_txt > .img_box');
   var $box_p = $('.body_txt > .quote');
   var $com_info = $('.company_info')
   var $brand_intro = $('#brand_intro');
   var $join_dt = $('.join_check_wrap dl dt');
   var $commu_info = $('#commu_info');

   $box_border.addClass('on');
   
   $(window).on('scroll', function(){
      var scroll = $(this).scrollTop();
      
      if(scroll>=1){
         $box_bg.addClass('on');
         $box_border.removeClass('on');
         $box_p.addClass('on');
         $com_info.addClass('on');
         $brand_intro.addClass('on');
         $commu_info.addClass('on');

      }else if(scroll==0){
         $box_bg.removeClass('on');
         $box_border.addClass('on');
         $box_p.removeClass('on');
         $com_info.removeClass('on');
         $brand_intro.removeClass('on');
         $commu_info.removeClass('on');
      }
      console.log(scroll);
   });

   $join_dt.on('click', function(){
      $(this).toggleClass('open').next().slideToggle()
   });
});