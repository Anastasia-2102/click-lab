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

let q3Answer1 = document.getElementById("q3-answer-1");
let q3Answer2 = document.getElementById("q3-answer-2");
let q3Answer3 = document.getElementById("q3-answer-3");

let q3Result = document.getElementById("q3-result");
let q3Answered = false;

let resultsPanel = document.getElementById("results-panel");
let finalScore = document.getElementById("final-score");
let startOverButton = document.getElementById("start-over-button");




answer1.addEventListener("click", function () {
	if (answered === false) {
    score = score + 1;
    scoreDisplay.textContent = "Score: " + score;
    answered = true;
	answer1.classList.add("correct");
	
  }
  document.body.style.backgroundColor = "lightblue";
  result.textContent = "Correct! 🎉";
  animalImage.src = "sleeping-koala.jpg";
});

answer2.addEventListener("click", function () {
  answer2.classList.add("wrong");
  result.textContent = "Not quite! The correct answer is Koala.";
  document.body.style.backgroundColor = "pink";
  animalImage.src = "monkey-thinking.jfif";
});

answer3.addEventListener("click", function () {
  answer3.classList.add("wrong");
  result.textContent = "Not quite! The correct answer is Koala.";
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

let nextButton2 = document.getElementById("next-button-2");
let question3 = document.getElementById("question-3");

nextButton2.addEventListener("click", function () {
  question2.style.display = "none";
  question3.style.display = "block";
});

q2Answer1.addEventListener("click", function () { 
if (q2Answered === false) { 
score = score + 1; 
scoreDisplay.textContent = "Score: " + score; 
q2Answered = true;
q2Answer1.classList.add("correct");

}
document.body.style.backgroundColor = "lightblue";  
q2Result.textContent = "Correct! 🎉"; 
}); 
q2Answer2.addEventListener("click", function () { 
q2Answer2.classList.add("wrong");
document.body.style.backgroundColor = "pink";
q2Result.textContent = "Not quite! The correct answer is Octopus."; 
}); 
q2Answer3.addEventListener("click", function () { 
q2Answer3.classList.add("wrong");
document.body.style.backgroundColor = "pink";
q2Result.textContent = "Not quite! The correct answer is Octopus."; 
});



q3Answer1.addEventListener("click", function () {
  if (q3Answered === false) {
    score = score + 1;
    scoreDisplay.textContent = "Score: " + score;
    q3Answered = true;
	q3Answer1.classList.add("correct");
  }
  document.body.style.backgroundColor = "lightblue";
  q3Result.textContent = "Correct! 🎉";
  showResults();
});

  q3Answer2.addEventListener("click", function () {
  q3Answer2.classList.add("wrong");
  document.body.style.backgroundColor = "pink";
  q3Result.textContent = "Not quite! The correct answer is Cheetah.";
  showResults();
});

  q3Answer3.addEventListener("click", function () {
  q3Answer3.classList.add("wrong");
  document.body.style.backgroundColor = "pink";
  q3Result.textContent = "Not quite! The correct answer is Cheetah.";
  showResults();
});

function showResults() {
  question3.style.display = "none";
  resultsPanel.style.display = "block";
  finalScore.textContent = "Your final score: " + score + " out of 3";
}

startOverButton.addEventListener("click", function () {
  score = 0;
  answered = false;
  q2Answered = false;
  q3Answered = false;

  scoreDisplay.textContent = "Score: 0";

  question1.style.display = "block";
  question2.style.display = "none";
  question3.style.display = "none";
  resultsPanel.style.display = "none";

  document.body.style.backgroundColor = "lightblue";
  animalImage.src = "barnyard-animals.png";
  
  answer1.classList.remove("correct", "wrong");
answer2.classList.remove("correct", "wrong");
answer3.classList.remove("correct", "wrong");

q2Answer1.classList.remove("correct", "wrong");
q2Answer2.classList.remove("correct", "wrong");
q2Answer3.classList.remove("correct", "wrong");

q3Answer1.classList.remove("correct", "wrong");
q3Answer2.classList.remove("correct", "wrong");
q3Answer3.classList.remove("correct", "wrong");
});
