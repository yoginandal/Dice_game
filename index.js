  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //we can use *7 instead of 6 + 1
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (window.performance.navigation.type === 1){
    rollDice();
  }
  function rollDice() {
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩player1 Wins";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "player2 Wins🚩";
    } else {
      document.querySelector("h1").innerHTML = "Draw";
    }
  }
