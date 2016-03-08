
// var userInput;
// //userInput = $("textArea").val();
// $("textarea").keydown(function(event) {
// if (event.keyCode == 13)
// {
//   userInput = $("textarea").val();
//   post(true, userInput);
//   $("textarea").val("");
//
//   var position = $(".container").prop('scrollHeight');
//   $(".container").scrollTop(position);
// }//end enter if
// });//end keydown event

//-------------VUE-TESTING--------------

var userInput;

//userInput = $("textArea").val();
$("textarea").keydown(function(event) {
if (event.keyCode == 13)
{
  var userInput = ""
  userInput = $("textarea").val();
  post(true,userInput);
  parseInput(userInput);
  $("textarea").val("");
  //
  // //define
  // var MyComponent = Vue.extend({
  //   template: " <div class='box me'><div class='box-header'><div class='box-user'><h3>you</h3><h4>john doe</h4></div><div class='time'>" + getDateTime() + "</div></div><div class='text-content'>" + userInput + "</div></div> "
  // })
  // // register
  // Vue.component('my-component', MyComponent)
  // // create a root instance
  // new Vue({
  //   el: '#chatArea'
// });


  // console.log(userInput);
  // function postVue(){
  //   $("#chatArea").append(" <my-component></my-component> ");
  // }
  // postVue();
  // $("textarea").val("");

  var position = $(".container").prop('scrollHeight');
  $(".container").scrollTop(position);
}//end enter if
});//end keydown event

//-------------VUE-TESTING--------------

//-----------MORE-VUE-TESTING------------
// var userInput = $("textarea").val();
// if(userInput === )
// // this is our Model
// var exampleData = {
//   expression: numbers
// }
//
// // create a Vue instance, or, a "ViewModel"
// // which links the View and the Model
// var exampleVM = new Vue({
//   el: '#example-1',
//   data: exampleData
// })

//------------MORE-VUE-TESTING-----------

function post(me, message)//me === a boolean true is me, false is not me (ie: Tom Riddle, the Dark one, he who must not be named, LORD VOLDERMORT.)
{
  if(me)
  {
    $("#chatArea").append("<div class='box me'><div class='box-header'><div class='box-user'><h3>you</h3><h4>john doe</h4></div><div class='time'>" + getDateTime() + "</div></div><div class='text-content'>" + message + "</div></div>");
    var position = $(".container").prop('scrollHeight');
    $(".container").scrollTop(position);
  }//end if
  else if(!me)//if it's not me talking... it must be chatti.
  {
    $("#chatArea").append("<div class='box ai'><div class='box-header'><div class='box-user'><h3>Chatti</h3><h4>Tom R.</h4></div><div class='time'>" + getDateTime() + "</div></div><div class='text-content'>" + message + "</div></div>");
    var position = $(".container").prop('scrollHeight');
    $(".container").scrollTop(position);
  }

}//end post

function parseInput(userInput)
{
  var inputAry = userInput.split(" ");
  //console.log(inputAry);

  if(inputAry[0].substr(0,1) === "@")//if the FIRST character in the FIRST cell of the input array is @, start doing commands.
  {
    var sentenceToTrans =" ";//used for translations.
    if(inputAry[0] === "@gif")
    {getGif(inputAry[1]);}//FOR SOME REASON I HAVE TO CALL POST FROM THE GETGIF FUNCTION. SCOPE!?!?!?!?! Y U DO THIS?! WHAAAYYYYYYYYY?!?!?!?!?!?!
    else if(inputAry[0] === "@time")
    {post(false, "It's in every message you dingus.");}
    else if(inputAry[0] === "@temp")
    {getCurrTemp(inputAry[1],inputAry[2]);}//just as with the gif, i have to put the post call in the getcurrtemp function. I hate this. i hates it.
    else if(inputAry[0] === "@forecast")
    {get3DayForecast(inputAry[1],inputAry[2]);}//same deal. ლ(ಠ益ಠლ)
    else if(inputAry[0] === "@spanish" || inputAry[0] === "@es")
    {
      for(var p = 1;p<inputAry.length;p++)
      {sentenceToTrans = sentenceToTrans +" "+ inputAry[p];}//end for
      translate("es", sentenceToTrans);
    }//end spanish translation
    else if(inputAry[0] === "@french" || inputAry[0] === "@fr")
    {
      for(var p = 1;p<inputAry.length;p++)
      {sentenceToTrans = sentenceToTrans +" "+ inputAry[p];}//end for
      translate("fr", sentenceToTrans);
    }//end spanish translation
    else if(inputAry[0] === "@german" || inputAry[0] === "@de")
    {
      for(var p = 1;p<inputAry.length;p++)
      {sentenceToTrans = sentenceToTrans +" "+ inputAry[p];}//end for
      translate("de", sentenceToTrans);
    }//end spanish translation
    else if(inputAry[0] === "@portuguese" || inputAry[0] === "@pt")
    {
      for(var p = 1;p<inputAry.length;p++)
      {sentenceToTrans = sentenceToTrans +" "+ inputAry[p];}//end for
      translate("pt", sentenceToTrans);
    }//end spanish translation
    else if(inputAry[0] === "@japanese" || inputAry[0] === "@ja")
    {
      for(var p = 1;p<inputAry.length;p++)
      {sentenceToTrans = sentenceToTrans +" "+ inputAry[p];}//end for
      translate("ja", sentenceToTrans);
    }//end spanish translation
  }
  else//not a command.
  {
    //we can check for other fun stuff here.
  }
}//end parse input.

function getDateTime()//this function parses the current time into a human readable format.
{
  var day = new Date;//gets the day of the week in a number 0-6
  day = day.getDay();
  var month = new Date;
  month = month.getMonth();//gets the month in a number 0-11
  switch(month)//changes the month number into a word
  {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    default:
      month = "Dec";
      break;
  }//end swtich
  switch(day)//changes the day number into a word.
  {
    case 0:
      day = "Sun.";
      break;
    case 1:
      day = "Mon.";
      break;
    case 2:
      day = "Tues.";
      break;
    case 3:
      day = "Wed.";
      break;
    case 4:
      day = "Thu.";
      break;
    case 5:
      day = "Fri.";
      break;
    default:
      day = "Sat.";
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

  return (hour + ":" + minutes + ampm + " " + day + ", " + month + " " + numDate + " " + year);
}

//when the user enters ""@temp city, st." we'll call this function.
function getCurrTemp(city, st)
{
  $.getJSON("http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/" + st + "/" + city + ".json", function(cityData){
    post(false, "It's " + cityData.current_observation.temp_f + "° F in " + city + ", " + st);

  });//end temp json call
}//end getCurrTemp

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
    console.log("data = " +data1[0].source.url);
    var url = data1[0].source.url;
    console.log("url = " + url);
    post(false, "<img src='" + url + "'>");
  });//end done
}//end getgif

//if the user enters "@es sentence" or "@fr sentence" we call the translate function.
//also "@ja", "@pt", "@de"

//the below code works.
//translate("german", "i must regain my honor");
//getGif("snape");
//getCurrTemp("Durham", "NC");
//get3DayForecast("Durham", "nc");
