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
        correct: "answer4"
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

a1.setAttribute("id", "userAnswerA");
a2.setAttribute("id", "userAnswerB");
a3.setAttribute("id", "userAnswerC");
a4.setAttribute("id", "userAnswerD");

// a1.addEventListener("click",logAnswerA);
// a2.addEventListener("click",logAnswerB);
// a3.addEventListener("click",logAnswerC);
// a4.addEventListener("click",logAnswerD);

a1.setAttribute("style", "margin: 10px");
a2.setAttribute("style", "margin: 10px");
a3.setAttribute("style", "margin: 10px");
a4.setAttribute("style", "margin: 10px");


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
    var questionIndex = 0;
    displayQuestion(questionIndex);

    a1.addEventListener("click", e => {
        var userAnswerA = document.querySelector("#userAnswerA").textContent;
        if (userAnswerA == questions[questionIndex].correct) {
            console.log("Correct Answer")
        } else {
            console.log("Incorrect Answer")
        }
    });
    a2.addEventListener("click", e => {
        var userAnswerB = document.querySelector("#userAnswerB").textContent;
        if (userAnswerB == questions[questionIndex].correct) {
            console.log("Correct Answer")
        } else {
            console.log("Incorrect Answer")
        }
    });
    a3.addEventListener("click", e => {
        var userAnswerC = document.querySelector("#userAnswerC").textContent;
        if (userAnswerC == questions[questionIndex].correct) {
            console.log("Correct Answer")
        } else {
            console.log("Incorrect Answer")
        }
    });
    a4.addEventListener("click", e => {
        var userAnswerD = document.querySelector("#userAnswerD").textContent;
        if (userAnswerD == questions[questionIndex].correct) {
            console.log("Correct Answer")
        } else {
            console.log("Incorrect Answer")
        }
    });
}




//just call take quiz function 10 times passing number into takeQuiz(). It should then pull each question. Set it up 
//with a continue button after each question. Everything will need to go into a while loop with timer.
// function takeQuiz(){
//     for (var questionIndex = 0; questionIndex < questions.length; questionIndex++) {
//         displayQuestion(questionIndex);
//         let userAnswer = logAnswer;
//         var userAnswerA = userAnswer.answerA;
//         var userAnswerB = userAnswer.answerB;
//         var userAnswerC = userAnswer.answerC;
//         var userAnswerD = userAnswer.answerD;

//         if (userAnswerA == questions[questionIndex].correct) {
//             console.log("Correct Answer")
//         } else if  (userAnswerB == questions[questionIndex].correct){
//             console.log("Correct Answer")
//         } else if  (userAnswerC == questions[questionIndex].correct){
//             console.log("Correct Answer")
//         } else if  (userAnswerD == questions[questionIndex].correct){
//             console.log("Correct Answer")
//         }
//     }
// }


// function logAnswerA() {
//     var userAnswerA = document.querySelector("#userAnswerA").textContent;
//     // return userAnswerA;
//     console.log(userAnswerA);
// };

function logAnswerB() {
    var userAnswerB = document.querySelector("#userAnswerB").textContent;
    // return userAnswerB
    console.log(userAnswerB);
};

function logAnswerC() {
    var userAnswerC = document.querySelector("#userAnswerC").textContent;
    // return userAnswerC;
    console.log(userAnswerC);
};

function logAnswerD() {
    var userAnswerD = document.querySelector("#userAnswerD").textContent;
    // return userAnswerD;
    console.log(userAnswerD);
};













