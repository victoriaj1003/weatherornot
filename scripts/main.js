


var myLat = ""
var myLon = ""

var successful = function (position) {

    myLat = position.coords.latitude;
    myLon = position.coords.longitude;
};

var getLocation = function(callback){
    navigator.geolocation.getCurrentPosition(function(pos){
        successful(pos);
        typeof callback === 'function' && callback(myLat, myLon);
    }, function(){
        alert("fail");
    });
};
getLocation(function(pos){
   myForecast = "http://forecast.weather.gov/MapClick.php?lat=" + myLat + "&lon=" + myLon + "&FcstType=json"
  //  new url for weather.gov as of April 4, 2017
  //  myForecast = "https://forecast-v3.weather.gov/point/" + myLat + "," + myLon
    console.log(myLat, myLon);
    console.log(myForecast);
});

// $.ajax({
//   url : getLocation,
//   datatype : "json",
//   successful : function(data) {
//     var location = ['location']['city'];
//     var temp = ['currentobservation']['temp']
//   }
// })
