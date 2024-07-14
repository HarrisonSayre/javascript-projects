const processor = require('../processor.js');

describe("transmission processor", function() {

   //  TODO: put tests 
  test("takes a string returns an object", function(){
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
   });
 
 });