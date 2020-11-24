$(window).on('load', function() {
    //Free-Brooklyn-Wifi Data API url with my apptoken
    let url = "https://data.cityofnewyork.us/resource/7fqf-mcdc.csv?%24limit=5000&%24%24app_token=U6xeHSKTAykxoBEHDJwlTwTXV"

    // Intialize our map
    let options = { 
        zoom: 11,
        center: { lat: 40.659474, lng: -73.955254 }
    }
    let map = new google.maps.Map(document.getElementById("map"), options);
    
    // Retrieve our data and plot it
    $.getJSON(url, function(data, textstatus) {
          $.each(data, function(i, entry) {
              var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(entry.location_1.coordinates[1], 
                                                   entry.location_1.coordinates[0]),
                  map: map,
                  title: location.name
              });
          });
    });
});