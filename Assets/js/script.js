$(function() {
'use strict';

//when the user enters ""@temp city, st." we'll call this function.
function getCurrTemp(city, st)
{
  $.getJSON("http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/" + st + "/" + city + ".json", function(cityData){
    $("#test").text(cityData.current_observation.temp_f);

  });//end getjson call
}//end getCurrTemp

getCurrTemp("Durham", "NC");

});//end file
