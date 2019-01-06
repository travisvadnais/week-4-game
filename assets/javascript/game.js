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
  
  const calculateScore = () => {
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
  };          

  resetGame();

  $(".rounded-circle").on("click", ((event) => {
    let plateId = event.target.id;
    let plateVal;
    switch (plateId) {
      case "plate1":
        plateVal = valFirst;
        break;
      case "plate2":
        plateVal = valSecond;
        break;
      case "plate3":
        plateVal = valThird;
        break;
      default:
        plateVal = valFourth;
    }
    addWeight(plateVal);
  }));

  let addWeight = val => {
    currentWeight += val;
    updateCurrentWeight();
    calculateScore();
  };

  $('#getSpot').on('click', (() => {
    switch (spotUsed) {
      case false: 
        softReset();
        spotUsed=true;
        $().button('dispose')
        break;
      default:
        alert("You're on your own Bro!!!");
    }
  }));
});