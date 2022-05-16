/*
 *Author: Lindsey McDermott
 *Date: May 9, 2022
 *Description:Javascript events and forums
 */
//Return One, Two, Twelve, amd Eleven
//Depending on length mod 4
function theReaping(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "District 1"
  }
else if (mod == 1) {
  return "District 2"
}
else if (mod == 2) {
  return "District 11"
}
else if (mod == 3) {
  return "District 12"
}
}
var myButton = document.getElementById("button");
myButton.addEventListener("click",function() {
  var name = document.getElementById("input").value;
  var district = theReaping(name);
  newText = "<p>You have been chosen to represent " + district + "</p>";
  document.getElementById("output").innerHTML = newText;
})
