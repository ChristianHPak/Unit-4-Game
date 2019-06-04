//declare variables
var userScore = 0;
var wins = 0;
var losses = 0;
var randomScore = 0;
var buttonScore = 0;

// choosing a random score and printing out to html
function randomNumber() {
    min = 19;
    max = 120;
    randomScore = Math.floor(Math.random() * (max - min + 1)) + min;
}
randomNumber();
$("#randomScore").text(randomScore);

function reset() {
    randomNumber();
    $("#randomScore").text(randomScore);
    $("#userScore").text(userScore);

}

buttonScore = Math.floor((Math.random() * 12)

//create function reset()
//create new number
//update page
//create new values to crystals
//assign each value to a crystal
//userScore reset back to zero

//on click event
// grab value of clicked crystal    
// add to player score

//if statement, if userScore === randomScore
//player wins
//wins++
//reset()
//else loss
//losses++;
// reset()
//update variables

//create new values per crystal