

let answer1 = document.getElementById("answer-1");
let answer2 = document.getElementById("answer-2");
let answer3 = document.getElementById("answer-3");

let result = document.getElementById("result-1");

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