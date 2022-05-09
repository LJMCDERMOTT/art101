/*
 *Author: Lindsey McDermott
 *Date: May 9, 2022
 *Description:Javascript events and forums
 */

//Find the element
var button = document.getElementById('my-button')

//Tell the function what to do. In this case the user will be asked to input their username with the prompt function.
function sayTheName(){
  var name = prompt('Input Your Name');
  var h1 = document.querySelector('h1');
  //The inputted information will replace "Hello Worl" with Hello + user's name."
  h1.innerText = "Hello " + name;
}
//This will listen for a button click and then bring up the prompt window for inputting the user's name.
button.addEventListener('click', sayTheName);

button.style.backgroundColor = "green";
button.style.color = "black";
