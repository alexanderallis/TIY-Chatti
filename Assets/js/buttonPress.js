$(".button").click(function(event) {

  var userInput = ""
  userInput = $("textarea").val();
// <<<<<<< HEAD
//
//
//   //define
//   var MyComponent = Vue.extend({
//     template: " <div class='box me'><div class='box-header'><div class='box-user'><h3>you</h3><h4>john doe</h4></div><div class='time'>" + getDateTime() + "</div></div><div class='text-content'>" + userInput + "</div></div> "
//     // template: post(me, message);
//   })
//   // register
//   Vue.component('my-component', MyComponent)
//   // create a root instance
//   new Vue({
//     el: '#chatArea'
//   })
//
//
//   console.log(userInput);
//   function postVue(){
//     $("#chatArea").append(" <my-component></my-component> ");
//   }
//   postVue();
// =======
  post(true,userInput);
  parseInput(userInput);
// >>>>>>> bbb2f06c9a4d0bd95452349fa47ac9e89e10276a
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
});//end keydown event
