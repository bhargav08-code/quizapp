const jsQuiz = [
  {
    question: "Full Form Of HTML ?",
    a: "High Transfer Markup Lanaguage",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Machine Language",
    d: "None of these",
    correct: "b",
  },

  {
    question: "Who Invented JavaScipt ?",
    a: "Guido van Rossum",
    b: "Dennis Ritchie",
    c: "Brendan Eich",
    d: "  Mark Elliot Zuckerberg",
    correct: "c",
  },

  {
    question: "JavaScript is a __ -side programming language.",
    a: "Client",
    b: "Server",
    c: "Both",
    d: "None",
    correct: "c",
  },
  {
    question: "CSS File Has An Extension of:",
    a: ".css",
    b: ".cs",
    c: ".py",
    d: ".xml",
    correct: "a",
  },
  {
    question: "What we use to convert Number to String",
    a: ".parseInt",
    b: ".Number",
    c: ".reverse",
    d: ".toString()",
    correct: "d",
  },
];

const main = document.querySelector(".main");
const question = document.querySelector(".question");
const answer = document.querySelectorAll(".ans");
const btn = document.querySelector("#btn");
const a_option = document.querySelector("#a_opt");
const b_option = document.querySelector("#b_opt");
const c_option = document.querySelector("#c_opt");
const d_option = document.querySelector("#d_opt");

let currQue = 0;
let score = 0;
startQuiz();
function startQuiz() {
  unchecked();
  const opt = jsQuiz[currQue];
  question.textContent = opt.question;
  a_option.textContent = opt.a;
  b_option.textContent = opt.b;
  c_option.textContent = opt.c;
  d_option.textContent = opt.d;
}
function checked() {
  let ans = undefined;

  answer.forEach((answerEl) => {
    if (answerEl.checked) {
      ans = answerEl.id;
    }
  });
  return ans;
}

//deselecting the answers
function unchecked() {
  answer.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

btn.addEventListener("click", () => {
  //checking the correct answer
  const myans = checked();

  if (myans) {
    if (myans === jsQuiz[currQue].correct) {
      score++;
    }
    currQue++;

    //printing the score
    if (currQue < jsQuiz.length) {
      startQuiz();
    } else {
      main.innerHTML = `<h2>Your score is ${score}/${jsQuiz.length}</h2>

      <button onclick = "location.reload()">Reload</button>`;
    }
  }
});
