const questionList = [
  "Are you a cat?",
  "Are you a dog?",
  "Are you a human?",
  "Are you a robot?",
];

let questionIndex = 0;
let correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[questionIndex];

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
};

function showAnswerIsCorrect() {
  const para = document.createElement("p");
  const node = document.createTextNode("Very good!");
  para.className = "correct";
  para.append(node);
  document.body.append(para);
  setNewQuestion();
}

function showAnswerIsIncorrect() {
  const para = document.createElement("p");
  const node = document.createTextNode("Oh, why not?!");
  para.className = "incorrect";
  para.append(node);
  document.body.append(para);
  disableButtons();
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}

function setNewQuestion() {
  questionIndex += 1;
  myQuestion.textContent = questionList[questionIndex];
  correctAnswer = false;
  document.body.removeChild(document.querySelector("correct"));
}

function nextQuestion() {
  questionIndex += 1;
  const nextButton = document.createElement("p");
  nextButton.textContent = "Next Question";
  next.appendChild(nextButton);
}
