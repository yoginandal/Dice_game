var randomNumber1 = diceNumber();
var randomNumber2 = diceNumber();

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

winner();

function diceNumber() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

function winner() {
    if (randomNumber1 > randomNumber2) {
        document.getElementsByTagName("h1")[0].textContent = "🚩 Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.getElementsByTagName("h1")[0].textContent = "Player 2 wins! 🚩";
    } else {
        document.getElementsByTagName("h1")[0].textContent = "Draw!";
    }
}
