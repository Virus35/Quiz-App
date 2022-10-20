const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

let count = 0;
let score = 0;
let arrayLength = quizData.length;
let question = document.querySelector("#question");
let question_1 = document.querySelector("#a_text");
let question_2 = document.querySelector("#b_text");
let question_3 = document.querySelector("#c_text");
let question_4 = document.querySelector("#d_text");
const submit = document.querySelector("#submit");

// question.innerHTML = quizData[count].question;
// question_1.innerHTML = quizData[count].a;
// question_2.innerHTML = quizData[count].b;
// question_3.innerHTML = quizData[count].c;
// question_4.innerHTML = quizData[count].d;
submit.innerHTML = "START";

let radioButtons = document.querySelectorAll("input[type='radio']");
console.log(radioButtons);
let radioSatus = function () {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return radioButtons[i].id;
    }
  }
};
let click = 0;

function connect(){
    question.innerHTML = quizData[count].question;
    question_1.innerHTML = quizData[count].a;
    question_2.innerHTML = quizData[count].b;
    question_3.innerHTML = quizData[count].c;
    question_4.innerHTML = quizData[count].d;
}
submit.addEventListener("click", (e) => {
  if (click == 0) {
    submit.innerHTML = "SUBMIT";
    click++;
    connect();
    
  } else {
    let result = radioSatus();
    if (result == quizData[count].correct) {
      score += 1;
      let update = (document.querySelector(".updation").innerHTML = score);
    }
    count++;
    if (count == arrayLength) {
      document.querySelector(".quiz-header").style.display = "none";
      document.querySelector("#submit").style.display = "none";
      document.querySelector(".score").style.display = "flex";
    } else {
      connect();
    }
  }
});
