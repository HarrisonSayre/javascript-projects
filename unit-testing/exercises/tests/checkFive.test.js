const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    test("Returns 'number is less than 5.' when passed a number < 5", function(){
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");
    });

    test("Returns 'number is greater than 5.' when passed a number > 5", function(){
        let output = checkFive(6);
        expect(output).toBe("6 is greater than 5.");
    });

    test("Returns 'number is equal to 5.' when passed 5", function(){
        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });
    

});