$(document).ready(function(){

  //  Formspree

$("#form-test .btn-submit").on("click", function(e) {

  e.preventDefault();

  var formMessage = $("#form-test").serializeArray();

  console.log("Here's the form message", formMessage);

  $.ajax({
    url: "//formspree.io/declanandrita@gmail.com",
    method: "POST",
    data: {message: formMessage},
    dataType: "json"
  }).done(function (data, status, jqXHR) {

      document.getElementById("form-test").reset();

      console.log("Success, Here's the test data", data);

      $("#submit-success-message").fadeIn(3000, 'swing', function(){
        $('#submit-success-message').fadeOut(5000);
      });

    }).fail(function (jqXHR,status,err) {

      console.log("failure, Here's the error", err);

      $("#submit-failure-message").addClass("display");

    });


});

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

  // map.setOptions({styles: styles});

// function initialize() {
// var attractions = [
//   [ [ 26.106907, -81.770609],[ "https://www.naplesgarden.org/"], ["Naples Botanical Garden"]],
//   [ [ 26.170107, -81.790581],[ "http://napleszoo.com/home.htm"], ["Naples Zoo"]],
//   [ [ 26.31554, -81.8388], [ "http://www.tripadvisor.com/ShowUserReviews-g34091-d531902-r103184921-Barefoot_Beach_Preserve-Bonita_Springs_Florida.html"], ["Barefoot Beach Preserve"]]
// ];

// var hotels = [
//   [ [ 26.140098, -81.803361], [ "http://hotelescalante.com/"], ["The Hotel Escalante"]]
// ];

// var restaurants = [
//   [ [ 26.142089, -81.795352 ], [ "http://bhabhapersianbistro.com/menu-items/"], ["Bha Bha Persion Bistro"] ],
//   [ [ 26.170107, -81.790581 ], [ "http://www.viewmenu.com/grouper-and-chips-2/menu?ref=google"], ["Grouper and Chips"] ],
//   [ [ 26.142053, -81.795451 ], [ "http://www.pazzoitaliancafe.com/" ], [ "Pazzo Italian Cafe" ] ]
// ];

var locations = [
    {
      "attractions": [
        [ [ 26.106907, -81.770609], [ "https://www.naplesgarden.org/"], ["Naples Botanical Garden"], ["Paradise: A place of bliss. A region of supreme delight. A state of happiness. <br> Naples Botanical Garden is creating a world class paradise. <br> <a href='https://www.naplesgarden.org/blooming_now.shtml' target='_blank'>See whats blooming now!<a>"]],
        [ [ 26.170107, -81.790581], [ "http://napleszoo.com/home.htm"], ["Naples Zoo"], ["In this tropical setting, you can take delight at seeing many of your favorite animals like lions, giraffes, monkeys, pythons, and bears. <br> In addition, you'll also discover feature exhibits and an array of more rarely seen creatures like the fosas of Madagascar or an Asian deer that barks and eats meat."]],
        [ [ 26.31554, -81.8388], [ "http://www.tripadvisor.com/ShowUserReviews-g34091-d531902-r103184921-Barefoot_Beach_Preserve-Bonita_Springs_Florida.html"], ["Barefoot Beach Preserve"], ["The best beach in Naples <br> The sand is powder fine white sand, but bring your beach shoes, because there are lots of shells in the sand. If you walk down to the end of the beach you'll have more luck finding bigger shells, but you have to do a little digging. There is a butterfly garden at Parking lot 1, and you'll be able to see the gopher tortoises in the greenery along the road."]]
      ]
    },
    {
      "hotels": [
        [ [ 26.140098, -81.803361], [ "http://hotelescalante.com/"], ["The Hotel Escalante"], ["Elegant, Sophisticated, Magical, The Escalante is Naples only boutique hotel, a romantic hideaway that is reminiscent of a Mediterranean villa."]]
      ]
    },
    {
      "restaurants":   [
        [ [ 26.142089, -81.795352 ], [ "http://bhabhapersianbistro.com/menu-items/"], ["Bha Bha Persion Bistro"], ["Let me take you to a place where warm desert moonlight glows upon the sands, creates mystical illusions in far away dunes, and magically gives life to every jewel in it’s path. Silk fabrics entice the touch. World music is heard in the background. Aromas of delicate fragrant spices, sweetness in the air of simmering fruits, and the perfume of jasmine from the garden seduce you. Bold flavors from fresh meats, poultry and fish embrace the palate and soothe it with delicate strokes of the perfect union of flavors. "] ],
        [ [ 26.170107, -81.790581 ], [ "http://www.viewmenu.com/grouper-and-chips-2/menu?ref=google"], ["Grouper and Chips"], ["For over 21 years, Grouper & Chips has been one of Naples' best kept secrets. Local residents have been flocking to a small unpretentious “hole-in-the-wall” restaurant to enjoy Chef Francis Pischner’s unparalleled cuisine. With hundreds of other local area restaurants notwithstanding, regular customers choose to wait for over an hour at times just to get in."]],
        [ [ 26.142053, -81.795451 ], [ "http://www.pazzoitaliancafe.com/" ], [ "Pazzo Italian Cafe" ], ["Pazzo! is a friendly neighborhood restaurant that just happens to have an outstanding world class affordable menu that serves real Italian food, with an incredible wine list. At Pazzo!, we make all of our own sauces, pastas, desserts and everything in between from scratch! At Pazzo!, It’s All About The Food!™"]]
      ]
    }
];

  var marker;
  var map;
  var mapCenter = new google.maps.LatLng(26.140098, -81.803361);

  var mapOptions = {
    zoom: 12,
    center: mapCenter,
    styles: mapStyles
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  infoWindows = [];

  function closeAllInfoWindows() {
    for (var i=0;i<infoWindows.length;i++) {
       infoWindows[i].close();
    }
  }

  function displayDescription(description) {

    var descriptionContainer = $("#map-item-description");

    descriptionContainer.empty();

    descriptionContainer.append(description);

  };

  function setMarkerListeners(item, description, marker, infowindow) {

    google.maps.event.addListener( marker, 'click', function() {
      closeAllInfoWindows();
      infowindow.open(map, marker);
      map.setCenter(marker.getPosition());
      displayDescription(description);
    });

    var itemSelector = $('.'+item);

    var clickStatus = false;

    itemSelector.on("click", function() {

      closeAllInfoWindows();

      if (clickStatus == false) {
        map.setCenter(marker.getPosition());
        infowindow.open(map, marker);
        displayDescription(description);
        clickStatus = true;
      } else {
        infowindow.close(map, marker);
        clickStatus = false;
      }

    });

  };

  // $.each(locations, function(index, value){
  //   for (var k in value){
  //     if (value.hasOwnProperty(k)) {
  //          console.log("Key is " + k + ", value is" + value[k][index]);
  //          debugger;
  //     }
  //   }
  // });

  $.each(locations, function(index, location){

    for (var k in location){
      if (location.hasOwnProperty(k)) {

        var currentCategory = location[k];

        var itemsContainer = $("#"+ k);

        $.each(currentCategory, function(i, item) {

          var description =
            "<div class='item-description-container'>" +
              "<h3 class='item-name intro'>" + item[2][0] + "</h3>"+
              "<p class='item-description'>" + item[3][0] + "</p>" +
              "<p class='item-description'><a href='" + item[1][0] + "' target='_blank'>Visit the " + item[2][0] + " website</a></p>" +
            "</div>";

          var attractionItem =
            "<div class='legend-item " + k + " " + k + "-item-" + i + "' data-clicked='nope'>" +
              "<h3 class='item-name'>" + item[2][0] + "</h3>" +
            "</div>";

          itemsContainer.append( attractionItem );

          var lat = item[0][0];
          var lng = item[0][1];

          var marker = new google.maps.Marker({
            map:map,
            draggable:false,
            animation: google.maps.Animation.DROP,
            position: {lat, lng},
          })

          var contentString =
          '<div class="marker-content">'+
            '<h1 class="marker-info-header" >'+ item[2][0] +'</h1>' +
            '<p class="marker-website"><a href="' + item[1][0] + '" target="_blank">Visit the '+ item[2][0] + ' website</a></p>' +
          '</div>';

          var infoWindow = new google.maps.InfoWindow({
              content: contentString
          });

          infoWindows.push(infoWindow);

          setMarkerListeners(k + "-item-" + i, description, marker, infoWindow);

        });

      }
    }

  });

// google.maps.event.addDomListener(window, 'load', initialize);

  var yourWeather = 'mediocre';
  var yourTemp = 'meh&deg; f';

  if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function(position) {

      // Ajax call for your weather
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?lat="+ position.coords.latitude + "&lon=" + position.coords.longitude+ "&units=imperial",
        crossDomain: true
      }).success(function(data) {

          yourWeather = data.weather[0].description;
          yourTemp = data.main.temp + '&deg;' + ' f';

          $("#your-weather").html(yourWeather);
          $("#your-temp").html(yourTemp);

        }).error(function(){
          $("#your-weather").html(yourWeather);
          $("#your-temp").html(yourTemp);
        });
      });

  } else {
    $("#your-weather").html(yourWeather);
    $("#your-temp").html(yourTemp);
  }

  $("#your-weather").html(yourWeather);
  $("#your-temp").html(yourTemp);

// Ajax call for Naples temp, desc, and weather.
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?id=4165565&units=imperial",
    crossDomain: true
  }).success(function(data) {

        $("#naples-weather").html(data.weather[0].description);
        $("#naples-temp").html(data.main.temp + '&deg;' + ' f');

    });

  // smooth scroll jquery
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body, window').animate({
            scrollTop: target.offset().top
        }, 5000);
    }
  });

  // set the date we're counting down to
var target_date = new Date("April 30, 2016").getTime();

// variables for time units
var days, hours, minutes, seconds;

// days
var daysElement = document.getElementById("days");
// hours
var hoursElement = document.getElementById("hours");
// minutes
var minutesElement = document.getElementById("minutes");
// seconds
var secondsElement = document.getElementById("seconds");

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

}, 1000);

// The list of cards
var cardArray =
[
 'public/assets/img/card-1.jpg',
 'public/assets/img/card-2.jpg',
 'public/assets/img/card-3.jpg',
 'public/assets/img/card-4.jpg'
 ];

// seconds
var cardContainer = document.getElementById("cards-container");

// Create a for-loop that swaps the href in the container once every 5 seconds.
// Also include an animation for the transition.

// setInterval(function () {

//   $.forEach(cardArray) {
//     cardContainer.attr['href'] = cardArray[]
//   }

// }, 5000);

// Make Instagram API call to pull photos with the hashtag #ritandeclan

// Ajax call for Naples temp, desc, and weather.
  $.ajax({
    url: "https://api.instagram.com/v1/tags/ritandeclan/media/recent?client_id=8953bce455c5461f910bf9050de3891f",
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp'
  }).success(function(data) {

      var instas = data['data'];

      for (var i = 0; i < instas.length; i++) {
        if (instas[i]['videos'] !== null && instas[i]['videos'] !== undefined) {
          $("#insta-gallery").append("<video class='instas' src=" + instas[i]['videos']['standard_resolution']['url'] + " margin='5px' border='10px solid white' width='272px' height='272px' controls></video>");
        } else {
          $("#insta-gallery").append("<img class='instas' src="+ instas[i]['images']['standard_resolution']['url'] + "></img>");
        }

      }

    });

  // Form conditional work

  var addGuestButton = $(".add-guest");

  var guestCounter = 0;

  function isOdd(num) { return num % 2 === 1;}

  addGuestNumber = function(currentGuestContainer) {
    var guestNumber = parseInt($(currentGuestContainer).index());

    if ( !isOdd(guestNumber) ) {
      $(currentGuestContainer).addClass("even");
    }

    $(currentGuestContainer).find(".guest-number").html("Guest # " + guestNumber);
  }

  addGuestButton.on('click', function(){

    guestCounter += 1;

    var guestSection = $(".guest-section");

    guestSection.append(
      "<div class='guest-container' data-guest-number='" + guestCounter + "'>" +
        "<div class='delete-guest' data-guest-number='" + guestCounter + "' ><div class='delete-guest-button'>REMOVE GUEST</div></div>" +
        "<p class='guest-number'>" +
        "</p>" +
        "<p>" +
          "Guest's name, please" +
        "</p>" +
        "<input class='answer' type='text' name='guest-" + guestCounter + "-name'>" +
        "<p>" +
          "Guest's email, please" +
        "</p>" +
        "<input class='answer' type='email' name='guest-" +guestCounter+ "-email'>" +
        "<p>" +
          "Guest's choice of meal" +
        "</p>" +
        "<div class='meal-options'>" +
          "<select class='answer dropdown' id='meal-" + guestCounter + "' name='guest-" + guestCounter + "-meal'>" +
            "<option value='' selected>Choose meal</option>" +
            "<option value='Fish'>Fish</option>" +
            "<option value='Beef'>Beef</option>" +
            "<option value='Vegetarian'>Vegetarian</option>" +
          "</select>" +
        "</div>" +
        "<p>" +
          "A song this guest would dance to" +
        "</p>" +
        "<input class='answer' type='text' name='guest-" + guestCounter + "-song'>" +
      "</div>"
    );

  $(".delete-guest[data-guest-number='"+ guestCounter +"']").on("click", function(){

    $(this).parent().remove();

  });

  var currentGuestContainer = ".guest-container[data-guest-number='"+ guestCounter +"']";

  addGuestNumber(currentGuestContainer);

  guestNumberClass = undefined;

    // Select dropdown styling fix:

  $("#meal-" + guestCounter).on("change", function(){

    var value= $("#meal-"+ guestCounter + " option:selected").val().toLowerCase();

    switch (value) {
      case "":
         $(this).css("padding-left", "18%");
         break;
      case 'vegetarian':
         $(this).css("padding-left", "23.5%");
         break;
      case 'fish':
        $(this).css("padding-left", "41.5%");
      case 'beef':
        $(this).css("padding-left", "40.5%");
      default:
        $(this).css("padding-left", "40.5%");
        break;
    }

  });

  });

// Select dropdown styling fix:

$("#meal").on("change", function(){

  var value= $("#meal option:selected").val().toLowerCase();

  switch (value) {
    case "":
       $(this).css("padding-left", "18%");
       break;
    case 'vegetarian':
       $(this).css("padding-left", "23.5%");
       break;
    case 'fish':
      $(this).css("padding-left", "41.5%");
    case 'beef':
      $(this).css("padding-left", "40.5%");
    default:
      $(this).css("padding-left", "40.5");
      break;
  }

});

});
