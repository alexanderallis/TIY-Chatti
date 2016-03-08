$('textarea')
  .focus(function() { $(this).css("background", "none") })
  .focus(function() { $(this).css("background-color", "white") })
  // .keyup(function() { if ($(this)[0].value == '') { $(this).css("background", "url(Assets/imgs/background_2.png) right bottom no-repeat") } })
  // .keyup(function() { if ($(this)[0].value == '') { $(this).css("background-color", "white") })
  .blur(function() { if ($(this)[0].value == '') { $(this).css("background", "url(Assets/imgs/background_2.png) right bottom no-repeat") } })
  .blur(function() { $(this).css("background-color", "white") })
//  https://css-tricks.com/textarea-tricks/






// <!-- <script>
// $('textarea')
//   .focus(function() { $(this).css("background", "none") })
//   .focus(function() { $(this).css("background-color", "white") })
//   // .keyup(function() { if ($(this)[0].value == '') { $(this).css("background", "url(Assets/imgs/background_2.png) right bottom no-repeat") } })
//   // .keyup(function() { if ($(this)[0].value == '') { $(this).css("background-color", "white") })
//   .blur(function() { if ($(this)[0].value == '') { $(this).css("background", "url(Assets/imgs/background_2.png) right bottom no-repeat") } })
//   .blur(function() { $(this).css("background-color", "white") })
// //  https://css-tricks.com/textarea-tricks/
// </script> -->
