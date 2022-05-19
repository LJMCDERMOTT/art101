/*
 *Author: Lindsey McDermott
 *Date: May 18, 2022
 *Description: Experimenting with Loops
 */
//given a number and an object that looks like this:
// (3: "Fizz", 5: "Buzz", 7:"Boom")
//loops over the numbers and outputs the numbers and their matchings texts
//for Factors
function fizzBuzz() {
  for (let i = 1; i <= 200; i++) {
    //defining the string
    var str ="";
    //Making a string for numbers divisible by 3
    if (i % 3 == 0) {
      str += "Fizz";
    }
    //Making a string for numbers divisible by 5
    if (i % 5 == 0) {
      str += "Buzz";
    }
    //Making a string for numbers divisible by 7
    if (i % 7 == 0) {
      str += "Boom";
    }
  //Making a string for numbers not divisble by 3, 5, or 7
  if (str == "") {
    str += i;
  } else {
    str += "!";
  }
  //code for putting output at the bottom
  $("#output").append("<p>" + str + "</p>")
  }
}
//recall the function
fizzBuzz();
