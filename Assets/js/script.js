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
    $("#chatArea").append("<div class='box me'><div class='box-header'><div class='box-user'><h3>you</h3><h4>john doe</h4></div><div class='time'>" + getDateTime() + "</div></div><div class='text-content'>" + message + "</div></div>")
  }//end if
  else//if it's not me talking... it must be chatti.
  {
    $("#chatArea").append("<div class='box ai'><div class='box-header'><div class='box-user'><h3>Chatti</h3><h4>Tom Riddle</h4></div><div class='time'>" + getDateTime() + "</div></div><div class='text-content'>" + message + "</div></div>");
  }

}//end post

function parseInput()
{
  var inputAry =[];
  inputAry = ($("textarea").val()).split(" "); //get each word in the user input into its own cell in an array.

  if(inputAry[0].substr(0,1) === "@")//if the FIRST character in the FIRST cell of the input array is @ start doing commands.
  {
    if(inputAry[0] === "@gif")
    {post(false, getGif(inputAry[1]));}
  }
  else//not a command.
  {
    //we can check for other fun stuff here.
  }
}

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

  return (hour + ":" + minutes + ampm + " " + day + ", " + month + " " + numDate + "th " + year);
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
    var imgTag = ("<img src='" + data1[0].source.url + "'>");
    return imgTag;
  });//end done
}//end getgif


//if the user enters "@es sentence" or "@fr sentence" we call the translate function.
//also "@ja", "@pt", "@de"

//the below code works. it pops the output into #test. but we can put it anywhere.
//translate("german", "i must regain my honor");
//getGif("snape");
//getCurrTemp("Durham", "NC");
//get3DayForecast("Durham", "nc");

});//end file
