$(document).ready(function(){

   $('.book_title ul li').on('click', function(){
      var i = $(this).index();

      $('.book_title ul li').removeClass('active');
      $(this).addClass('active');

      $('.tab').removeClass('active');
      $('.tab').eq(i).addClass('active');
   })
})