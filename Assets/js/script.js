$(function() {
'use strict';

var userInput;
//userInput = $("textArea").val();
$("textarea").keydown(function(event) {
if (event.keyCode == 13)
{
  userInput = $("textarea").val();
  post(true, userInput);
  $("textarea").val("");
}//end enter if
});//end keydown event

function post(me, message)//me === a boolean true is me, false is not me.
{
  if(me)
  {
    $("#chatArea").append("<div class='box'><div class='box-header'><div class='box-user'><h3>you</h3><h4>john doe</h4></div><div class='time'>5:55pm</div></div><div class='text-content'>" + message + "</div></div>")
  }//end if

}//end post

function getDateTime()//this function parses the current time into a human readable format.
{
  var day = new Date;//gets the day of the week in a number 0-6
  day = day.getDay();
  var month = new Date;
  month = month.getMonth();//gets the month in a number 0-11
  switch(month)//changes the month number into a word
  {
    case 0:
      month = "January";
      break;
    case 1:
      month = "Feburary";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    default:
      month = "December";
      break;
  }//end swtich
  switch(day)//changes the day number into a word.
  {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    default:
      day = "Saturday";
  }//end swtich
  var numDate = new Date;
  numDate = numDate.getDate();//pulls just the date of the month out of the new date
  var year = new Date;
  year = year.getFullYear();//pulls the year out
  var hour = new Date;
  hour = hour.getHours();//pulls the hours out
  var minutes = new Date;
  minutes = minutes.getMinutes();// pulls the minutes out.

  var ampm; //is it am or pm?
  if(hour>12)
  {
    hour = hour-12;
    ampm = "pm";
  }
  else{ampm ="am";}

  return (hour + ":" + minutes + ampm + " on " + day + ", the " + numDate + "th of " + month + " " + year);
}

//when the user enters ""@temp city, st." we'll call this function.
function getCurrTemp(city, st)
{
  $.getJSON("http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/" + st + "/" + city + ".json", function(cityData){
    $("#test").text("It's " + cityData.current_observation.temp_f + " ° F in " + city + ", " + st);

  });//end temp json call
}//end getCurrTemp

//when the user enters "@forecast city, st." we'll call this function
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

//when the user enters "@gif topic" we'll call this function
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
//if the user enters "@es sentence" or "@fr sentence" we call the translate function.
//also "@ja", "@pt", "@de"



//the below code works. it pops the output into #test. but we can put it anywhere.
translate("german", "i must regain my honor");
//getGif("snape");
//getCurrTemp("Durham", "NC");
//get3DayForecast("Durham", "nc");

});//end file
