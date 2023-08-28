var startGame = document.querySelector("#begin")

startGame.addEventListener("click", takeQuiz);

// Create questions array
let questions = [
    {
        question: "Question 1",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "answer1"
    },
    {
        question: "Question 2",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "A"
    },
    {
        question: "Question 3",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "A"
    },
    {
        question: "Question 4",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "A"
    },
    {
        question: "Question 5",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "A"
    },
    {
        question: "Question 6",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "A"
    },
    {
        question: "Question 7",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "A"
    },
    {
        question: "Question 8",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "A"
    },
    {
        question: "Question 9",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "A"
    },
    {
        question: "Question 10",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "answer1"
    }
]

var body = document.body;
var qAndABlock = document.createElement("div");
var stateQuestion = document.createElement("h3");
var answerBlock = document.createElement("ul");
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");

a1.setAttribute("id", "userAnswer");
a2.setAttribute("id", "userAnswer");
a3.setAttribute("id", "userAnswer");
a4.setAttribute("id", "userAnswer");

a1.addEventListener("click",test);
a2.addEventListener("click",test);
a3.addEventListener("click",test);
a4.addEventListener("click",test);



let lastQuestionIndex = questions.length;
let runningQuestionIndex = 0;

function displayQuestion(qIndex) {
    body.appendChild(qAndABlock);
    qAndABlock.appendChild(stateQuestion);
    qAndABlock.appendChild(answerBlock);
    answerBlock.appendChild(a1);
    answerBlock.appendChild(a2);
    answerBlock.appendChild(a3);
    answerBlock.appendChild(a4);

    let question = questions[qIndex];
    stateQuestion.textContent = question.question;

    a1.textContent = question.choiceA;
    a2.textContent = question.choiceB;
    a3.textContent = question.choiceC;
    a4.textContent = question.choiceD;
}

function takeQuiz(){
    for (var questionIndex = 0; questionIndex < questions.length; questionIndex++) {
        displayQuestion(questionIndex)
        var userAnswer = document.querySelectorAll("#userAnswer")
        if (userAnswer == questions.correct) {
            console.log("Correct Answer")
        }
    }
}


function test() {
    console.log("test")
};











