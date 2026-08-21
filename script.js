let savedVisits = localStorage.getItem("visits"); 
if (savedVisits === null) { 
savedVisits = 0; 
} 
let visits = Number(savedVisits); 
visits = visits + 1; 
localStorage.setItem("visits", visits); 
let visitsDisplay = document.getElementById("visits-1"); 
visitsDisplay.textContent = "Quiz visits: " + visits;

let greetings = [
  "Good luck! 🍀",
  "No pressure! 😄",
  "You've got this! 💪",
  "Let's see what you know! 🧠"
];
let greeting = document.getElementById("greeting-1");
let pick = greetings[Math.floor(Math.random() * greetings.length)];
greeting.textContent = pick;

let score = 0;
let scoreDisplay = document.getElementById("score-1");

let answer1 = document.getElementById("answer-1");
let answer2 = document.getElementById("answer-2");
let answer3 = document.getElementById("answer-3");

let result = document.getElementById("result-1");

let hintButton = document.getElementById("hint-button");
let hint = document.getElementById("hint-1");

let animalImage = document.getElementById("animal-image");

let nextButton = document.getElementById("next-button"); 
let question1 = document.getElementById("question-1-container");
let question2 = document.getElementById("question-2");
let answered = false;

let q2Answer1 = document.getElementById("q2-answer-1"); 
let q2Answer2 = document.getElementById("q2-answer-2"); 
let q2Answer3 = document.getElementById("q2-answer-3"); 
let q2Result = document.getElementById("q2-result"); 
let q2Answered = false;

answer1.addEventListener("click", function () {
	if (answered === false) {
    score = score + 1;
    scoreDisplay.textContent = "Score: " + score;
    answered = true;
  }
  result.textContent = "Correct! 🎉";
  animalImage.src = "sleeping-koala.jpg";
});

answer2.addEventListener("click", function () {
  result.textContent = "Not quite!";
  document.body.style.backgroundColor = "pink";
  animalImage.src = "monkey-thinking.jfif";
});

answer3.addEventListener("click", function () {
  result.textContent = "Not quite!";
  document.body.style.backgroundColor = "pink";
  animalImage.src = "monkey-thinking.jfif";
});

hintButton.addEventListener("click", function () {
  hint.textContent = "Hint: Think about an animal that sleeps a LOT!";
});

nextButton.addEventListener("click", function () { 
 question1.style.display = "none"; 
 question2.style.display = "block";
 document.body.style.backgroundColor = "lightblue";
}); 

q2Answer1.addEventListener("click", function () { 
if (q2Answered === false) { 
score = score + 1; 
scoreDisplay.textContent = "Score: " + score; 
q2Answered = true; 
} 
q2Result.textContent = "Correct! 🎉"; 
}); 
q2Answer2.addEventListener("click", function () { 
q2Result.textContent = "Not quite!"; 
}); 
q2Answer3.addEventListener("click", function () { 
q2Result.textContent = "Not quite!"; 
});

