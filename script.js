let greetings = [
  "Good luck! 🍀",
  "No pressure! 😄",
  "You've got this! 💪",
  "Let's see what you know! 🧠"
];
let greeting = document.getElementById("greeting-1");
let pick = greetings[Math.floor(Math.random() * greetings.length)];
greeting.textContent = pick;

let answer1 = document.getElementById("answer-1");
let answer2 = document.getElementById("answer-2");
let answer3 = document.getElementById("answer-3");

let result = document.getElementById("result-1");

let hintButton = document.getElementById("hint-button");
let hint = document.getElementById("hint-1");

answer1.addEventListener("click", function () {
  result.textContent = "Correct! 🎉";
});

answer2.addEventListener("click", function () {
  result.textContent = "Not quite!";
  document.body.style.backgroundColor = "pink";
});

answer3.addEventListener("click", function () {
  result.textContent = "Not quite!";
  document.body.style.backgroundColor = "pink";
});

hintButton.addEventListener("click", function () {
  hint.textContent = "Hint: Think about an animal that sleeps a LOT!";
});