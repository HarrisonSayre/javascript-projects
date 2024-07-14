const RPS = require('../RPS.js');
//const test = require('../RPS.js');

describe("whoWon", function(){
    test("Returns 'TIE!' when both users select the same option", function(){
        let output = RPS.whoWon("paper", "paper");
        expect(output).toBe("TIE!");
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = RPS.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = RPS.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });

     test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function(){
        let output = RPS.whoWon('scissors','rock');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 1 wins!' if P1 = paper & P2 = rock", function(){
        let output = RPS.whoWon('paper','rock');
        expect(output).toBe("Player 1 wins!");
     });

     test("returns 'Player 1 wins!' if P1 = scissors & P2 = paper", function(){
        let output = RPS.whoWon('scissors','paper');
        expect(output).toBe("Player 1 wins!");
     });     

     test("returns 'Player 1 wins!' if P1 = rock & P2 = scissors", function(){
        let output = RPS.whoWon('rock', 'scissors');
        expect(output).toBe("Player 1 wins!");
     }); 

     test("returns 'Player 1 entered an invald move! Player 2 Wins!' if P1 isn't rock, paper, or scissors", function(){
        let output = RPS.whoWon('gun', 'scissors');
        expect(output).toBe("Player 1 entered an invald move! Player 2 Wins!");
     });    

     test("returns 'Player 2 entered an invald move! Player 1 Wins!' if P2 isn't rock, paper, or scissors", function(){
        let output = RPS.whoWon('paper', 'dynamite');
        expect(output).toBe("Player 2 entered an invald move! Player 1 Wins!");
     });        
});