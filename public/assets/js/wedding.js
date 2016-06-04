$(document).ready(function(){

  isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  if (isFirefox) {
    $("#meal").css("padding-left", "0");
  }

  var thanks = function(noOfTimes){

    var thanksHolder = $("#thanks-holder");

    var thanksMessage = $(".thanks");

    for (var i=0 ;i < noOfTimes ;i++){
      var newThanksMessage = thanksMessage.clone()

      thanksHolder.append(newThanksMessage);
    }

  }

  thanks(200);

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

  locations = [
      {
        "venue": [
          [ [ 26.140098, -81.803361], [ "http://hotelescalante.com/"], ["The Hotel Escalante"], ["Elegant, Sophisticated, Magical. The Escalante is Naples' only boutique hotel, a romantic hideaway that is reminiscent of a Mediterranean villa."]]
        ]
      },
      {
        "parking": [
          [[26.142467, -81.796823], ["http://www.fifthavenuesouth.com/parking-transist/"], ["Parking garage on 4th Ave S"], ["Public Parking Garage 8th Street South and 4th Avenue."]],
          [[26.140825, -81.794634], ["http://www.fifthavenuesouth.com/parking-transist/"], ["Parking garage btwn 5th and 6th Ave S"], ["Public Parking Garage 8th Street South and 6th Avenue."]]
        ]
      },
      {
        "attractions": [
          [ [ 26.106907, -81.770609], [ "https://www.naplesgarden.org/"], ["Naples Botanical Garden"], ["Paradise: A place of bliss. A region of supreme delight. A state of happiness. <br> Naples Botanical Garden is creating a world class paradise. <br> <a href='https://www.naplesgarden.org/blooming_now.shtml' target='_blank'>See whats blooming now!<a>"]],
          [ [ 26.170107, -81.790581], [ "http://napleszoo.com/home.htm"], ["Naples Zoo"], ["In this tropical setting, you can take delight at seeing many of your favorite animals like lions, giraffes, monkeys, pythons, and bears. <br> In addition, you'll also discover feature exhibits and an array of more rarely seen creatures like the fosas of Madagascar or an Asian deer that barks and eats meat."]],
          [ [ 26.31554, -81.8388], [ "http://www.tripadvisor.com/ShowUserReviews-g34091-d531902-r103184921-Barefoot_Beach_Preserve-Bonita_Springs_Florida.html"], ["Barefoot Beach Preserve"], ["The best beach in Naples <br> The sand is powder fine white sand, but bring your beach shoes, because there are lots of shells in the sand. If you walk down to the end of the beach you'll have more luck finding bigger shells, but you have to do a little digging. There is a butterfly garden at Parking lot 1, and you'll be able to see the <a href='https://en.wikipedia.org/wiki/Gopher_tortoise' target='_blank'>gopher tortoises</a> in the greenery along the road."]],
          [ [ 26.374743, -81.603584], [ "http://www.10best.com/destinations/florida/naples/east-naples/attractions/corkscrew-swamp-sanctuary/"], ["Corkscrew Swamp Sanctuary"], ["While Naples is known for its pristine beaches, the city also has flourishing wetlands such as the Corkscrew Swamp Sanctuary - known for its ancient cypress forest and colony of nesting American woodstorks."]],
          [ [ 26.211233, -81.811903], [ "http://www.tripadvisor.com/Attraction_Review-g34467-d285104-Reviews-Clam_Pass_Park-Naples_Florida.html"], ["Clam Pass Park"], ["This is the perfect kind of beach to do very little but relax. Oh, yes, and dolphin watch!<br> The ride on the little trolley cart is so much fun- winding through a scenic half mile of mangroves on a boardwalk. There is a bathroom and outside shower at the beach as well as a restaurant and a cabana with rentals available. We enjoyed checking out the starfish, sand dollars, and shells."]]
        ]
      },
      {
        "hotels": [
          [ [ 26.140128, -81.793719], [ "http://www.tripadvisor.com/Hotel_Review-g34467-d87451-Reviews-Trianon_Old_Naples-Naples_Florida.html"], ["Trianon Old Naples"], [" It's all here - the best of Florida - and we look forward to being your home while visiting the Paradise Coast."],["Room-Block"]],
          [ [ 26.133473, -81.793445], [ "http://www.tripadvisor.com/Hotel_Review-g34467-d268715-Reviews-Cove_Inn_on_Naples_Bay-Naples_Florida.html"], ["Cove Inn"], ["Cove Inn on Naples Bay offers the unique hotel experience you crave. Boutique-style warmth, picture-postcard water views, an authentic, original sense of place. Cove Inn on Naples Bay is also Naples' best hotel value. "],["Room-Block"]],
          [ [ 26.211813, -81.810159], [ "http://www.tripadvisor.com/Hotel_Review-g34467-d85227-Reviews-Naples_Grande_Beach_Resort-Naples_Florida.html"], ["Naples Bay Resort"], ["A warm, effortless level of hospitality greets you at Naples Grande Beach Resort. This inviting beach property sets the standard for treating guests and families to endless activities, incredible nearby sights, and an unmatched level of service and attention. Rediscover this unique luxury resort in Naples, Florida and indulge in a truly special getaway."],["Top-rated"]],
          [ [ 26.161493, -81.797102], [ "http://www.tripadvisor.com/Hotel_Review-g34467-d87442-Reviews-Ramada_Naples-Naples_Florida.html"], ["Naples Ramada"], ["Located in the heart of Naples, close to shopping, dining, beaches and attractions, Ramada Naples is the perfect lodging choice for your Gulf Coast getaway."],["More Affordable"]],
          [ [ 26.209492, -81.801649], [ "http://www.tripadvisor.com/Hotel_Review-g34467-d224315-Reviews-Hilton_Naples-Naples_Florida.html"], ["Hilton Naples"], ["The Hilton Naples hotel’s central location is close to beautiful beaches as well as many attractions, entertainment destinations, shops, and restaurants."],["More Affordable"]],
          [ [ 26.139215, -81.78242], [ "http://www.tripadvisor.com/Hotel_Review-g34467-d249664-Reviews-Holiday_Inn_Express_Suites_Naples-Naples_Florida.html"], ["Holiday Inn Express & Suites"], ["Take time to unwind pool side on our large deck or refresh yourself in our heated, sparkling tropical pool or Jacuzzi. This award winning hotel is conveniently located within walking distance or a short drive to the pristine Gulf beaches and the historic Naples pier."],["Most Affordable"]],
          [ [ 26.174960, -81.800199], [ "http://www.tripadvisor.com/Hotel_Review-g34467-d80240-Reviews-BEST_WESTERN_Naples_Inn_Suites-Naples_Florida.html"], ["Best Western Inn & Suites"], ["The Best Western Naples Inn & Suites, located just one mile from breathtaking Gulf Beaches and situated in the heart of beautiful Naples, is the ideal getaway for both romantic retreats and fun-filled family vacations."],["Most Affordable"]]
        ]
      },
      {
        "bars": [
          [ [ 26.251724, -81.800337], [ "https://www.seasons52.com/en/our-menu/current-menu/FL/Naples/4519"], ["Seasons 52"], ["Seasons 52 is a celebration of what’s good now. Seasonally inspired ingredients at their peak of freshness. Rustic cooking techniques that bring out natural flavors. And an ever-changing selection of global wines. All in a casually sophisticated setting. Come discover what’s good now."], ["Full bar | Wine bar"]],
          [ [ 26.141446, -81.800659], [ "http://avenuewinecafe.wix.com/avenuewinecfe"], ["Avenue Wine Cafe"], ["Great Beer & Comfy sofas to cool down on :-)<br>Excellent wines, craft beers and cheese plates. Great happy hour prices. Friendly, knowledgeable staff. Some have been there since they opened seven years ago. Local following. Cozy, comfortable seating and atmosphere."], ["Full bar | Craft beers"]],
          [ [ 26.140058, -81.794895 ], [ "http://www.7thavenuesocial.com/" ], [ "7th Avenue Social" ], ["We take great pride in the unique taste and work put into each dish. <br>It's more than a plate of food - it is an art.<br>'Naples' late-night crowd suddenly has options! - News-Press.com'"], ["Full bar | Wine bar"]],
          [ [ 26.273475, -81.769376 ], [ "http://ciderpresscafe.com/"], ["The Cider Press Café"], ["One of the country’s best plant-based menus can be found at the The Cider Press Café. <br>'I can't believe of all the restaurants in Naples I'm giving a VEGAN place five stars, but by golly they earned it. Not only is the ambiance beautiful, but the hipster staff is sweet and accommodating, and the food is phenomenal. I'm talking about explosion in your mouth great. Literally your brain is thinking 'wait this is cold, and there is no meat, I shouldn't like this, but can I lick the plate?' I highly recommended, you won't be disappointed :)'"], ["Full bar | Cocktails"]],
          [ [ 26.255050, -81.823368 ], [ "http://www.windwardhospitality.com/naples/subpages/wine-list.html"], ["The Turtle Club"], ["'Best spot to watch the sunset in Naples. Drinks solid, bartenders have been there forever and are friendly. Usually you meet someone on vacation at the bar inside and can make chit chat small talk. Outside dining is great as the sand is with 15 feet of you. I recommend this spot to any local looking for a getaway spot.'"], ["Full bar | Wine bar"]],
          [ [ 26.253023, -81.79924], [ "http://burnbyrockypatel.com/"], ["BURN By Rocky Patel"], ["You don't have to be a cigar aficionado to enjoy this place, There's a great patio area. Great cigars and the drinks are reasonably priced. The staff is wonderful, and very knowledgable. Wherever you sit you'll be treated well. If you're looking for a great place to sit enjoying a drink Or two, I say stop by. The VIP service is wonderful, just make a reservation to guarantee your spot. No need to look no further for a place to enjoy your night in Naples."], ["Full bar | Cigar Bar"]]
        ]
      },
      {
        "restaurants":   [
          [ [ 26.142089, -81.795352 ], [ "http://bhabhapersianbistro.com/menu-items/"], ["Bha Bha Persion Bistro"], ["Let me take you to a place where warm desert moonlight glows upon the sands, creates mystical illusions in far away dunes, and magically gives life to every jewel in it’s path. Silk fabrics entice the touch. World music is heard in the background. Aromas of delicate fragrant spices, sweetness in the air of simmering fruits, and the perfume of jasmine from the garden seduce you. Bold flavors from fresh meats, poultry and fish embrace the palate and soothe it with delicate strokes of the perfect union of flavors. "] ],
          [ [ 26.170107, -81.790581 ], [ "http://www.viewmenu.com/grouper-and-chips-2/menu?ref=google"], ["Grouper and Chips"], ["For over 21 years, Grouper & Chips has been one of Naples' best kept secrets. Local residents have been flocking to a small unpretentious “hole-in-the-wall” restaurant to enjoy Chef Francis Pischner’s unparalleled cuisine. With hundreds of other local area restaurants notwithstanding, regular customers choose to wait for over an hour at times just to get in."]],
          [ [ 26.273475, -81.769376 ], [ "http://ciderpresscafe.com/"], ["The Cider Press Café"], ["One of the country’s best plant-based menus can be found at the The Cider Press Café. <br>'I can't believe of all the restaurants in Naples I'm giving a VEGAN place five stars, but by golly they earned it. Not only is the ambiance beautiful, but the hipster staff is sweet and accommodating, and the food is phenomenal. I'm talking about explosion in your mouth great. Literally your brain is thinking 'wait this is cold, and there is no meat, I shouldn't like this, but can I lick the plate?' I highly recommended, you won't be disappointed :)'"]],
          [ [ 26.141058, -81.766053 ], [ "http://www.rumbacubancafe.com/"], ["Rumba Cuban Cafe"], ["Rumba is without question one of the best restaurants in Naples, and that's saying something given the incredibly high caliber of culinary options in town. The food at Rumba is authentic Cuban, with a unique combination of flavors that all blend into one of the best dining experiences you will ever have. If you're in the mood for an extraordinary Cuban meal served in a casual environment by the most pleasant and attentive bilingual team of servers with cool background music to accompany the Cuban artwork that adorns the walls, then make sure you don't miss Rumba. It's a MUST visit when you're in Naples. Sit back, enjoy a Cerveza Presidente or glass of wine and get ready for delightful authentic Cuban cuisine."]],
          [ [ 26.191381, -81.800628 ], [ "https://ussnemorestaurant.com/"], ["USS Nemo Restaurant"], ["For the Best Seafood in Naples FL. Of the restaurants in Naples Florida, you’ll find the best seafood and an unforgettable fine dining experience at Nemos, where the food is always fresh and the flavors incomparably delicious."]],
          [ [ 26.191381, -81.800628 ], [ "http://www.pinchersusa.com/naples-tin-city.php"], ["Pinchers"], ["Stumbled across pinchers, no frills but good food. Excellent crab and blackened shrimp, right on the water in the Tin City docks. Good service and drinks on happy hour are 2 for 1."]],
          [ [ 26.143597, -81.795287 ], [ "http://www.brooksburgers.com/index.html"], ["Brooks Gourmet Burgers & Dogs"], ["SThis small restaurant in a random strip mall draws huge crowds, helped by its ranking on Tripadvisor as a top 10 burger in the US.  The menu is huge, with a variety of appetizers, salads, and sandwiches. Of course, there are the burgers. There are about 20 different types of burgers, and you can pick any burger with either beef, turkey, chicken, veggie, or bison."]],
          [ [ 26.142053, -81.795451 ], [ "http://www.pazzoitaliancafe.com/" ], [ "Pazzo Italian Cafe" ], ["Pazzo! is a friendly neighborhood restaurant that just happens to have an outstanding world class affordable menu that serves real Italian food, with an incredible wine list. At Pazzo!, we make all of our own sauces, pastas, desserts and everything in between from scratch! At Pazzo!, It’s All About The Food!™"]],
          [ [ 26.140058, -81.794895 ], [ "http://www.7thavenuesocial.com/" ], [ "7th Avenue Social" ], ["We take great pride in the unique taste and work put into each dish. <br>It's more than a plate of food - it is an art.<br>'Naples' late-night crowd suddenly has options! - News-Press.com'"]],
          [ [ 26.194004, -81.799574 ], [ "http://www.lamoragarestaurant.com/" ], [ "Lamoraga" ], ["Lamoraga brings sophisticated Spanish tapas to its first U.S. location here in Naples.<br>'This was the best dinner I have ever had. The creativity and twist they put into their food seals the deal! Not to mention they were all incredibly nice. I had the most wonderful dining experience at this restaurant. I can't wait to go back.'"]],
          [ [ 26.194004, -81.799574 ], [ "http://www.janesonthird.com/j/Home.html" ], [ "Jane’s Garden Cafe" ], ["A fantastic Downtown Naples Garden location with bubbling Koi Pond on the front Courtyard and cosy garden patio at the back, yet a cool interior to relax in during these hot summer days. Offering Breakfast & Lunch with yummy desserts too."], ["Breakfast | Brunch"]],
          [ [ 26.212829, -81.782594 ], [ "http://www.goldiesrestaurant.com/" ], [ "Goldies Restaurant" ], ["'This is definitely the best place to have breakfast in Naples. Not only is the food superb, but talk about bang for the buck! Tremendous value, and exceptional flavor. Excellent service. Everone is courteous and all smiles.'"], ["Breakfast"]]
        ]
      },
      {
        "airbnb":   [
          [ [ 26.133448, -81.79354 ], [ "https://www.airbnb.com/rooms/4597666"], ["52-foot Houseboat"], ["This is truly a unique experience. Staying on the water at the dock in Naples Bay, within walking access to the beautiful beaches, Fifth Ave, Third Street, Tin City and much more. Two bicycles are provided. Water taxi comes every hour. Waterfront restaurants within a stone's throw. Boat rentals, jet ski,kayaks, paddleboards, and Segway tours are only a few blocks away. Take a cruise with the Naples Princess and experience the many waterfront homes."],["$295/night | Sleeps 4"] ],
          [ [ 26.165885, -81.799741 ], [ "https://www.airbnb.com/rooms/7555959"], ["Pool home in Coquina Sands"], ["The large approximate 1/2 acre (lushly landscaped) manicured lot frames this single-level home boasting a circle driveway and beautifully appointed interior: light-infused living areas, dramatic hi-volume vaulted ceilings, rich wood flooring throughout, custom moldings dressing every room. Spacious living room/dining room combination. Chef's kitchen with solid surface countertops, abundant cabinets opens to great room and breakfast room. French doors open to an expansive fenced back yard-behold the newly finished pool and 8 jet spa surrounded by custom designed travertine decking. "], ["$200/night | Sleeps 6 | Min. 7-night stay"]],
          [ [ 26.061761, -81.693262 ], [ "https://www.airbnb.com/rooms/7557988" ], [ "Beautiful Condo, Lazy River" ], ["Our modern two bedroom 2 bath condo with lanai is perfectly located in the Falling Waters gated community. Enjoy your time in the lazy river, playing tennis or the day on the beach at Marco Island. Shops and restaurants are only a short drive away."], ["$150/night | Sleeps 2"]],
          [ [ 26.141897, -81.794728 ], [ "https://www.airbnb.com/rooms/3958140" ], [ "Two Bedroom Resort Suite" ], ["Room for six, this resort suite has a full kitchen and dining room, 2 bathrooms and laundry."], ["$250/night | Sleeps 6"]],
          [ [ 26.176730, -81.813282 ], [ "https://www.airbnb.com/rooms/7481889" ], [ "Bedroom on the beach" ], ["A prime setting set overlooking a tropical beach on the Gulf of Mexico. Guests will find themselves just a short distance away from the centre of Naples where they can explore its host of shops and restaurants."], ["$375/night | Sleeps 4"]],
          [ [ 26.141897, -81.794728 ], [ "https://www.airbnb.com/rooms/7578282" ], [ "Pearl Beach House & Cottage" ], ["Walk to everything Naples has to offer ~ Beaches, parks, shopping & dining just a stones throw away! The Pearl Beach house and Cottage is located in the heart of Old Naples’ historic district."], ["$650/night | Sleeps 10 | Min. 4-night stay"]],
          [ [ 26.141897, -81.794728 ], [ "https://www.airbnb.com/rooms/5478160" ], [ "Tuscan Style Resort: 2 Bedroom Cottage" ], ["Perfectly situated in the heart of Naples. Features a full-service spa, private marina, fantastic pool landscape, various sports facilities, and a beach shuttle."], ["$195/night | Sleeps 4"]],
          [ [ 26.142004, -81.803291 ], [ "https://www.airbnb.com/rooms/3512408" ], [ "Walk to the beach & 5th Ave!" ], ["This is a quiet condo that is literally footsteps to all of downtown Naples attractions and to it's beautiful, white sandy beaches. 2 bedrooms: one with two single beds and one queen size with en suite bath."], ["$300/night | Sleeps 4 | Not child-friendly"]]
        ]
      },
      {
        "beaches":   [
          [ [ 26.31554, -81.8388], [ "http://www.tripadvisor.com/ShowUserReviews-g34091-d531902-r103184921-Barefoot_Beach_Preserve-Bonita_Springs_Florida.html"], ["Barefoot Beach Preserve"], ["The best beach in Naples <br> The sand is powder fine white sand, but bring your beach shoes, because there are lots of shells in the sand. If you walk down to the end of the beach you'll have more luck finding bigger shells, but you have to do a little digging. There is a butterfly garden at Parking lot 1, and you'll be able to see the <a href='https://en.wikipedia.org/wiki/Gopher_tortoise' target='_blank'>gopher tortoises</a> in the greenery along the road."], ["Relaxing"]],
          [ [ 26.132433, -81.795105], [ "http://www.tripadvisor.com/Attraction_Review-g34467-d1452375-Reviews-Lowdermilk_Beach-Naples_Florida.html"], ["Lowdermilk Beach"], ["Great place to spend some quality beach time during the day or a spectacular sunset! There are decent restrooms, volley ball courts, gazebos and a nice covered area to have some lunch...bring yours or there is a little snack bar located under cover."], ["Relaxing"]],
          [ [ 28.019848, -82.819627 ], [ "https://www.floridastateparks.org/park/Caladesi-Island"], ["Caladesi Island State Park"], ["As one of the few completely natural islands along Florida´s Gulf Coast, Caladesi´s white sand beaches were rated America's Best Beach in 2008. Beach lovers can enjoy swimming, sunbathing and beachcombing.<br>You can’t reach this beach by car — only by boat — leaving the quiet beach yours to explore. There are great shells here and it is a popular spot for swimming and picnics too."],["Shell Collecting"] ],
          [ [ 28.019848, -82.819627 ], [ "http://www.sanibel-captiva.org/"], ["Captiva Island"], ["Often considered one of the very best places in the whole state for collecting shells, many people return to Captiva year after year looking for the next great find."],["Shell Collecting"] ]
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

    function openInfoWindow() {
      closeAllInfoWindows();
      infowindow.open(map, marker);
      map.setCenter(marker.getPosition());
      displayDescription(description);
    }

    function closeInfoWindow() {
      infowindow.close(map, marker);
    }

    google.maps.event.addListener( marker, 'click', function() {
      openInfoWindow();
    });

    var itemSelector = $('.'+item);

    itemSelector.on("click", function(e) {
      e.stopPropagation();
      openInfoWindow();

    });

  };


  $.each(locations, function(index, location){

    for (var k in location){
      if (location.hasOwnProperty(k)) {

        var currentCategory = location[k];

        var itemsContainer = $("#"+ k);

        $.each(currentCategory, function(i, item) {

          if (item[4] !== null && item[4] !== undefined) {

          var description =
            "<div class='item-description-container'>" +
              "<h3 class='item-name intro'>" + item[2][0] + "</h3>"+
              "<p class='item-description'>" + item[3][0] + "</p>" +
              "<p class='item-details'>" + item[4][0] + "</p>" +
              "<p class='item-description'><a href='" + item[1][0] + "' target='_blank'>Visit the " + item[2][0] + " website</a></p>" +
            "</div>";

          } else {

            var description =
            "<div class='item-description-container'>" +
              "<h3 class='item-name intro'>" + item[2][0] + "</h3>"+
              "<p class='item-description'>" + item[3][0] + "</p>" +
              "<p class='item-description'><a href='" + item[1][0] + "' target='_blank'>Visit the " + item[2][0] + " website</a></p>" +
            "</div>";
          }

          var attractionItem =
            "<div class='legend-item " + k + " " + k + "-item-" + i + "' data-clicked='nope'>" +
              "<h3 class='item-name'>" + item[2][0] + "</h3>" +
            "</div>";

          itemsContainer.append( attractionItem );

          var lat = item[0][0];
          var lng = item[0][1];

          var markerPoint = new google.maps.LatLng(lat, lng);

          var marker = new google.maps.Marker({
            map:map,
            draggable:false,
            animation: google.maps.Animation.DROP,
            position: markerPoint,
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

// Add a slidetoggle animation to open and close sections in the map list

  $(".toggle-trigger").on("click", function(){
    $(this).find(".legend-item").slideToggle()
  })


  var yourWeather = 'mediocre';
  var yourTemp = 'meh&deg; f';

  if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function(position) {

      // Ajax call for your weather
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?lat="+ position.coords.latitude + "&lon=" + position.coords.longitude+ "&APPID=f705245bb8d87b81bd0ddc233d19ec41&units=imperial",
        crossDomain: true,
        dataType: 'jsonp'
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
    url: "http://api.openweathermap.org/data/2.5/weather?id=4165565&APPID=f705245bb8d87b81bd0ddc233d19ec41&units=imperial",
    crossDomain: true,
    dataType: 'jsonp'
  }).success(function(data) {

        $("#naples-weather").html(data.weather[0].description);
        $("#naples-temp").html(data.main.temp + '&deg;' + ' f');

    });

    // set the date we're counting down to
  var target_date = new Date("April 30, 2016");

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

    // find the amount of "seconds" between now and target
  var current_date = new Date();

  if (current_date < target_date) {

    // update the tag with id "countdown" every 1 second
    setInterval(function () {

      var target_date_time = target_date.getTime();

      // find the amount of "seconds" between now and target
      var current_time = new Date().getTime();

      var seconds_left = (target_date_time - current_time) / 1000;

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

  } else if (current_date >= target_date) {
    $("#time-container").addClass("hide");
    $("#freakout-container").addClass("show");
  }

// Make Instagram API call to pull photos with the hashtag #ritandeclan

// Ajax call for Naples temp, desc, and weather.

  // var noMoreInstas = function() {
  //   $("#more-instas").hide();
  //   $("#insta-end").show();
  // }

  // var getInstasUrl = "https://api.instagram.com/v1/tags/ritandeclan/media/recent?access_token=8953bce455c5461f910bf9050de3891f";

  // var getInstas = function() {

  //     $.ajax({
  //       url: getInstasUrl,
  //       type: 'GET',
  //       crossDomain: true,
  //       dataType: 'jsonp'
  //     }).success(function(data) {

  //         debugger;

  //         nextUrl = data['pagination']['next_url'];

  //         if (nextUrl !== undefined) {
  //           getInstasUrl = nextUrl;
  //         } else {
  //           getInstasUrl = null;
  //           noMoreInstas();
  //         }

  //         instas = data['data'];

  //         for (var i = 0; i < instas.length; i++) {
  //           if (instas[i]['videos'] !== null && instas[i]['videos'] !== undefined) {
  //             $("#insta-gallery").append("<video class='instas' src=" + instas[i]['videos']['standard_resolution']['url'] + " margin='5px' border='10px solid white' width='272px' height='272px' controls></video>");
  //           } else {
  //             $("#insta-gallery").append("<img class='instas' src="+ instas[i]['images']['standard_resolution']['url'] + "></img>");
  //           }

  //         }

  //       });

  // }

  // getInstas();

  // $("#more-instas").on("click", function(){

  //   if (getInstasUrl !== null && getInstasUrl !== undefined) {
  //     getInstas();
  //   } 

  // });


  nameEmailReset = function() { 
    userInput = true;
    console.log("form reset happens here");

    $(".name, .email, .phone").val("");

    $(".event-checkbox").prop("checked", false);
    $("#yes").prop("checked", false);
  }

  // Events Form

  submitEventsForm = function() {

      var formMessage = $("#wedding-events-rsvp").serializeArray();

      $.ajax({
        url: "//formspree.io/declanandrita@gmail.com",
        method: "POST",
        data: {message: formMessage},
        dataType: "json"
      }).done(function (data, status, jqXHR) {

          document.getElementById("wedding-events-rsvp").reset();

          nameEmailReset();

          $("#submit-success-message").fadeIn(3000, 'swing', function(){
            $("#submit-success-message").fadeOut(5000);
          });
        
        }).fail(function (jqXHR,status,err) {

          $("#submit-failure-message").fadeIn(3000, 'swing', function(){
            $("#submit-failure-message").fadeOut(7000);
          });

        });

  }

  $("#btn-yeah").on("click", function(e) {

    e.preventDefault();

    var requiredFields = $(".name, .email, .phone");
    var eventFields = $(".event-checkbox");
    var attendanceWrapper = $(".event-item");

    requiredFields.removeClass("error");
    // attendanceWrapper.removeClass("error");

    userInput = true;
    eventsChosen = true;

    $.each(requiredFields, function(index, input){

      if (input.value == "") {
        userInput = false;

        $(input).addClass("error");

      }

    });

    $.each(eventFields, function(index, input){

      // Check if the attendance field has any input at all. If not, set user input to false, and add error styling
      if (eventFields.is(":checked") == false) {
        eventsChosen = false;
      }

    });

    if (userInput) {

      if (eventsChosen) {

        submitEventsForm();

      } else {

        $("#choose-events").fadeIn(3000, 'swing', function(){
          $('#choose-events').fadeOut(5000);
        });

      }

    } else {

      $("#required-fields").fadeIn(3000, 'swing', function(){
        $('#required-fields').fadeOut(5000);
      });
    }

  });

  // Form accept / decline functions

  // var acceptButton = $("#btn-yes");
  // var declineButton = $("#btn-no");
  // var acceptWrapper = $(".accept-wrapper");
  // var yes = $("#yes");
  // var no = $("#no");

  // accept = function() {
  //   acceptWrapper.addClass("yup");
  //   acceptButton.addClass("selected");
  //   acceptButton.removeClass("unselected");
  //   acceptButton.find(".btn-msg").html("Awesome!")
  //   declineButton.find(".btn-msg").html("Sadly, no")
  //   declineButton.removeClass("selected");
  //   declineButton.addClass("unselected");
  //   $("#yes").prop("checked", true);
  // }

  // decline = function() {
  //   $(".guest-container").remove();
  //   acceptWrapper.removeClass("yup");
  //   declineButton.addClass("selected");
  //   declineButton.removeClass("unselected");
  //   acceptButton.removeClass("selected");
  //   acceptButton.addClass("unselected");
  //   declineButton.find(".btn-msg").html("Bummer!")
  //   acceptButton.find(".btn-msg").html("Absolutely")
  //   $("#no").prop("checked", true);
  // }

  // attendanceReset = function() {
  //   $(".guest-container").remove();
  //   acceptWrapper.removeClass("yup");
  //   declineButton.removeClass("selected");
  //   declineButton.removeClass("unselected");
  //   acceptButton.removeClass("selected");
  //   acceptButton.removeClass("unselected");
  //   declineButton.find(".btn-msg").html("Sadly, no");
  //   acceptButton.find(".btn-msg").html("Absolutely");
  //   $("#no").prop("checked", false);
  //   $("#yes").prop("checked", false);
  // }

  // acceptButton.on("click", function() {
  //   accept();
  // });

  // declineButton.on("click", function(){
  //   decline();
  // })

  // Form conditional work

  // var addGuestButton = $(".add-guest");

  // var guestCounter = 0;

  // function isOdd(num) { return num % 2 === 1;}

  // addGuestNumber = function(currentGuestContainer) {
  //   var guestNumber = parseInt($(currentGuestContainer).index());

  //   if ( !isOdd(guestNumber) ) {
  //     $(currentGuestContainer).addClass("even");
  //   }

  //   $(currentGuestContainer).find(".guest-number").html("Guest # " + guestNumber);
  // }

  // addGuestButton.on('click', function(){

  //   guestCounter += 1;

  //   var guestSection = $(".guest-section");

  //   guestSection.append(
  //     "<div class='guest-container' data-guest-number='" + guestCounter + "'>" +
  //       "<div class='delete-guest' data-guest-number='" + guestCounter + "' ><div class='delete-guest-button'>REMOVE GUEST</div></div>" +
  //       "<p class='guest-number'>" +
  //       "</p>" +
  //       "<p>" +
  //         "Guest's name, please" +
  //       "</p>" +
  //       "<input class='answer name' type='text' name='guest-" + guestCounter + "-name'>" +
  //       "<p>" +
  //         "Guest's email, please" +
  //       "</p>" +
  //       "<input class='answer user-email' type='email' name='guest-" +guestCounter+ "-email'>" +
  //       "<p>" +
  //         "Guest's choice of meal" +
  //       "</p>" +
  //       "<div class='meal-options'>" +
  //         "<div class='meal-wrapper'>" +
  //           "<select class='answer dropdown guest-meal' id='meal-" + guestCounter + "' name='guest-" + guestCounter + "-meal'>" +
  //             "<option value='' selected>Choose meal</option>" +
  //             "<option value='Fish'>Fish</option>" +
  //             "<option value='Beef'>Beef</option>" +
  //             "<option value='Vegetarian'>Vegetarian</option>" +
  //           "</select>" +
  //         "</div>" +
  //       "</div>" +
  //       "<p>" +
  //         "A song this guest would dance to" +
  //       "</p>" +
  //       "<input class='answer' type='text' name='guest-" + guestCounter + "-song'>" +
  //     "</div>"
  //   );

  //   $(".delete-guest[data-guest-number='"+ guestCounter +"']").on("click", function(){

  //     $(this).parent().remove();

  //   });

  //   var currentGuestContainer = ".guest-container[data-guest-number='"+ guestCounter +"']";

  //   addGuestNumber(currentGuestContainer);

  //   guestNumberClass = undefined;

      // Select dropdown styling fix:


  //   $("#meal-" + guestCounter).on("change", function(){

  //     var value= $("#meal-"+ guestCounter + " option:selected").val().toLowerCase();

  //     if (!isFirefox) {

  //       switch (value) {
  //         case "":
  //            $(this).css("padding-left", "18%");
  //            break;
  //         case 'vegetarian':
  //            $(this).css("padding-left", "23.5%");
  //            break;
  //         case 'fish':
  //           $(this).css("padding-left", "41.5%");
  //         case 'beef':
  //           $(this).css("padding-left", "40.5%");
  //         default:
  //           $(this).css("padding-left", "40.5%");
  //           break;
  //       }
  //     } else if (isFirefox) {

  //       $(this).css("padding-left", "0");

  //     }

  //   });

  // });

// Select dropdown styling fix:

  // $("#meal").on("change", function(){

  //   var value= $("#meal option:selected").val().toLowerCase();

  //   if (!isFirefox) {

  //     switch (value) {
  //       case "":
  //          $(this).css("padding-left", "18%");
  //          break;
  //       case 'vegetarian':
  //          $(this).css("padding-left", "23.5%");
  //          break;
  //       case 'fish':
  //         $(this).css("padding-left", "41.5%");
  //       case 'beef':
  //         $(this).css("padding-left", "40.5%");
  //       default:
  //         $(this).css("padding-left", "40.5");
  //         break;
  //     }
  //   } else if (isFirefox) {
  //     $(this).css("padding-left", "0");
  //   }

  // });

  // submitForm = function(attendanceStatus) {

  //     var formMessage = $("#form-test").serializeArray();

  //     $.ajax({
  //       url: "//formspree.io/declanandrita@gmail.com",
  //       method: "POST",
  //       data: {message: formMessage},
  //       dataType: "json"
  //     }).done(function (data, status, jqXHR) {

  //         document.getElementById("form-test").reset();

  //         attendanceReset();

  //         if (attendanceStatus == "yes") {
  //           $("#submit-success-message").fadeIn(3000, 'swing', function(){
  //             $("#submit-success-message").fadeOut(5000);
  //           });
  //         } else if (attendanceStatus == "no"){
  //           $("#submit-decline-message").fadeIn(3000, 'swing', function(){
  //             $("#submit-decline-message").fadeOut(5000);
  //           });
  //         }

  //       }).fail(function (jqXHR,status,err) {

  //         attendanceReset();

  //         $("#submit-failure-message").fadeIn(3000, 'swing', function(){
  //           $("#submit-failure-message").fadeOut(7000);
  //         });

  //       });

  // }

    //  Formspree

  // $("#form-test .btn-submit").on("click", function(e) {

  //   e.preventDefault();

  //   $.each($(".meal-wrapper"), function(index, mealWrapper){
  //     $(mealWrapper).removeClass("error");
  //   });

  //   var requiredFields = $(".name, .email");
  //   var attendanceField = $("input[name=answer-radio]");

  //   var attendanceWrapper = $(".answer-btn-container");
  //   var yesRequiredFields = $("#meal, .guest-meal");

  //   attendanceValue = $("input[name='answer-radio']:checked").val();

  //   requiredFields.removeClass("error");
  //   attendanceWrapper.removeClass("error");

  //   userInput = true;

  //   $.each(requiredFields, function(index, input){

  //     if (input.value == "") {
  //       userInput = false;

  //       input.id == "meal" || $(input).hasClass("guest-meal") ? $(".meal-wrapper").addClass("error") : $(input).addClass("error");

  //     }

  //   });

    // Check if the attendance field has any input at all. If not, set user input to false, and add error styling
  //   if (attendanceField.is(":checked") == false) {
  //     userInput = false;
  //     $.each(attendanceWrapper, function(index, field){
  //       $(field).addClass("error");
  //     })
  //   }

  //   if (userInput) {

  //     if (attendanceValue == "no") {

  //       submitForm("no");

  //     } else if (attendanceValue == "yes") {

  //       yesRequiredFields.removeClass("error");

  //       var yesInput = true;

  //       $.each(yesRequiredFields, function(index, input){

  //         if (input.value == "") {
  //           yesInput = false;
  //           input.id == "meal" || $(input).hasClass("guest-meal") ? $(".meal-wrapper").addClass("error") : $(input).addClass("error");
  //         }

  //       });

  //       if (yesInput) {

  //         submitForm("yes");

  //       } else {

  //         $("#required-fields").fadeIn(3000, 'swing', function(){
  //           $('#required-fields').fadeOut(5000);
  //         });

  //       }

  //     }

  //   } else {

  //     yesRequiredFields.removeClass("error");

  //     $.each(yesRequiredFields, function(index, input){

  //       if (input.value == "") {
  //         input.id == "meal" || $(input).hasClass("guest-meal") ? $(".meal-wrapper").addClass("error") : $(input).addClass("error");
  //       }

  //     });

  //     $("#required-fields").fadeIn(3000, 'swing', function(){
  //       $('#required-fields').fadeOut(5000);
  //     });

  //   }

  // });

  // Scavenger Hunt 

  var listOpen = false;

  var scavengerList = $("#scavenger-list");

  $("#btn-show-list").on("click", function(){
    if (listOpen == false) {
      scavengerList.slideToggle();
      $(this).html("Hide List");
      listOpen = true;
    } else {
      scavengerList.slideToggle();
      $(this).html("Show List");
      listOpen = false;
    }
  })

  // Where to Stay hotel and Airbnb sections

  var airbnbListings = $("#airbnb-listings");
  var hotelListings = $("#hotel-listings");

  var hotelsContainer = $("#hotel-container");
  var airbnbContainer = $("#airbnb-container");

  var hotelList = locations[3].hotels;
  var airbnbList = locations[6].airbnb;

  $.each(hotelList, function(index, hotel){

    var hotelItem =
    "<div class='item'>" +
      "<a class='item-name' href='" + hotel[1][0] + "' target='_blank'>" + hotel[2][0] + "</a>" +
    "</div>";

    hotelsContainer.append( hotelItem );

  });

  $.each(airbnbList, function(index, airbnb){

    var airbnbItem =
    "<div class='item'>" +
      "<a class='item-name' href='" + airbnb[1][0] + "' target='_blank'>" + airbnb[2][0] + "</a>" +
    "</div>";

    airbnbContainer.append( airbnbItem );

  });

  var shownHotels = false;
  var shownAirbnbs = false;

  hotelListings.on("click", function(){

     if (shownHotels == false)   {
        shownHotels = true;
        $(this).find("h3").html("Hide Hotel Listings");
     }
     else if (shownHotels == true)
     {
        $(this).find("h3").html("Show Hotel Listings");
        shownHotels = false;
     }

    hotelsContainer.slideToggle();
  });

  airbnbListings.on("click", function(){

     if (shownAirbnbs == false)   {
        shownAirbnbs = true;
        $(this).find("h3").html("Hide Airbnb Listings");
     }
     else if (shownAirbnbs == true)
     {
        $(this).find("h3").html("Show Airbnb Listings");
        shownAirbnbs = false;
     }

    airbnbContainer.slideToggle();
  });

  // Mobile Menu Open / Close

  var mobileMenu = $("#mobile-menu");
  var headerLinkContainer = $(".header-link-container");

  var open = false;

  removeWindowListeners = function() {

    $(document).off("mouseup.document");

  }

  removeMenuListener = function() {

    mobileMenu.off("click.toggle");

  }

  clickOutsideClose = function() {

    $(document).on("mouseup.document", function (e) {

      if ($(window).width() < 650 && open ) {

        headerLinkContainer.slideToggle(
          function(){
            mobileMenuClick();
            open =false;
            removeWindowListeners();
          }
        );

      }
    });

  }

  mobileMenuClick = function() {

    mobileMenu.on("click.toggle", function(){

      if (!open) {

        headerLinkContainer.slideToggle(
          function(){
            clickOutsideClose();
            open = true;
            removeMenuListener();
          }
        );

      } else {

        headerLinkContainer.slideToggle(function(){
          open = false;
        });

      }

    });

  }

  mobileMenuClick();

    $(window).on('resize', function () {

    if ($(window).width() > 650) {
      headerLinkContainer.show();
    }

  });



});
