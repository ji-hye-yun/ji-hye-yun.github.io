window.onload = function(){

    var container = document.getElementById('map_wrap');

    var options = {
        center: new daum.maps.LatLng(37.5207466, 127.0172212),
        level: 2
    };  
    
    var map = new daum.maps.Map(container, options);

    var positions = [
        {
            title: '사옥', 
            latlng: new daum.maps.LatLng(37.5207466, 127.0172212)
        },
        {
            title: '서점', 
            latlng: new daum.maps.LatLng(37.5709641, 126.9077267)
        }
   ] 

    var imageSrc = './img/default/pin.png';
   
    for (var i = 0; i < positions.length; i ++) {
    
        var imageSize = new daum.maps.Size(50, 50); 
        
        var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize); 
        
        var marker = new daum.maps.Marker({
            map: map, 
            position: positions[i].latlng, 
            title : positions[i].title, 
            image : markerImage 
        });
    }
  
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPLEFT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.BOTTOMLEFT);

    setDraggable(true);           
    function setDraggable(draggable) {
        map.setDraggable(draggable);    
    }

    setZoomable(false);
    function setZoomable(zoomable) {          
        map.setZoomable(zoomable);    
    }

    function setCenter() {            
        var moveLatLon = options.center; 
        map.setCenter(moveLatLon);
        return false;
    }
    
    function panTo() {
        var moveLatLon = new daum.maps.LatLng(37.5130556, 127.0564224); 
        map.panTo(moveLatLon);   
        return false;         
    }  
   
}