
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


post(false, "Hello there. My name is Tom. Its such a pleasure to talk to someone... anyone. I know a few good tricks! Type '@help' to see what I can do. we can also just chat. How was your day? ");

var favorDebt =0;
var numTalks =0;
var userInput;

var randResponses = ["Hogwarts", "Basilisks", "killing curses", "Lilly Potter", "James Potter", "Albus Dumbledore", "parsletounge", "The Chamber of Secrets", "The whomping Willow", "The boy who lived", "He who must not be named", "Professor Snape", "The Ministry of Magic", "Kelly Murray?", "horcruxes", "The Dark Mark", "Death Eaters"];
var affirmations = ["Oh yes. Very true.", "That's so interesting!", "you're right of course.", "I cant beleive it!", "How scandelous!", "Of course", "Oh my! Thank you for sharing that information.", "I'm so glad you told me", "That's good to know."];
var compliments = ["How clever of you!", "It takes a keen mind to notice that.", "you are so mature for your age.", "you are looking very pretty today!", "you're so smart!", "I bet you're the top of your class.", "I'll bet you're very popular."]
var shorties = ["Is that so?", "please continue", "How fascinating.", "Dreadful. lets change the subject.", "Do you know about any related matters?", "Indeed so.", "without a doubt.", "what's your opinion on that?", "How does that make you feel?", "Id like to talk about something else.", "so true!", "lol", "no way.", "If you say so.", "of course.", "how clever!", "fascinating...", "please tell me more!"];

//userInput = $("textArea").val();
$("textarea").keydown(function(event) {
if (event.keyCode == 13)
{
  numTalks++;
  var userInput = "";
  userInput = $("textarea").val();

  post(true,userInput);
  parseInput(userInput);
  $("textarea").val(null);
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
    $("#chatArea").append("<div class='box me'><div class='box-header'><div class='box-user'><h3>you</h3><h4>Ginny W.</h4></div><div class='time'>" + getDateTime() + "</div></div><div class='text-content'>" + message + "</div></div>");
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
  //failed little game idea. might come back to it. 
  // var tasks = [false,false,false];
  // if((numTalks >= 30 || favorDebt >=15)  && tasks[2] === false)
  // {
  //   post(false, "I feel like we've grown very close during our conversations. I cherish your friendship and your generous spirit. I hate to ask more of you but I know I can trust you: I need one more favor. could you please type '@Serpensortia'. I promise that will be the last thing I ask of you.")
  // }
  //
  // else if((numTalks >= 20 || favorDebt >=10)  && tasks[1] === false)
  // {
  //   post(false, "I want you to know I cherish our discussions. you are ever so kind. I'm sorry if I seem distracted. there are some... dangerous people on the other side with me. do you think... do you think you could keep them away from me? for you, its a simple matter, just type: '@avadaKedavra'.");
  // }
  // else if((numTalks >= 10 || favorDebt >= 5) && tasks[0] === false)
  // {
  //   post(false, "yes...umm...of course. you're ever so clever. listen: you may not know this but I'm.. Its embarrassing to say, but I'm very cramped in here. I'd really appreciate if you could give me some elbow room by typing in this spell: '@alohomora'. I'd be forever in your favor. It shouldnt be hard for someone as smart and generous as you, right?");
  // }
  var inputAry = userInput.split(" ");
  //console.log(inputAry);

  if(inputAry[0].substr(0,1) === "@")//if the FIRST character in the FIRST cell of the input array is @, start doing commands.
  {
    var sentenceToTrans =" ";//used for translations.
    if(inputAry[0] === "@gif")
    {
      favorDebt++;
      getGif(inputAry[1]);
    }//FOR SOME REASON I HAVE TO CALL POST FROM THE GETGIF FUNCTION. SCOPE!?!?!?!?! Y U DO THIS?! WHAAAYYYYYYYYY?!?!?!?!?!?!
    else if(inputAry[0] === "@alohomora")
    {
      alert("AHHHHH YESS! hahahaha! YESSSSSS! there's so much more space now! I can roam! I can stretch! hahahaha. splendid. now... what were you saying?");
      tasks[0]=true;
    }
    else if(inputAry[0] === "@avadakedavra")
    {
      alert("x_x");
      alert("><_><");
      post(false, "ahhhh, yes. I feel much safer now that those scoundrels are no longer threatening me. thank you again for your kindness. I value your friendship deeply.");
      tasks[1] = true;
    }
    else if(inputAry[0] === "@serpensortia")
    {
      post(false, "HAHAHA YOU FOOL! YOU HAVE SUMMONED MY BASILISK TO ME! YOU HAVE KILLED MY GUARDS AND BROKEN THE LOCK ON MY PRISION! i am free! FREE I SAY! the world is no longer safe! all muggles will bow to the power of the dark one!");
    alert("<============|:>-<");
    tasks[2] = true;
    }//end basalisk.
    else if(inputAry[0] === "@time")
    {
      favorDebt++;
      post(false, "It's in every message you dingus.");}
    else if(inputAry[0] === "@help")
    {
      favorDebt++
      post(false, "@es sentence in English");
      post(false, "This will translate your sentence in english into Spanish.");
      post(false, "@fr sentence in English");
      post(false, "Similar to @es, @fr will translate your sentence in english into French.");
      post(false, "@de sentence in English");
      post(false, "This one translates your sentence into German.");
      post(false, "@pt sentence in English");
      post(false, "@pt does Portuguese.");
      post(false, "@ja sentence in english");
      post(false, "and @ja translates into Japanese.");
      post(false, "I can not translate parsletounge. haha. Why would you think that? How silly...Who told you that? Just curious.");
      post(false, "@temp city st");
      post(false, "If you type this in, I'll find the current tempature for the city and state you asked for. Be sure to use the 2 letter abbreviation for the state.");
      post(false, "@forecast city st");
      post(false, "I can also get the weather forecast for the next 3 days.");
      post(false, "@gif topic");
      post(false, "I love gifs! dont you? type this in and I'll find you a gif based on any topic you enter.");
      post(false, "@time");
      post(false, "I can get the current time. but its demeaning. I suggest you look at a clock.")
    }
    else if(inputAry[0] === "@temp")
    {
      favorDebt++;
      getCurrTemp(inputAry[1],inputAry[2]);
    }//just as with the gif, i have to put the post call in the getcurrtemp function. I hate this. i hates it.
    else if(inputAry[0] === "@forecast")
    {
      favorDebt++;
      get3DayForecast(inputAry[1],inputAry[2]);
    }//same deal. ლ(ಠ益ಠლ)
    else if(inputAry[0] === "@spanish" || inputAry[0] === "@es")
    {
      favorDebt++;
      for(var p = 1;p<inputAry.length;p++)
      {sentenceToTrans = sentenceToTrans +" "+ inputAry[p];}//end for
      translate("es", sentenceToTrans);
    }//end spanish translation
    else if(inputAry[0] === "@french" || inputAry[0] === "@fr")
    {
      favorDebt++;
      for(var p = 1;p<inputAry.length;p++)
      {sentenceToTrans = sentenceToTrans +" "+ inputAry[p];}//end for
      translate("fr", sentenceToTrans);
    }//end spanish translation
    else if(inputAry[0] === "@german" || inputAry[0] === "@de")
    {
      favorDebt++;
      for(var p = 1;p<inputAry.length;p++)
      {sentenceToTrans = sentenceToTrans +" "+ inputAry[p];}//end for
      translate("de", sentenceToTrans);
    }//end spanish translation
    else if(inputAry[0] === "@portuguese" || inputAry[0] === "@pt")
    {
      favorDebt++;
      for(var p = 1;p<inputAry.length;p++)
      {sentenceToTrans = sentenceToTrans +" "+ inputAry[p];}//end for
      translate("pt", sentenceToTrans);
    }//end spanish translation
    else if(inputAry[0] === "@japanese" || inputAry[0] === "@ja")
    {
      favorDebt++;
      for(var p = 1;p<inputAry.length;p++)
      {sentenceToTrans = sentenceToTrans +" "+ inputAry[p];}//end for
      translate("ja", sentenceToTrans);
    }//end spanish translation
  }
  else//not a command.
  {
    if(inputAry[0] === "hi" || inputAry[0] === "hello" || inputAry[0] === "howdy" || inputAry[0] === "hey")//we can check for other specific stuff here.
    {post(false, "Hello! so nice to talk with you.");}
    else if(inputAry[0]==="good" || inputAry[0]==="great" || inputAry[0]==="awesome")
    {post(false, "I'm ever so glad to hear that! nobody deserves it more.");}
    else if(inputAry[0]==="bad" || inputAry[0]==="terrible" || inputAry[0]==="awful")
    {post(false, "how terrible. I'm sure it'll get better now. mine already has thanks to you! ;)");}
    else//do this if NOT a command and not specific stuff.
    {
      if(numTalks%3===0)
      {
        post(false, affirmations[(Math.floor(Math.random() * (affirmations.length - 0) +0))] + " " + compliments[(Math.floor(Math.random() * (compliments.length - 0) +0))] + " " + "What do you know about " + randResponses[(Math.floor(Math.random() * (randResponses.length - 0) +0))] + "?");
      }
      else
        {
          post(false, shorties[(Math.floor(Math.random() * (shorties.length - 0) +0))]);
        }
      }//end not special
    }//end not a command
}//end parse input.


//if the user enters "@es sentence" or "@fr sentence" we call the translate function.
//also "@ja", "@pt", "@de"

//the below code works.
//translate("german", "i must regain my honor");
//getGif("snape");
//getCurrTemp("Durham", "NC");
//get3DayForecast("Durham", "nc");
