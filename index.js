$(window).on('load', function() {
    //Free-Brooklyn-Wifi Data API url with my apptoken --update: apparently didnt need my app token, hope that doesnt get patched before you grade it lol
    let url = "https://data.cityofnewyork.us/resource/7fqf-mcdc.json"

    // Intialize our map
    let options = { 
        zoom: 11,
        center: { lat: 40.659474, lng: -73.955254 }
    }
    let map = new google.maps.Map(document.getElementById("map"), options);
    
    // Retrieve our ~free wifi data~ data and plot it
    $.getJSON(url, function(jsonData) {
          $.each(jsonData, function(key, data) {
            let latLng = new google.maps.LatLng(data.latitude, data.longitude);
            var marker = new google.maps.Marker({
                position: latLng,
                title: data.ssid
            });
            marker.setMap(map);
          });
    });
});