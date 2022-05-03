/*
 *Author: Lindsey McDermott
 *Date: May 1, 2022
 *Description: Practicing in Javascript with CallBacks and Functions
 */

function myMultipy(x){
  return ( x * 2);
}

// test functions
console.log("What is 3 multiplied by 2?", my Multiply(3));
console.log("What is 12 multiplied by 2?", my Multiply(12));

array = [2,4,10,11]
console.log("My Array", array);

var result = array.map(myMultiply);
// should return [4, 8, 20, 22]
console.log("Test of array callback functions:", result);

var result = array.map(function(x){
  return x + 2;
})
//should return [4, 6, 12, 13]
console.log("Array with an addition of 2 to each number:", result);

// [4,8,20,22]