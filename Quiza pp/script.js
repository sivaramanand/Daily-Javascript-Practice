const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];

const question = document.querySelector(".quiz-question");
console.log(question);
console.log(question.textContent);

const option_a = document.querySelector(".text_option_a");
const option_b = document.querySelector(".text_option_b");
const option_c = document.querySelector(".text_option_c");
const option_d = document.querySelector(".text_option_d");

const submit = document.querySelector(".submit");
let currentQuestion = 0;
let score = 0;

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click", () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked')
  console.log(checkedAns);
  if( checkedAns === null){
    alert("Please select an answer");
}
else{
    if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
        score++;
    }

    currentQuestion++;
    if( currentQuestion < quiz.length){
        question.textContent = quiz[currentQuestion].question;
        option_a.textContent = quiz[currentQuestion].ans1text;
        option_b.textContent = quiz[currentQuestion].ans2text;
        option_c.textContent = quiz[currentQuestion].ans3text;
        option_d.textContent = quiz[currentQuestion].ans4text;
        checkedAns.checked = false;
    }else{
        alert("Your score is " + score + " out of " + quiz.length);
        location.reload();
    }

}
});
