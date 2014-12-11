/* global google:true */
/* jshint camelcase:false */
(function(){
  'use strict';


  $(document).ready(function(){
    $('#toggle_showshooshi').click(geocode);
    // $('#toggle_showshooshi').click(function(){
    //   $(".Sushi").attr('src',"assets/img/showshooshi copy.png");
    // });
  });

  var map,
      infowindow = new google.maps.InfoWindow(),
      mapCity,
      //cityName,
      lat,
      lng;
  console.log('LAT & LNG HERE---->', lat, lng);


  function initialize(lat, lng){
    if(lat && lng){
      mapCity = new google.maps.LatLng(lat, lng);
    }else{
      mapCity = new google.maps.LatLng(29.9511, -90.0715);
    }

    map = new google.maps.Map(document.getElementById('map'), {
      center: mapCity,
      zoom: 12
    });

    var request = {
      location: mapCity,
      radius: 50000,
      query: 'sushi restaurant'
    };
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  }
//-------------initialize--end--------------\\


  function callback(results, status){
    if (status === google.maps.places.PlacesServiceStatus.OK){
      for (var i = 0; i < results.length; i++){
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place){
    var placeLoc = place.geometry.location,
      marker = new google.maps.Marker({
        icon: 'assets/img/SSmapMarker.png',
        map: map,
        animation: google.maps.Animation.DROP,
        position: placeLoc
      });

    google.maps.event.addListener(marker, 'click', function(){
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
  //--------------traffic_toggle-----------------\\
  var trafficLayer = new google.maps.TrafficLayer();
  $('#toggle_traffic').click(function(){
    if(trafficLayer.getMap()){
      trafficLayer.setMap(null);
    }else{
      trafficLayer.setMap(map);
    }
  });
//---------------traffic_toggle_end----------------\\

//-----------------weather_toggle----------------------------\\
  var weatherLayer =new google.maps.weather.WeatherLayer({
    temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
  }),
  cloudLayer = new google.maps.weather.CloudLayer();

  $('#toggle_weather').click(function(){
    if(weatherLayer.getMap() || cloudLayer.getMap()){
      weatherLayer.setMap(null);
      cloudLayer.setMap(null);
    }else{
      weatherLayer.setMap(map);
      cloudLayer.setMap(map);
    }
  });
//--------------weather_toggle_end-----------------------------\\

  function geocode(event){
    var geocoder = new google.maps.Geocoder(),
        name = $('#name').val();

    geocoder.geocode({address:name}, function(results, status){
      console.log('---------->-------->--->', results);
      var cityName = results[0].formatted_address,
        lat  = results[0].geometry.location.lat(),
        lng  = results[0].geometry.location.lng();

      $('#name').val(cityName);
      $('#lat').val(lat);
      $('#lng').val(lng);

      centerCity(lat, lng);
      initialize(lat, lng);
    });

    event.preventDefault();
  }

  function centerCity(lat, lng){
    map.setCenter({lat:lat, lng:lng});
  }


  google.maps.event.addDomListener(window, 'load', initialize);
})();
