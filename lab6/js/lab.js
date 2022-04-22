/*
 *Author: Lindsey McDermott
 *Date: April 21, 2022
 *Description: Practicing array and objects in Javascript
 */

 // Define variables
  myTransport = ["Toyota Tacoma", "Bike", "Rollerskates", "Rides from friends"];

  myMainRide = {
      make: "Toyota",
      model: "Tacoma",
      color: "Blue",
      year: 2014,
      age: 8
  }

  // output
  document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
  document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");
      
