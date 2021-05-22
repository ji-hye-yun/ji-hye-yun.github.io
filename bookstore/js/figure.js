$(document).ready(function(){
   var swiper = new Swiper('.swiper-container', {
      effect : 'coverflow',
      centeredSlides : true,
      slidesPerView: 'auto',
      loop : true,
	    loopedSlides : 5,
      coverflowEffect : {
        rotate : 70,
        stretch : 0,
        depth : 100,
        modifier : 1,
        slideShadows : false,
        grabCursor:true
      },
      pagination : {
        el : '.swiper-pagination',
        clickable : true
      }
   });
});
