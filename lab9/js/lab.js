/*
 *Author: Lindsey McDermott
 *Date: May 4, 2022
 *Description: Practicing in Javascript with DOM Manipulation
 */

var outputEl = document.getElementById("title");

var new1El = document.createElement("button");

new1El.innerHTML = "Ouch!";

outputEl.appendChild(new1El)

var output2El = document.getElementById("lockandkey");

var new2El = document.createElement("p");

new2El.innerHTML = "This is our other created element"

outputEl.appendChild(new2El)
