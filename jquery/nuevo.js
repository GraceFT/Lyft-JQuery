this.myLatitude = 0;
this.myLongitude = 0;

function geoFindMe() {
  var outputLocation = document.getElementById("outputLocation");
  var outputLatitude = document.getElementById("outputLatitude");
  var outputLongitude = document.getElementById("outputLongitude");
  var outputAltitude = document.getElementById("outputAltitude");
  var outputAccuracy = document.getElementById("outputAccuracy");
  


  if (!navigator.geolocation){
    output.innerHTML = "<p>geolocalizaci�n no es soportado por su navegador de Internet</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    outputLatitude.innerHTML = latitude;
    outputLongitude.innerHTML = longitude;
    outputAltitude.innerHTML = position.coords.altitude;
    outputAccuracy.innerHTML = position.coords.accuracy;

    window.mylat = latitude;
    output.innerHTML = "";

    //output.innerHTML = '<p>Latitude is ' + latitude + '� <br>Longitude is ' + longitude + '�</p>';
    

        /**     GOOGLE MAPS THING
         *
         */
        
            var mapOptions = {
              center: new google.maps.LatLng(latitude, longitude),
              zoom: 13
            };
            var map = new google.maps.Map(document.getElementById("map-canvas"),
                mapOptions);
      
      // ADDING THE MARKER ON THE CENTER
      var myLatlng = new google.maps.LatLng(latitude,longitude);
      // To add the marker to the map, use the 'map' property
      
      
      var myPosition = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title:"usted est� aqu�!!!!"
      });
      