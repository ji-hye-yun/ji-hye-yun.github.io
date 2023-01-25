//스크롤 시 플로팅 상단 고정 - s
function stickyFn(type){
  if($(".sticky_wrap").length<1) return;
  var header_hei = $("#header").outerHeight(true);
  var win_st = $(window).scrollTop();
  var win_hei = $(window).height();

  if($("#header").hasClass("fix")) type = "header";

  $(".sticky_wrap").each(function(){
    var target = $(this).find(".sticky_el");
    if(type == "header"){
      var pos_fix = $(this).offset().top - header_hei;
    }else{
      var pos_fix = $(this).offset().top;
    }

    if(win_st > pos_fix){
      $(this).css("height",target.height());
      if(type == "header"){
        target.addClass("fix").css("top",header_hei);
      }else{
        target.addClass("fix");
      }
    }else{
      target.removeClass("fix");
      $(this).css("height","");
    }
  });
}
//스크롤 시 플로팅 상단 고정 - e

//레이어팝업 - s
function openPopFn(target){
  var target = $(target);
  target.addClass("active");
  var dim = "<div class='dim'></div>";
  $("body").append(dim).addClass("layer_active");
  if(document.querySelector('.caution-frame')) {
    $(".layerpop .inbox .popcont").css({
      "max-height":$(window).height()*0.5
    });
  } else {
    $(".layerpop .inbox .popcont").css({
      "max-height":$(window).height()*0.8
    });
  }
}
function closePopFn(target){
  var target = (target && $(target).length > 0) ? $(target) : $(".layerpop");
  target.removeClass("active");
  if($(".dim").length > 0) $(".dim").remove();
  $("body").removeClass("layer_active");
}
//레이어팝업 - e

function makeFixedHeight(){
  $(".fixed_bottom").each(function(){
    var hei = $(this).outerHeight(true);
    // $(this).css("height",hei);
    $(this).find(".fixed_el").addClass("fixed");
  });
}

function commFnTab(target,btn){
  var _this = $(btn);
  var _prt = _this.parent();
  var _target = $(target);

  if(!_this.hasClass("active")){
    _this.addClass("active");
    _prt.siblings("li").find("a").removeClass("active");
    _target.addClass("active").siblings(".cont").removeClass("active");
  }
}

function commFnTab1(target,btn){
  var _this = $(btn);
  var _prt = _this.parent();
  var _target = $(target);

  if(!_this.hasClass("active")){
    _this.addClass("active");
    var $tab_men = $(".tab_men li");
    for(var i=0; i<$tab_men.length; i++) {
      $tab_men.eq(i).find("img").attr("src", $tab_men.eq(i).find("img").attr("src").replace("_off","_on"));
    };
    _this.find("img").attr("src",  _this.find("img").attr("src").replace("_on","_off"));
    _prt.siblings("li").find("a").removeClass("active");
    _target.addClass("active").siblings(".cont").removeClass("active");
  }
}

function foldingFn(target,btn){
  var _this = $(btn);
  var _target = $(target);

  if(_target.is(":visible")){
    _this.removeClass("active");
    _target.stop().slideUp();
  }else{
    _this.addClass("active");
    _target.stop().slideDown();;
  }
}

//검색창 : 입력 값 삭제 - s
function show_hide_btn(_this){
  var deleteBtn = _this.find(".btn_sch_delete");
  if(_this.find(".inp_text").val()==""){
    deleteBtn.hide();
  }else{
    deleteBtn.show();
  }
}
$(document).on("click",".btn_sch_delete",function(){
  $(this).siblings(".inp_text").val("").focus();
  $(this).hide();
});
$(document).on("focus change keyup paste",".search_box .inp_text",function(){
  var schbox = $(this).parents(".search_box");
  show_hide_btn(schbox);
});
//검색창 : 입력 값 삭제 - e

//FAQ - s
$(document).on("click",".faq_title",function(e){
  e.preventDefault();
  var list = $(this).parent();
  var content = $(this).next(".faq_content");
  if(content.is(":visible")){
    $(this).removeClass("active");
    content.stop().slideUp(200);
  }else{
    list.siblings("li").find(".faq_title").removeClass("active");
    list.siblings("li").find(".faq_content").stop().slideUp(200);
    $(this).addClass("active");
    content.stop().slideDown(200);
  }
});
//FAQ - e

$(document).ready(function(){
  //검색창 : 입력 값 삭제 - s
  $(".search_box").each(function(){
    if(!$(this).is(".profile_name")){
      show_hide_btn($(this));
    }
  });
  //검색창 : 입력 값 삭제 - e
  //makeFixedHeight();
  //modulePercentFn();

  //마이페이지 토글 
  $('.btn_mypage').on('mouseenter', function(){
    if( !$('.mypage_hidden').hasClass('open') ){
      $('.mypage_hidden').addClass('open').slideDown(300);
      $('.mypage_open').addClass('open');
    } 
  });
  $('.mypage_hidden').on('mouseleave', function(){
    if( $('.mypage_hidden').hasClass('open') ){
      $('.mypage_hidden').removeClass('open').slideUp(200);
      $('.mypage_open').removeClass('open');
    } 
  }); 
  //마이페이지 토글 - e

  //상품상세 케밥버튼 토글 수정
  $('.kb_btn').on('click', function(){
    if( !$(this).hasClass('active') ){
      $(this).siblings('.op').css('display', 'none');
    }else{
      $(this).siblings('.op').css('display', 'block');
    }
  });

  //쿠폰함
  var coulist = $('.cou_list li');
  coulist.on('click',function(e){
    $(this).toggleClass('chked')
    if($(e.target).attr('type') == 'checkbox'){ return true; }
    var couchk = $(this).find('input[type=checkbox]');
    var isChecked = couchk.prop('checked');
    couchk.prop('checked', !isChecked)
  });

  //장바구니 모두 선택
  var cartchkprd = $(".cart_prd_list li input[name=chk]");
  $("#chkAll").click(function() {
    if($("#chkAll").is(":checked")) cartchkprd.prop("checked", true);
    else cartchkprd.prop("checked", false);
  });
  cartchkprd.click(function() {
    var total = cartchkprd.length;
    var checked = $(".cart_prd_list input[name=chk]:checked").length;
    
    if(total != checked) $("#chkAll").prop("checked", false);
    else $("#chkAll").prop("checked", true); 
  });

  //장바구니 주문정보 히든/오픈   
  $('#order_box .box').on('click', function(){
    $(this).next('.box_inner').stop().slideToggle(300);
    $(this).toggleClass('on');
  });

  //장바구니 주문하기 결제수단 선택   
  $('#order_box .rdobox:first-child').addClass('chked');
  $("#order_box input[name='radio_pay']").change(function(){
    if( $('#order_box .rdobox input[name=radio_pay]:checked').val() == '신용카드' ){
      $('#order_box .rdobox:first-child').addClass('chked');
      $('#order_box .rdobox:last-child').removeClass('chked');
    }else if( $('#order_box .rdobox input[name=radio_pay]:checked').val() == '무통장입금' ){
      $('#order_box .rdobox:first-child').removeClass('chked');
      $('#order_box .rdobox:last-child').addClass('chked');
    }
  })

  //상품상세 좋아요/공유하기 버튼 클릭시 액션
  $(document).on("click",".btn_like, .btn_share",function(){
    toggleClassFn($(this),"active");
  });

  //SNS회원 가입자 대상 이용약관동의 모두 선택
  var agree_chk = $(".chk_wrap li input[name=agree_chk_list]");
  var agreeallbox = $(".join_wrap.v2 .chk_wrap li.chkbox.agree_all")
  $("#agree_chkAll").click(function() {
    if($("#agree_chkAll").is(":checked")) {
      agree_chk.prop("checked", true);
      agreeallbox.addClass('chked');
    }else{
      agree_chk.prop("checked", false);
      agreeallbox.removeClass('chked');
    } 
  });
  agree_chk.click(function() {
    var total = agree_chk.length;
    var checked = $(".chk_wrap input[name=agree_chk_list]:checked").length;
    if(total != checked){
      $("#agree_chkAll").prop("checked", false);
      agreeallbox.removeClass('chked');
    }else{
      $("#agree_chkAll").prop("checked", true); 
      agreeallbox.addClass('chked');
    } 
  });

  //상품상세 v2 커리큘럼 모두 보기 버튼
  $(document).on('click', '.curr_openbtn', function(){
    toggleClassFn($(this).parent().prev(),"open");
    if( !$(this).parent().prev().hasClass('open') ){
      $(this).text('모두 보기');
    }else{
      $(this).text('닫기');
    }
  });

  //2023 출석체크 리뉴얼 화면 슬라이드 배너 설정
  if($(".event_wrap .chk-slider .swiper-slide").length > 1){
    let chkSlider = new Swiper('.chk-slider', {
      autoplay: true,
      speed:1000,
      delay:4000,
      slidesPerView: 1,
      pagination: {
        el: ".chk-slider .swiper-pagination",
        type: "fraction",
      },
    });
  }else{
    $(".chk-slider .swiper-pagination").hide();
  }
  if($(".event_wrap .chk-slider .swiper-slide").length < 0){
    $('.event_wrap .evt41 .bottom').css('display', 'none');
  }else{
    $('.event_wrap .evt41 .bottom').css('display', 'block');
  }
});

//상품상세 공유하기 버튼 클릭시 클래스 제거
function closePopShare(target){
  var target = (target && $(target).length > 0) ? $(target) : $(".layerpop");
  target.removeClass("active");
  if($(".dim").length > 0) $(".dim").remove();
  $("body").removeClass("layer_active");
  $('.m220728 .product_wrap .btn_share').removeClass('active');
}

//쿠폰함 레이어 바깥 클릭시 닫기
$(document).mouseup(function(e){
  var Layer = $(".layerpop");
  var shareBtn  = $('.m220728 .product_wrap .prd_detail_wrap .info01 .btn_share');
  if(Layer.has(e.target).length === 0){
    Layer.removeClass("active");
    $('body').removeClass("layer_active");
    $(".dim").remove();
    shareBtn.removeClass('active')
  }
});

//toggle class
function toggleClassFn(target,cls){
  var target = $(target);
  var cls = String(cls);
  if(target.hasClass(cls)){
    target.removeClass(cls)
  }else{
    target.addClass(cls)
  }
}
$(document).on("click",".btn_push",function(){
  toggleClassFn($(this),"on");
});

$(window).on("resize",function(){
  if(document.querySelector('.caution-frame')) {
    $(".layerpop .inbox .popcont").css({
      "max-height":$(window).height()*0.5
    });
  } else {
    $(".layerpop .inbox .popcont").css({
      "max-height":$(window).height()*0.8
    });
  }
});

var fadeMotion;
function motionInitFn(type,btn){
	if($(".motion_box").length > 0){
		$(".motion_box").remove();
		clearTimeout(fadeMotion);
	}

  var posX = $(btn).offset().left + $(btn).width()/2;
  var posY = $(btn).offset().top;

	var html = '';
	html += '<div class="motion_box" style="top:'+posY+'px;left:'+posX+'px;">';
	switch(type){
		case "jjim":
			html += '	<img src="../image/motion_heart.gif" alt="" />';
		break;
		case "like":
			html += '	<img src="../image/motion_star.gif" alt="" />';
		break;
	}
	html += '</div>';


	$("#wrap").append(html).promise().done(function(){
		fadeMotion = setTimeout(function(){
			//$(".motion_box").remove();
		},1100)
	});
}

//상품상세 수량체크 버튼
function pdt_q_count(type)  {
  const resultElement = document.getElementById('pdt_q_num');
  let number = resultElement.value;

  if( number<=2 ) {
    $('.pdt_deq').addClass('disabled');
    $('.pdt_inq').removeClass('disabled');
  }else if( number>=9998 ){
    $('.pdt_inq').addClass('disabled');
    $('.pdt_deq').removeClass('disabled');
  }
  if(type === 'plus' && number<=9998) {
    number = parseInt(number) + 1;
    $('.pdt_deq').removeClass('disabled');
    $('.pdt_inq').removeClass('disabled');
  }else if(type === 'minus' && number>=2)  {
    number = parseInt(number) - 1;
    $('.pdt_inq').removeClass('disabled');
  }
  resultElement.value = number;
}
//상품상세 수량체크 버튼 - e
