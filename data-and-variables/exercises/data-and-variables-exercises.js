// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeed = 17500; //in MPH
let kilometersToMars = 225000000 //km
let kilometersToMoon = 384400 //km
const milesPerKilometer = .621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeed));
console.log(typeof(kilometersToMars));
console.log(typeof(kilometersToMoon));
console.log(typeof(milesPerKilometer));

// Calculate a space mission below
let milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daystoMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(shuttleName,"will take",daystoMars,"days to reach Mars");

// Calculate a trip to the moon below
let milesToMoon = kilometersToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daystoMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(shuttleName,"will take",daystoMoon,"days to reach the Moon");