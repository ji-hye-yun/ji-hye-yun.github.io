$(document).ready(function(){ 
    var dataURL = 'https://api.instagram.com/v1/users/self/media/recent';
    var photoData;
  
    var $wrap = $('#insta ul'); 
    var count_num = 10; 
    var token = "2270899990.1677ed0.3adc610e113941969331e938ec620b22"; 
    var text_count =10; 
   
    
    var getData = function(url) {
      
      $.ajax({
        url: url,
        dataType: 'jsonp',
        data: {
          access_token: token, 
          count:count_num
        }
      })
      .success(function(data) {
        photoData = data;	
        console.log(photoData);      
        var post = photoData.data;       
  
        $(post).each(function(i){  
      
          var imgUrl = this.images.standard_resolution.url;
          var imgLink = this.link;
          var tags = this.tags[0];
          var caption;
  
          if(this.caption){
            caption = this.caption.text;   
            var len = caption.length;
                  
            if(len>text_count){
              caption = caption.substr(0,text_count)+"...";  
            }            
          }
          
        
          $wrap.append(
            $('<li class="insta_item '+tags+'" style="background-image:url('+imgUrl+');">')
              .css({
                'position':'relative'
              })
              .append(
                $('<a>').css({'display':'block', 'width':'100%', 'height':'100%','position':'absolute', 'top':'0px', 'left':'0px'}).attr({'href':imgLink, 'target':'_blank'})
              )                    
          );
          
  
        });

        $(".insta_item").css({
          "background-position":"center",
          "background-size" : "cover",
          "background-repeat" : "no-repeat",
          "background-color" : "rgba(255,255,255,1)"
        });
  
        
      })
      .error(function() {
            alert("데이터불러오기에 실패했습니다");
      })
    }
  
    getData(dataURL);   
  
      
  });
  