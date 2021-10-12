const correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Do you like Javascript?";

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
  para.appendChild(node);
  document.body.appendChild(para);
}

function showAnswerIsIncorrect() {
  const para = document.createElement("p");
  const node = document.createTextNode("Oh, why not?!");
  para.className = "incorrect";
  para.appendChild(node);
  document.body.appendChild(para);
}
