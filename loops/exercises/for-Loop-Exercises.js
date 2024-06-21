/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

//a Super simple for loop just going from 0 to 20, printing.
for(let i = 0; i <= 20; i++){
  console.log(i);
}

//b Just start at 3 and then add 2 each time (odd+even=odd)
for(let i = 3; i <=29; i +=2){
  console.log(i);
}
//c B but going down by 2 instead of up by 2 and stopping when less than instea.
for(let i = 12; i >= -14; i -=2){
  console.log(i);
}

//d Division check in an if statement. 0 means multiple of 3, so print. Otherwise c again
for(let i = 50; i >= 20; i -=2){
  if(i%3 === 0){
  console.log(i)
  }
}
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/

let holder = "LaunchCode";
let arrloo = [1, 5, 'LC101', 'blue', 42];

/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

  //a Start a 0, so no <=, and print at index i. Otherwise 1a in new paint
  for(let i = 0; i < arrloo.length; i++){
    console.log(arrloo[i]);
  }
  //b Foun two ways to do this. 
  //b1 is split the string into an array, reverse it, ten iterate troug like above. 
  let arrloo2 = holder.split('');
  arrloo2.reverse();
  console.log(arrloo2);
  console.log(arrloo2[0]);
  for(let i = 0; i < arrloo2.length; i++){
    console.log(arrloo2[i]);
  }
  //b2 is find the lengt of the string, and then print out at each location in the string, going backward.
  //purely a for loop with no other initialization, so probably what's prefered?
  for(let i = 1; i <= holder.length; i++){
    console.log(holder[holder.length-i]);
  }

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let arrloo3 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [];
let odds = [];
//a 
for(let i = 0; i < arrloo3.length; i++){
  if(arrloo3[i]%2 === 0){ // Divide by 2 and check remainder. If so, even
    evens.push(arrloo3[i]); // Add to even array
  }else{ // Don't need to do remainder division, since if it's not even it's always odd.
    odds.push(arrloo3[i]); // add to do array
  }
//b Just some console.logs
console.log(evens);
console.log(odds);
}
