// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
    // Write your unit tests here!
  test("returns 'nonprofit for the organization property of launchcode", function(){
    let output = launchcode.organization;
    expect(output).toBe("nonprofit");
  });

  test("returns 'Jeff' for the executiveDirector property of launchcode", function(){
    let output = launchcode.executiveDirector;
    expect(output).toBe("Jeff");
  });

  test("returns '100' for the percentageCoolEmployees property of launchcode", function(){
    let output = launchcode.percentageCoolEmployees;
    expect(output).toBe(100);
  });

  test("checks all the values of programsOffered and its size", function(){
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("returns 'Launch!' when 2 is the input in launchOutput", function(){
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });

  test("returns 'Code!' when 3 is the input in launchOutput", function(){
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });

  test("returns 'Rocks!' when 5 is the input in launchOutput", function(){
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });

  test("returns 'LaunchCode' when 6 is the input in launchOutput", function(){
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("returns 'Code Rocks!' when 15 is the input in launchOutput", function(){
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });
  
  test("returns 'Launch Rocks!' when 10 is the input in launchOutput", function(){
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });

  test("returns 'LaunchCode Rocks!' when 30 is the input in launchOutput", function(){
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("returns 'Rutabagas! That doesn't work.' when 7 is the input in launchOutput", function(){
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });

  //Singular test that includes the above eight in one.
  test ('should return output [i] for input [i]', function() {
    let inputs =  [4, 9, 25, 6, 15, 10, 30, 7];
    let outputs = ['Launch!', 'Code!', 'Rocks!', 'LaunchCode!', 'Code Rocks!', 'Launch Rocks! (CRASH!!!!)', 'LaunchCode Rocks!', "Rutabagas! That doesn't work." ];
    for (let i = 0; i < inputs.length; i++){
      let num = launchcode["launchOutput"](inputs[i]);
      expect(num).toBe(outputs[i]);
    }
   });

 
  
});