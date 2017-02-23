function init(){

}
function loginValidate(){
    // que solo vaya a map si solo se tienen los datos del signup
}

var miMap;
// la funcion se carga cuando la funcion se acaba de cargar
// se puede cambiar el nombre en el html
// cada vez que haga un watch position, se hace un setcenter para actualizarlo
function initMap() {
    var mapConfig={
        center: {
            lat: -16.457389199999998, 
            lng: -71.5315308
        },
        zoom: 15
  };
//miMap.setcenter();para conseguir los datos del usuario cuando se mueva
        
  miMap = new google.maps.Map(document.getElementById('map'), mapConfig);
  
    
    var myLatLong={lat: -16.457389199999998,lng: -71.5315308};  
    var myLatLong2={lat: -16.452359199999998,lng: -71.5325708};  
    var myLatLong3={lat: -16.455369129599998,lng: -71.535208};  
    var myLatLong4={lat: -16.456389199799998,lng: -71.5345908};  
    var myLatLong5={lat: -16.457379199899998,lng: -71.5335508};  
    var pazPeru = new google.maps.Marker({position: myLatLong,map: miMap,title: 'Ubicacion',label:'1',icon:'images/people.png'});
    var pazPeru2 = new google.maps.Marker({position: myLatLong2,map: miMap,title: 'Ubicacion',label:'1',icon:'images/people.png'});
    var pazPeru3 = new google.maps.Marker({position: myLatLong3,map: miMap,title: 'Ubicacion',label:'1',icon:'images/people.png'});
    var pazPeru4 = new google.maps.Marker({position: myLatLong4,map: miMap,title: 'Ubicacion',label:'1',icon:'images/people.png'});
    var pazPeru5 = new google.maps.Marker({position: myLatLong5,map: miMap,title: 'Ubicacion',label:'1',icon:'images/people.png'});
    // se pueden hacer mas marcadores
    
}