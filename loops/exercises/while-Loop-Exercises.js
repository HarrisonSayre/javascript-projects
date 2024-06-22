//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let startingFuelLevel;
let numberOfAstronauts;
let altitude;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
startingFuelLevel = Number(input.question("Please enter a number between 5,000 and 30,000 for the starting fuel level: "));
while(startingFuelLevel > 30000 || startingFuelLevel < 5000 || NaN((startingFuelLevel))){
  startingFuelLevel = Number(input.question("Invalid fuel level. Please enter a number no less than 5000 and no greater than 30000: "));
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
