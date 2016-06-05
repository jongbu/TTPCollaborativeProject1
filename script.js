
//40.730610,-73.935242);


var locations = [
      ['Stacy SuperMarket',  40.635920, -73.938587, 4],
      ['Ryan Groceries',  40.71, -73.831718, 5],
      ['ABC Deli', 40.74, -73.831714, 3],
      ['E&J Restaurant',  40.75, -73.831719, 2],
      ['Joseph Pizzeria',40.733809, -73.986652,6],
      ['Italian Pizza',  40.675249, -73.983562, 1],
      ['Indian Cuisine',  40.763720, -73.912838, 7],
      ['Uptown Bakeries',  40.763720, -73.912838, 8],
      ['Ramen Delight',  40.720019, -73.906315, 9]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(40.730610,-73.935242),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        animation:google.maps.Animation.BOUNCE,
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }