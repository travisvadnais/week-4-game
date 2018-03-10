$(document).ready(function () {

var wins;
var losses;
var valFirst;
var valSecond;
var valThird;
var valFourth;
var gameVal;
var spotUsed=false;

    function resetGame() {
        valFirst = generateRandom(1, 12);
        valSecond = generateRandom(1, 12);
        valThird = generateRandom(1, 12);
        valFourth = generateRandom(1, 12);
        currentWeight = 0;
        updateCurrentWeight();
        wins = 0;
        losses = 0;
        spotUsed=false;
        gameVal = generateRandom(19, 102);
        $(".bigBoldGameVal").html(gameVal);
    }
    function softReset() {
        valFirst = generateRandom(1, 12);
        valSecond = generateRandom(1, 12);
        valThird = generateRandom(1, 12);
        valFourth = generateRandom(1, 12);
        currentWeight = 0;
        updateCurrentWeight();
        gameVal = generateRandom(19, 102);
        $(".bigBoldGameVal").html(gameVal);

    }
    function generateRandom(a, b) {
        return Math.floor(Math.random() * b) + a;
    }

    function updateCurrentWeight() {
        $(".bigBoldCurrentWeight").html(currentWeight);
    }

    function calculateScore() {
        if (currentWeight === gameVal) {
            wins++;
            $(".bigBoldWins").html(wins);    
            softReset();
        }
        else if (currentWeight > gameVal) {
            losses++;
            $(".bigBoldLosses").html(losses);    
            softReset();
        }
    }           
    

    resetGame();

    $(".plate1").on('click', function() {
        currentWeight += valFirst;
        updateCurrentWeight();
        calculateScore();        
    });

    $(".plate2").on('click', function() {
        currentWeight += valSecond;
        updateCurrentWeight();
        calculateScore();
    });

    $(".plate3").on('click', function() {
        currentWeight += valThird;
        updateCurrentWeight();
        calculateScore();
    });

    $(".plate4").on('click', function() {
        currentWeight += valFourth;
        updateCurrentWeight();
        calculateScore();
    });

    $('#getSpot').on('click', function() {
        switch (spotUsed) {
            case false: 
                softReset();
                spotUsed=true;
                $().button('dispose')
                break;
            default:
                alert("You're on your own Bro!!!");
        }
    });
        








});