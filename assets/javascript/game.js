//declare variables
var userScore = 0;
var wins = 0;
var losses = 0;
var randomScore;
var crystal1Num;
var crystal2Num;
var crystal3Num;
var crystal4Num;

// choosing a random score and printing out to html
function Values() {
    randomScore = Math.floor(Math.random() * 110) + 20;
    crystal1Num = Math.ceil(Math.random() * 12);
    crystal2Num = Math.ceil(Math.random() * 12);
    crystal3Num = Math.ceil(Math.random() * 12);
    crystal4Num = Math.ceil(Math.random() * 12);
}

function GameSet() {
    Values();
    userScore = 0;
    $("#randomscore").text(randomScore);
    $("#userscore").text(userScore);
    $("#emerald").attr("data-crystalvalue", crystal1Num);
    $("#diamond").attr("data-crystalvalue", crystal2Num);
    $("#ruby").attr("data-crystalvalue", crystal3Num);
    $("#topaz").attr("data-crystalvalue", crystal4Num);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#win-or-lose").text("");

    console.log(crystal1Num, crystal2Num, crystal3Num, crystal4Num);
}

function win() {
    $("#win-or-lose").text("YOU WIN!")
    wins++;
    $("#wins").text(wins);
}

function loss() {
    $("#win-or-lose").text("YOU LOSE!")
    losses++;
    $("#losses").text(losses);
}

GameSet();

$(".crystal").on("click", function () {
    // if (userScore >= randomScore) {
    //     return;
    // }

    var crystalValue = ($(this).attr("data-crystalvalue"))

    crystalValue = parseInt(crystalValue);

    userScore += crystalValue;

    $("#userscore").text(userScore)

    if (userScore === randomScore) {
        win();
        $("#win-or-lose").text("YOU WIN!");
    } else if(userScore > randomScore){
        loss();
        $("#win-or-lose").text("YOU LOSE!");
    }
});

$(".reset").on("click", function(){
    GameSet()
});