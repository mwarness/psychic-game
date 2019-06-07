// variables

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesleft = 9;
var storeduserguess = []



var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userguessesText = document.getElementById("usersguesses-text");
var guessesleftText = document.getElementById("guessesleft-text");
    console.log(winsText)

//key release

document.onkeyup = function (event) {
    var userGuess = event.key;
    storeduserguess.push(userGuess)
        console.log(userGuess)
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(wins)
        console.log(losses)
        console.log(guessesleft)
    
    if (userGuess === computerGuess) {
        wins++;
        storeduserguess = [];
        guessesleft = 9;
    }
    if (userGuess !== computerGuess) {
        guessesleft--;
    }
    if (guessesleft === 0) {
        losses++;0
        guessesleft = 9;
        storeduserguess = [];
        
    }
   
   
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesleftText.textContent = "Guesses left: " + guessesleft;
    userguessesText.textContent = "You guessed: " + storeduserguess;
        console.log(computerGuess)

    // Im not to sure why Js wont run! my console log says file not found for the js but its linked properly! thats the only error code that comes up!

};