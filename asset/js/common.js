window.onload = function(){

    var $info = document.getElementById('info');
    var $info_li = document.querySelectorAll('.info_navi > li');

    $info_li.forEach(function(item,index){
        item.onclick = function(){
            $info.className = 'info'+(index+1);
            $info_li.forEach(function(item,index){
                $info_li[index].className = '';
            });
            this.className = 'on';
        }
    });
}


$(document).ready(function(){
    var $skip_a = $('#skip_navi > li > a');
    var $work_li = $('.work_box li');
    var $portfolio_li = $('.portfolio_box li');
    var $resume = $('.resume_open');
    var $resume_close = $('.resume_close');

    $skip_a.on('focusin', function(){
        $(this).addClass('on');
    });

    $skip_a.on('focusout', function(){
        $(this).removeClass('on');
    });

    // main .about 
    $resume.on('click', function(e){
        e.preventDefault();
        $('.dim').css('display', 'block');
        $('#resume').css('display', 'block');
        $('html,body').animate({scrollTop:0}, 1000);
    });
    $resume_close.on('click', function(e){
        e.preventDefault();
        $('.dim').css('display', 'none');
        $('#resume').css('display', 'none');
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


    // main .contact
    emailjs.init("user_ZGnOwZr9advSSnnVn6gBe");
    $('input[name=submit]').click(function(){    
        
        alert('성공적으로 메일을 전송하였습니다.')
        $('input[name=from_name], input[name=phone], input[name=email], textarea[name=message]').val('');

        var templateParams = {	
            name: $('input[name=from_name]').val(),
            phone: $('input[name=phone]').val(), 
            email : $('input[name=email]').val(),
            message : $('textarea[name=message]').val()
        }
            
        emailjs.send('service_72jmx28', 'template_39qke13', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    });	
        




});
