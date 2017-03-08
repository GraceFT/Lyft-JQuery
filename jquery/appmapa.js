$(document).ready(init);
function init(){
    navigator.geolocation.getCurrentPosition(mapa,error);
}

function mapa(position)
{
    var contain= document.getElementById('map');
    var latitud= position.coords.latitude;
    var longitud= position.coords.longitude;
    
    var map = new google.maps.LatLng(latitud,longitud); 
    var property={center: map,zoom: 14,mapTypeControl:false,};
    
    var mapita = new google.maps.Map(contain,property);
    
    var positioncar1= {lat: latitud+0.002 , lng: longitud-0.01};
    var positioncar2= {lat: latitud+0.003 , lng: longitud-0.004};
    var positioncar3= {lat: latitud-0.001 , lng: longitud+0.01};
    
    var marker = new google.maps.Marker({
        position: map,
        title: 'your position',
        map: mapita,
        icon:'images/ico_person.png'
    });
    
    var markercar1 = new google.maps.Marker({
        position:positioncar1,
        title: 'Car position 1',
        map: mapita,
        icon:'images/car_icon.png'
    });
    
    var markercar2 = new google.maps.Marker({
        position:positioncar2,
        title: 'Car position 2',
        map: mapita,
        icon:'images/car_icon.png'
    }); 
    
    var markercar3 = new google.maps.Marker({
        position:positioncar3,
        title: 'Car position 3',
        map: mapita,
        icon:'images/car_icon.png'
    }); 
}

function error(errorC)
{
    alert('Error: '+errorC.code+' '+error.message+ '\n\Please prove if are connected '+
  'or permit your location');
    
}
