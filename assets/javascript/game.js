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
$("#randomscore").text(randomScore);

function reset() {
    randomNumber();
    $("#randomscore").text(randomScore);
    $("#userscore").text(userScore);
    crystalNumber();
}

function crystalNumber() {
    buttonScore = Math.floor((Math.random() * 12));
    $("#emerald").attr(buttonScore);
    $("#diamond").attr(buttonScore);
    $("#ruby").attr(buttonScore);
    $("#topaz").attr(buttonScore);
    console.log(buttonScore);
}

crystalNumber();

$(".button").on("click", function () {
    var crystalValue = ($(this).attr(buttonScore))

    crystalValue = parseInt(crystalValue);

    userScore += crystalValue;

    $("#userscore").text(userScore)

    if(userScore ===randomScore){
        wins++;
        reset();
    }else{
        losses++;
        reset();
    }
})

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