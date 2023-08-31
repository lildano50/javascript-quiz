var timerElement = document.querySelector(".timer-count");
var playerPoints = 0;
// var qIndex = 0;
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var index = 0;

var startGame = document.querySelector("#begin");
var begin = document.createElement("button");
startGame.appendChild(begin);
begin.textContent = "Start Game";
begin.addEventListener("click", beginGame);

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

a1.setAttribute("style", "margin: 10px");
a2.setAttribute("style", "margin: 10px");
a3.setAttribute("style", "margin: 10px");
a4.setAttribute("style", "margin: 10px");

// Create questions array
let questions = [
    {
        question: "Question 1",
        choiceA: "1answer1",
        choiceB: "1answer2",
        choiceC: "1answer3",
        choiceD: "1answer4",
        correct: "1answer1"
    },
    {
        question: "Question 2",
        choiceA: "2answer1",
        choiceB: "2answer2",
        choiceC: "2answer3",
        choiceD: "2answer4",
        correct: "2answer1"
    },
    {
        question: "Question 3",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "answer1"
    },
    {
        question: "Question 4",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "answer1"
    },
    {
        question: "Question 5",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "answer1"
    },
    {
        question: "Question 6",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "answer1"
    },
    {
        question: "Question 7",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "answer1"
    },
    {
        question: "Question 8",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "answer1"
    },
    {
        question: "Question 9",
        choiceA: "answer1",
        choiceB: "answer2",
        choiceC: "answer3",
        choiceD: "answer4",
        correct: "answer1"
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

function nextQuestion(){
    index++;
    startGame.innerHTML = "";
    var nextQuestion = document.querySelector("#nextQuestion");
    var nextQuestButton = document.createElement("button");
    nextQuestion.appendChild(nextQuestButton);
    nextQuestButton.textContent = "Next Question";
    nextQuestButton.addEventListener("click",function(){
        nextQuestion.innerHTML = "";
        takeQuiz(index);
        a1.removeAttribute("style", "background")
        a2.removeAttribute("style", "background")
        a3.removeAttribute("style", "background")
        a4.removeAttribute("style", "background")
        a1.setAttribute("style", "margin: 10px");
        a2.setAttribute("style", "margin: 10px");
        a3.setAttribute("style", "margin: 10px");
        a4.setAttribute("style", "margin: 10px");
    });
}


function displayQuestion(qIndex) {
    body.appendChild(qAndABlock);
    qAndABlock.appendChild(stateQuestion);
    qAndABlock.appendChild(answerBlock);
    answerBlock.appendChild(a1);
    answerBlock.appendChild(a2);
    answerBlock.appendChild(a3);
    answerBlock.appendChild(a4);

    let quest = questions[qIndex];
    stateQuestion.textContent = quest.question;
}

function displayAnswers(answer) {
    a1.textContent = questions[answer].choiceA;
    a2.textContent = questions[answer].choiceB;
    a3.textContent = questions[answer].choiceC;
    a4.textContent = questions[answer].choiceD;
}

function chooseAnswer(aIndex) {
    a1.addEventListener("click", function(event){
        userAnswerA = questions[aIndex].choiceA;
        if (userAnswerA === questions[aIndex].correct) {
            console.log("Correct Answer")
            console.log(userAnswerA);
            playerPoints += 10;
            a1.setAttribute("style", "background: green; color: white;")
        } else {
            console.log("Incorrect Answer")
            timerCount -= 10;
            a1.setAttribute("style", "background: red; color: white;")
        }
    });
    a2.addEventListener("click", function(event){
        userAnswerB = questions[aIndex].choiceB;
        if (userAnswerB === questions[aIndex].correct) {
            console.log("Correct Answer")
            playerPoints += 10;
            a2.setAttribute("style", "background: green; color: white;")
        } else {
            console.log("Incorrect Answer")
            timerCount -= 10;
            a2.setAttribute("style", "background: red; color: white;")
        }
    });
    a3.addEventListener("click", function(event){
        userAnswerC = questions[aIndex].choiceC;
        if (userAnswerC === questions[aIndex].correct) {
            console.log("Correct Answer")
            playerPoints += 10;
            a3.setAttribute("style", "background: green; color: white;")
        } else {
            console.log("Incorrect Answer")
            timerCount -= 10;
            a3.setAttribute("style", "background: red; color: white;")
        }
    });
    a4.addEventListener("click", function(event){
        userAnswerD = questions[aIndex].choiceD;
        if (userAnswerD === questions[aIndex].correct) {
            console.log("Correct Answer")
            playerPoints += 10;
            a4.setAttribute("style", "background: green; color: white;")
        } else {
            console.log("Incorrect Answer")
            timerCount -= 10;
            a4.setAttribute("style", "background: red; color: white;")
        }
    });
}

function takeQuiz(questionIndex){
    displayQuestion(questionIndex);
    displayAnswers(questionIndex);
    chooseAnswer(questionIndex);
    nextQuestion();
    pointsCounter(playerPoints);
}

function beginGame() {
    question = 0;
    timerCount = 100;
    takeQuiz(question)
    startTimer();
};

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
        //   winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
};

function gameOver(){
};

function pointsCounter(pPoints){
    points = document.querySelector("#playerScore");
    counter = document.createElement("h3");
    points.appendChild(counter);
    counter.textContent = pPoints;
};