$(function(){

  const gnbli = document.getElementsByClassName('gnbli');

  for(let i=0; i<gnbli.length; i++){
    gnbli[i].addEventListener("mouseover", function(){
        this.classList.add('over');
    })
  }
  for(let i=0;i<gnbli.length;i++){
    gnbli[i].addEventListener("mouseout", function(){
      this.classList.remove('over');
    })
  }

  /* 메인 슬라이더 */ 
  let mainSwiper = new Swiper('.main_slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main_sl_nav .swiper-button-next",
      prevEl: ".main_sl_nav .swiper-button-prev",
    },
    observer: true,
    observeParents: true,
  });

  /* 이미지 배너 */ 
  let sec2Swiper = new Swiper('.sec_2_slider', {
    slidesPerView: 1,
    centeredSlides: true,  
    loop:true,
    navigation: {
      nextEl: ".sec_2_sl_nav .swiper-button-next",
      prevEl: ".sec_2_sl_nav .swiper-button-prev",
    },
    observer: true,
    observeParents: true,
  });

  /* 오늘 뭐 볼까 */
  let sec3Swiper = new Swiper('.sec_3_slider', {
    slidesPerView: 1,
    centeredSlides: true,  
    loop:true,
    navigation: {
      nextEl: ".sec_3_sl_nav .swiper-button-next",
      prevEl: ".sec_3_sl_nav .swiper-button-prev",
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1,
      }
    }
  });

  /* 텍스트 배너 */
  let sec4Swiper = new Swiper('.sec_4_slider', {
    direction: "vertical",
    slidesPerView: 1,
    centeredSlides: true,  
    loop:true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sec_4_sl_nav .swiper-button-next",
      prevEl: ".sec_4_sl_nav .swiper-button-prev",
    },
    observer: true,
    observeParents: true,
  });

  /* 포스터, 공지사항 배너 */
  let sec5Swiper = new Swiper('.sec_5_slider', {
    slidesPerView: 4.5,
    initialSlide: 2,
    speed: 1000,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    mousewheel: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3.5,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 12
      },
      480: {
          slidesPerView: 1.2,
          slidesPerGroup: 1,
          spaceBetween: 10
      }
    },
  });

  $('.mognb').on('click', function(){
    if( !$('.mognb_open').hasClass('open') ){
      $('.mognb_open').addClass('open');
    }
  });

  $('.mognbli').on('click', function(){
    if( !$(this).hasClass('open') ){
      $('.mognbli').removeClass('open');
      $(this).addClass('open');
    }
  });

  $('.close').on('click', function(){
    $(this).parent().removeClass('open');
  });







});

