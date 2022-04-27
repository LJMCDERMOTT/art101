/*
 *Author: Lindsey McDermott
 *Date: April 24, 2022
 *Description: Practicing in Javascript
 */

 // sortPassword - a function that takes user input and sorts the letters of the sortPassword
 function sortPassWord() {
   var passWord = window.prompt("Hi. Enter your password to proceed.");
   console.log("passWord =", passWord);
   // split string to arrays
   var passWordArray = passWord.split('');
   console.log("passWordArray=", passWordArray);
   //sort the array
   var passWordArraySort = passWordArray.sort();
   console.log("passWordArraySort =", passWordArraySort);
   // join array back to a string
   var passWordSorted = passWordArraySort.join('');
   console.log("passWordSorted = ", passWordSorted);
   // password.toLower().split("").sort().join("")
   return passWordSorted;
 }

// output
document.writeln("Hi. Welcome to our lab. Here we scrambled your password for your privacy: ",
      sortPassWord(), "</br>");
