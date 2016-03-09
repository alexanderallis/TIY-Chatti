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
