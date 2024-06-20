let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); // no change
console.log(str.split('e')); //where e is split into seperate array items
console.log(str.split(' ')); // does it at spaces.
console.log(str.split('')); //Every char is seperate now
//()determines where the splits are made)
console.log(str);

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());//all items put into comma seperated single item.
console.log(arr.join('a'));//adds "a" between each item in new sequence
console.log(arr.join(' ')); // spaces instead of as
console.log(arr.join('')); //No commas
//() determines What's joining them together
console.log(arr);

//3) Do split or join change the original string/array?
//NOPE

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));