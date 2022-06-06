"use strict";
alert("You are welcome!!🤗");

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const getDocument = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    getDocument("No number🎉");
  } else if (secretNumber === guess) {
    document.querySelector(".number").textContent = secretNumber;
    getDocument("you got it right🎇👍");
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "too high 📈" : "too low 📉";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "yellowgreen";
    } else {
      getDocument("you lost the game😊");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  getDocument("Start guessing...");
  document.querySelector("body").style.backgroundColor = "rgb(44, 49, 43)";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
