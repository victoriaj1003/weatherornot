
var myLat = ""
var myLon = ""

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(successful, error);
} else {
  alert("geolocation is not available on your device");
}

function error() {
  alert("sorry, we can't find your location");
}

function successful(position) {


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

// var json = JSON.parse(myForecast);
// console.log(json);
 // if (typeof myForecast == 'object') { console.log("it's an object"); } else {console.log("nope");}
 console.log(typeof myForecast);
});

// var location = data['currentobservation']['name'];
// var temp = data['currentobservation']['Temp'];
// var desc = data['currentobservation']['Weather'];
// var windchill = data['currentobservation']['WindChill'];
//
// });
