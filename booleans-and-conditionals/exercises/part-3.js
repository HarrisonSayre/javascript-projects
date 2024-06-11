//let engineIndicatorLight = 'red blinking';
let engineIndicatorLight = 'solid green'; //for testing engine indicator's effect on other conditions.
let fuelLevel = 21000; // default "good fuel level
//fuelLevel = 900; // low fuel testing (failure level)
//fuelLevel = 5000; // check fuel level testing
//fuelLevel = 12000; 
//fuelLevel = 18000; //above 50% check
//let engineTemperature = 1200; // default "good" temperature
engineTemperature = 2500; // test for on the dot temp <=
//engineTemperature = 2600; // test for running hot (e)
//engineTemperature = 5000; // test for engine failure (d)

/* 5) Implement the following checks using if/else if/else statements:

a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."

b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."

c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."

d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."

e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 

f) Otherwise, print "Fuel and engine status pending..." */

// Code 5a - 5f here:

if( (fuelLevel < 1000 || engineTemperature > 3500) || engineIndicatorLight == 'red blinking'){ //e
    console.log("ENGINE FAILURE IMMINENT!");
}else if(fuelLevel <= 5000 || engineTemperature > 2500){ //d
    console.log("Check fuel level. Engines running hot.");
}
else if(fuelLevel > 20000 && engineTemperature <= 2500){ //a
    console.log("Full tank. Engines good");
}else if(fuelLevel > 10000 && engineTemperature <= 2500){ //b
    console.log("Fuel level above 50%.  Engines good.");
}else if(fuelLevel > 5000 && engineIndicatorLight <= 2500){ //c
    console.log("Fuel level above 25%.  Engines good.");
}else{ //f
    console.log("Fuel and engine status pending...");
}

// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.
let commandOverride = false;  //testing for when it's off. Other conditions matter.
//let commandOverride = true; //testing for the effects of command override being on. Should always go

/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */
if( (fuelLevel > 20000 && engineIndicatorLight != 'red blinking') || commandOverride){
    console.log("Cleared to launch!");
}else{
    console.log("Launch scubbed");
}

