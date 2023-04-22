"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelecor('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number!";
    displayMessage("⛔ No Number!");

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width =
      //what ever unit we use you have to put in string;
      "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is wrong;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
      // score--;
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".meassage").textContent = "💥 you lost the game";
      displayMessage('💥 you lost the game');
      document.querySelecor("score").textcontent = 0;
    }
  }
  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too High 📉!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = " 💥 you lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //     //when guess is to low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too low 📉!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = " 💥 you lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
   });
   document.querySelector(".again").addEventListener("click", function () {
     score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector(".message").textContent = "Start guessing....";
    displayMessage("Start guessing....");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
