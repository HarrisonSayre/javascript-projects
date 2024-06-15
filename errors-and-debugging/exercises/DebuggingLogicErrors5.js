// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchFuelReady = false;
let launchCrewReady = true;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchFuelReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchFuelReady = false;
}

console.log("launchFuelReady = ", launchFuelReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchCrewReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchCrewReady = false;
}

console.log("launchCrewReady = ", launchCrewReady);

if (launchCrewReady && launchFuelReady){
   console.log("3...2...1... LIFTOFF!");
}else{
   console.log("Launch scrubbed");
}
console.log(Boolean(""));