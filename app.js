let win = 0;
let tie = 0;
let lose = 0;
let btns = document.querySelectorAll("button");
btns.forEach((element) => {
  element.addEventListener("click", function (event) {
    let pcChoose;

    let situation = document.querySelector(".situation");
    let description = document.querySelector(".description");
    let winOrLose = document.querySelector(".winOrLose");
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      pcChoose = document.querySelector(".paper").innerText;
    } else if (randomNumber === 2) {
      pcChoose = document.querySelector(".rock").innerText;
    } else {
      pcChoose = document.querySelector(".sessor").innerText;
    }
    
    let userChoose = event.target.innerText;
    if (userChoose === pcChoose) {
      situation.innerText = "You tie.";
      description.innerText = `You ${userChoose} and pc is ${pcChoose}`;
    } else if (userChoose == "✋" && pcChoose == "✊") {
      situation.innerText = "You Win.";
      description.innerText = `You ${userChoose} and pc is ${pcChoose}`;
    } else if (userChoose == "✋" && pcChoose == "✌️") {
      situation.innerText = "You Lose.";
      description.innerText = `You ${userChoose} and pc is ${pcChoose}`;
    }
    //sang
    else if (userChoose == "✊" && pcChoose == "✋") {
      situation.innerText = "You Lose.";
      description.innerText = `You ${userChoose} and pc is ${pcChoose}`;
    } else if (userChoose == "✊" && pcChoose == "✌️") {
      situation.innerText = "You Win.";
      description.innerText = `You ${userChoose} and pc is ${pcChoose}`;
    }
    //gheychi
    else if (userChoose == "✌️" && pcChoose == "✋") {
      situation.innerText = "You Win.";
      description.innerText = `You ${userChoose} and pc is ${pcChoose}`;
    } else if (userChoose == "✌️" && pcChoose == "✊") {
      situation.innerText = "You Lose.";
      description.innerText = `You ${userChoose} and pc is ${pcChoose}`;
    }
    switch (situation.innerText) {
      case "You Win.":
        win++;
        break;
      case "You Lose.":
        lose++;
        break;
      case "You tie.":
        tie++;
        break;
    }
    winOrLose.innerText = `win: ${win} lose: ${lose} tie: ${tie}`;
  });
});
