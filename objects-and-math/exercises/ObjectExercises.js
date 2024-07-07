let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.round(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.round(Math.random()*10)}

};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.round(Math.random()*10)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.round(Math.random()*10)}

};

let sureWhyNot = {
   name: "Almina",
   species: "Tardigrade",
   mass: .0000000001,
   age: 1,
   move: function () {return Math.round(Math.random()*10)}

};


// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
dog["astronautID"] = 4;
sureWhyNot["astronautID"] = 5;

// Add a move method to each animal object
//Done

// Create an array to hold the animal objects.
animals = [superChimpOne, salamander, superChimpTwo, dog, sureWhyNot];

//Function to print out crew details.
function crewReports(crew){
   for(let i = 0; i < crew.length; i++){
      //for(item in crew[i]){
      //   console.log((crew[i])[item]);
   console.log(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} years old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`);
   }
   return;
}

// Print out the relevant information about each animal.
crewReports(animals);

// Start an animal race!

function fitnessTest(crew){
   results = [];
   for(let i = 0; i < crew.length; i++){
      let turns = 0
      let distance = 0;
      while(distance < 20){
         distance += crew[i].move();
         turns++;
         //console.log(turns);
      }
      results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`)
   }
   return results;
}

console.log(fitnessTest(animals));