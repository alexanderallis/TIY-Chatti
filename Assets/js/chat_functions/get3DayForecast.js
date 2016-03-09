//when the user enters "@forecast city, st." we'll call this function
function get3DayForecast(city, st)
{
  $.getJSON("http://api.wunderground.com/api/bb16e63b66cd1f09/forecast/q/" + st + "/" + city +".json", function(forecastData){

    //tonight
    post(false, forecastData.forecast.txt_forecast.forecastday[1].title + "\n" + forecastData.forecast.txt_forecast.forecastday[1].fcttext);
    post(false, forecastData.forecast.txt_forecast.forecastday[2].title + "\n" + forecastData.forecast.txt_forecast.forecastday[2].fcttext + "\n\n" + forecastData.forecast.txt_forecast.forecastday[3].title + "\n" + forecastData.forecast.txt_forecast.forecastday[3].fcttext);
    post(false, forecastData.forecast.txt_forecast.forecastday[4].title + "\n" + forecastData.forecast.txt_forecast.forecastday[4].fcttext + "\n\n" + forecastData.forecast.txt_forecast.forecastday[5].title + "\n" + forecastData.forecast.txt_forecast.forecastday[5].fcttext);
  })//end forecast json call
}//end get3DayForecast
