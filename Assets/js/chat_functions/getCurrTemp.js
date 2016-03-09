function getCurrTemp(city, st)//when the user enters ""@temp city, st." we'll call this function.
{
  $.getJSON("http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/" + st + "/" + city + ".json", function(cityData){
    post(false, "It's " + cityData.current_observation.temp_f + "° F in " + city + ", " + st);

  });//end temp json call
}//end getCurrTemp
