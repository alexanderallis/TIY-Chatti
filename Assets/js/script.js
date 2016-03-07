$(function() {
'use strict';

//when the user enters ""@temp city, st." we'll call this function.
function getCurrTemp(city, st)
{
  $.getJSON("http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/" + st + "/" + city + ".json", function(cityData){
    $("#test").text("It's " + cityData.current_observation.temp_f + " ° F in " + city + ", " + st);

  });//end temp json call
}//end getCurrTemp

function get3DayForecast(city, st)
{
  $.getJSON("http://api.wunderground.com/api/bb16e63b66cd1f09/forecast/q/" + st + "/" + city +".json", function(forecastData){

    //tonight
    $("#test").append(forecastData.forecast.txt_forecast.forecastday[1].title);
    $("#test").append("<br>");
    $("#test").append(forecastData.forecast.txt_forecast.forecastday[1].fcttext);
    $("#test").append("<br><br>");
    //tomorrow
    $("#test").append(forecastData.forecast.txt_forecast.forecastday[2].title);
    $("#test").append("<br>");
    $("#test").append(forecastData.forecast.txt_forecast.forecastday[2].fcttext);
    $("#test").append("<br><br>");
    //tomorrow night
    $("#test").append(forecastData.forecast.txt_forecast.forecastday[3].title);
    $("#test").append("<br>");
    $("#test").append(forecastData.forecast.txt_forecast.forecastday[3].fcttext);
    $("#test").append("<br><br>");
    //day after tomorrow
    $("#test").append(forecastData.forecast.txt_forecast.forecastday[4].title);
    $("#test").append("<br>");
    $("#test").append(forecastData.forecast.txt_forecast.forecastday[4].fcttext);
    $("#test").append("<br><br>");
    //... that night
    $("#test").append(forecastData.forecast.txt_forecast.forecastday[5].title);
    $("#test").append("<br>");
    $("#test").append(forecastData.forecast.txt_forecast.forecastday[5].fcttext);
    $("#test").append("<br><br>");
  })//end forecast json call
}//end get3DayForecast

function getGif(topic)
{
  $.ajax(
  {
    dataType: 'json',
    url: 'https://api.popkey.co/v2/media/search?q=' + topic ,
    // method: 'GET',
    beforeSend: function (xhr)
     {
       var base64Credentials = "ZGVtbzplYTdiNjZmYjVlNjZjNjJkNmNmYTQ5ZmJlMGYyN2UwMDJjMjUxNGVlZDljNzVlYTlmNjVlOWQ3NTk4Y2I5YTkw";
       xhr.setRequestHeader('Authorization', 'Basic ' + base64Credentials);
     }//end beforesend
   }).done(function(data1)//end ajax call
   {
    $("#test").append("<img src='" + data1[0].source.url + "'>");
  });//end done
}//end getgif




//the below code works. it pops the output into #test. but we can put it anywhere.
//translate("fr", "cheese omlette");
//getGif("snape");
//getCurrTemp("Durham", "NC");
//get3DayForecast("Durham", "nc");

});//end file
