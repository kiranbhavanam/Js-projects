const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: {
      a: "Paris",
      b: "London",
      c: "Berlin",
      d: "Madrid",
    },
    answer: "a", // The correct answer is "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: {
      a: "Mars",
      b: "Venus",
      c: "Jupiter",
      d: "Saturn",
    },
    answer: "a", // The correct answer is "Mars"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: {
      a: "Charles Dickens",
      b: "William Shakespeare",
      c: "Jane Austen",
      d: "Leo Tolstoy",
    },
    answer: "b", // The correct answer is "William Shakespeare"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: {
      a: "Oxygen",
      b: "Carbon dioxide",
      c: "Nitrogen",
      d: "Hydrogen",
    },
    answer: "b", // The correct answer is "Carbon dioxide"
  },
];

//console.log(quizQuestions);
const quiz = document.getElementById("quiz");
const question = document.querySelector(".question");
const opt_a = document.getElementById("a_text");
const opt_b = document.getElementById("b_text");
const opt_c = document.getElementById("c_text");
const opt_d = document.getElementById("d_text");
const btn = document.querySelector(".submit");
//console.log(question.innerHTML, opt_a.innerHTML);
let currentQuestion = 0;
let selectedAns;
let score = 0;
function loadQuestion() {
  deselectAnswers();
  const questionData = quizQuestions[currentQuestion];
  question.textContent = questionData.question;
  opt_a.textContent = questionData.options.a;
  opt_b.textContent = questionData.options.b;
  opt_c.textContent = questionData.options.c;
  opt_d.textContent = questionData.options.d;
}
loadQuestion();
btn.addEventListener("click", () => {
  retrieveSelected();
  if (selectedAns) {
    if (selectedAns === quizQuestions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) loadQuestion();
    else {
      // return alert("You completed the quiz with a score of:" + score);
      quiz.innerHTML = `<h2>You completed the quiz with a score of : ${score}`;
    }
  }
});

//1.allow next qn to be displayed only if any ans is selected
//2.get the selected option
//3.check if selected is correct=> increase score
//4.deselect the default opition
function retrieveSelected() {
  document.querySelectorAll(".option").forEach((option) => {
    if (option.checked) {
      selectedAns = option.id;
    }
  });
  //   console.log(selectedAns);
}
function deselectAnswers() {
  document.querySelectorAll(".option").forEach((option) => {
    option.checked = false;
  });
}
