/*
 *Author: Lindsey McDermott
 *Date: May 9, 2022
 *Description:Javascript events and forums
 */

$("#challenges").append("<button id='challenge-button'>Press Me</button>")

$("#challenge-button").click(function(){
  $("#challenges").toggleClass("special");
})
$("#problems").append("<button id='problem-button'>Press Me</button>")

$("#problem-button").click(function(){
  $("#problems").toggleClass("special");
})
$("#results").append("<button id='result-button'>Press Me</button>")

$("#result-button").click(function(){
  $("#results").toggleClass("special");
})
