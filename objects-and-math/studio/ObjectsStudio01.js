// Code your selectRandomEntry function here:
function selectRandomEntry (arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function buildIDArray (arr){
  let selectedNumbers = [];
  let chosenNumber;
  while(selectedNumbers.length < 3){
    chosenNumber = selectRandomEntry(arr);
    while(selectedNumbers.includes(chosenNumber)){
      chosenNumber = selectRandomEntry(arr);
    }
    selectedNumbers.push(chosenNumber)
  }
  return(selectedNumbers);
}

// Code your buildCrewArray function here:
function buildCrewArray(crewIDs, candidatePool){
  let crewArray = [];
  for(let i = 0; i < crewIDs.length; i++){
    for(let j = 0; j < candidatePool.length; j++){
    if((candidatePool[j]).astronautID === crewIDs[i]){
      crewArray.push(candidatePool[j])
      }
    }
  }
  return crewArray;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let crewArray = buildCrewArray(buildIDArray(idNumbers), animals);
console.log(`${crewArray[0].name}, ${crewArray[1].name}, and ${crewArray[2].name} are going to space!`);
