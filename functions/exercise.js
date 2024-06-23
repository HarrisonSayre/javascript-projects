function makeLine(size, printCharacter = "#"){
    let line = "";
    for(let i = 0; i < size; i++){
        line += printCharacter;
    }
    return line;
}

function makeSquare(size){
    let square = "";
    for(let i = 0; i < size; i++){
        if(i === 0){
            square += makeLine(size);
        }
        else{
            square += "\n"+makeLine(size);
        }
    }
    return square;
}

function makeRectangle(length, width){
    let rectangle = "";
    for(let i = 0; i < width; i++){
        if(i === 0){
            rectangle += makeLine(length);
        }
        else{
            rectangle += "\n"+makeLine(length);
        }
    }
    return rectangle;
}

function makeDownwardStairs(height, printCharacter = "#"){
    let steps = 0;
    for(let i = 0; i < height; i++){
        if(i === 0){
            steps = printCharacter;
        }
        else{
            steps += "\n"+makeLine(i+1);
        }
    }
    return steps;
}

function makeSpaceLine(numSpaces, numChars, printCharacter = "#"){
    let SpaceLine = "";
    let ending = "";
    for(let i = 0; i < numSpaces; i++){
        SpaceLine += " ";
        }
    ending = SpaceLine;
    SpaceLine += makeLine(numChars, printCharacter);
    SpaceLine += ending;
    return SpaceLine;
}

function makeIsoscelesTriangle(height, printCharacter = "#"){
    let triangle = "";
    for (let i = 0; i <height; i++){
        triangle += "\n"+makeSpaceLine((height-i-1), (2*i+1), printCharacter);
    }
    return triangle.slice(1);
}

function reverseLine(line) {
    let lettersArray = line.split('').reverse().join('');
    return lettersArray;
}

function makeDiamond(height, printCharacter){
    let diamond = "";
    diamond = makeIsoscelesTriangle(height, printCharacter);
    diamond += "\n"+reverseLine(diamond);
    return diamond;
}
//console.log(makeSquare(5));
//console.log(makeRectangle(5,3));
//console.log(makeDownwardStairs(5));
console.log(makeDiamond(5, "@"));