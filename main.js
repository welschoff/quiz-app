const questionList = [
  "Are you a cat?",
  "Are you a dog?",
  "Are you a human?",
  "Are you a robot?",
];

const answers = [true, true, false, false];

let questionIndex = 0;
let correctAnswer = answers[questionIndex];

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[questionIndex];

showProgress();

function showProgress() {
  const progressElement = document.querySelector(".progress");
  progressElement.textContent = `Question ${questionIndex + 1}/${
    questionList.length
  }`;
}

const end = document.querySelector(".wrapper");

function setNewQuestion() {
  questionIndex += 1;
  document.body.removeChild(document.querySelector(".correct"));
  showProgress();
  if (questionIndex < questionList.length) {
    correctAnswer = answers[questionIndex];
    myQuestion.textContent = questionList[questionIndex];
  } else {
    const finishQuiz = document.createElement("p");
    finishQuiz.textContent = "Yay you made it!";
    document.body.append(finishQuiz);
    end.removeChild(document.querySelector(".quizbox"));
  }
}

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
  setTimeout(setNewQuestion, 1000);
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
