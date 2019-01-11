$(document).ready(() => {

  let wins;
  let losses;
  let valFirst;
  let valSecond;
  let valThird;
  let valFourth;
  let gameVal;
  let spotUsed = false;

  const resetGame = () => {
    softReset();
    wins = 0;
    losses = 0;
    spotUsed=false;
  };

  const softReset = () => {
    valFirst = generateRandom(1, 12);
    valSecond = generateRandom(1, 12);
    valThird = generateRandom(1, 12);
    valFourth = generateRandom(1, 12);
    currentWeight = 0;
    updateCurrentWeight();
    gameVal = generateRandom(19, 102);
    $(".bigBoldGameVal").html(gameVal);
  };

  const generateRandom = (a, b) => {return Math.floor(Math.random() * b) + a};
  const updateCurrentWeight = () => {$(".bigBoldCurrentWeight").html(currentWeight)};

  const updateScore = (result) => {
    (result == "wins") ? $(".bigBoldWins").html(wins) : $(".bigBoldLosses").html(losses);
    softReset();
  }

  resetGame();

  $(".rounded-circle").on("click", ((event) => {
    addWeight(getVal(event.target.id))
  }));

  const addWeight = val => {
    currentWeight += val;
    updateCurrentWeight();
    calculateScore();
  };

  const calculateScore = () => {
    if (currentWeight === gameVal) {
      wins++;
      updateScore("wins");
    }
    else if (currentWeight > gameVal) {
      losses++
      updateScore("losses");
    }
  };     
  //Object Literal replaces switch case. plateId comes in as a KEY and exits as a VALUE
  const getVal = plateId => ({
    "plate1": plateVal = valFirst,
    "plate2": plateVal = valSecond,
    "plate3": plateVal = valThird,
    "plate4": plateVal = valFourth
  })[plateId]

  $("#getSpot").on("click", (() => {
    (spotUsed) ? alert("You're on your own, Bro!") : updateSpot()
  }));

  const updateSpot = () => {
    softReset();
    spotUsed = true;
    $().button('dispose')
  }
});