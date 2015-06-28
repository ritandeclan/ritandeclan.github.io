$(document).ready(function(){


  var mapStyles =
[
  {
    "featureType": "administrative.neighborhood",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#f7b7c7" }
    ]
  },{
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#f7b7c7" }
    ]
  },{
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#f7b7c7" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "color": "#75d0bb" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#f7b7c7" }
    ]
  },{
    "featureType": "administrative.locality",
    "elementType": "labels",
    "stylers": [
      { "weight": 0.8 },
      { "color": "#656478" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#75d0bb" }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      { "color": "#e9243c" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#656478" },
      { "weight": 0.1 },
      { "visibility": "on" },
      { "invert_lightness": true }
    ]
  },{
    "featureType": "transit.station",
    "stylers": [
      { "color": "#f18d11" }
    ]
  },{
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      { "color": "#75d0bb" }
    ]
  },{
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#656478" },
      { "weight": 0.6 }
    ]
  },{
    "featureType": "poi.attraction",
    "stylers": [
      { "color": "#f18d11" }
    ]
  },{
    "featureType": "poi.attraction",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#656478" }
    ]
  },{
    "featureType": "poi.business",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#656478" },
      { "weight": 0.1 }
    ]
  },{
    "featureType": "administrative.locality",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#ffffff" },
      { "weight": 0.8 },
      { "lightness": 32 },
      { "gamma": 1.04 },
      { "saturation": 1 }
    ]
  },{
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#ffffff" },
      { "weight": 2 },
      { "lightness": 32 },
      { "gamma": 1.04 },
      { "saturation": 1 }
    ]
  }
];

  var mapOptions = {
    center: { lat: 26.1451065, lng: -81.7918291},
    zoom: 12,
    styles: mapStyles
  };

  // map.setOptions({styles: styles});

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var yourWeather = 'Not so perfect';

  if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);

      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?lat="+ position.coords.latitude + "&lon=" + position.coords.longitude+ "&units=imperial",
        crossDomain: true
      }).success(function(data) {
          console.log("your weather data", data);

          console.log(" your description", data.weather[0].description);
          console.log(" your main", data.weather[0].main);
          console.log(" your temp", data.main.temp);

          $("#your-weather").html(data.weather[0].description);
          $("#your-temp").html(data.main.temp + '&deg;' + ' F');

        });
      });

  }

// Ajax call for Naples temp, desc, and weather.
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?id=4165565&units=imperial",
    crossDomain: true
  }).success(function(data) {
      console.log("naples weather data", data);

      console.log("description", data.weather[0].description);
      console.log("main", data.weather[0].main);
      console.log("temp", data.main.temp);

        $("#naples-weather").html(data.weather[0].description);
        $("#naples-temp").html(data.main.temp + '&deg;' + ' F');

    });


});
