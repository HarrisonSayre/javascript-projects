function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 3; i++){
   console.log(randomSelection(happiness));
   console.log(randomSelection(words));
 }

if((Math.round(Math.random()) == 0)){
  for (i=0; i < 2; i++){
    console.log(randomSelection(happiness));
  }
}else{
    for (i=0; i < 2; i++){
      console.log(randomSelection(words));
    }
  }

let newArray = []
newArray.push((randomSelection(happiness)));
newArray.push((randomSelection(words)));
console.log(newArray);

 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.