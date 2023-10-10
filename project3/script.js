const questions = [{
    question:"which is the largest animal in the world?",
    answers:[
        {text:"shark", correct:"false"},
        {text:"blue whale", correct:"true"},
        {text:"elephant", correct:"false"},
        {text:"giraffe", correct:"false"},
    ]
},
{
    question:"which is the largest planet in the world?",
    answers:[
        {text:"shark", correct:"false"},
        {text:"blue whale", correct:"true"},
        {text:"elephant", correct:"false"},
        {text:"giraffe", correct:"false"},
    ]
},
{
    question:"which is the largest dessert in the world?",
    answers:[
        {text:"kalahari", correct:"false"},
        {text:"Gobi", correct:"true"},
        {text:"sahara", correct:"false"},
        {text:"antarctica", correct:"false"},
    ]
},
{
    question:"which is the smallest continent in the world?",
    answers:[
        {text:"asia", correct:"false"},
        {text:"artic", correct:"false"},
        {text:"australia", correct:"true"},
        {text:"africa", correct:"false"},
    ]
},
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quiz = document.getElementsByClassName("quiz");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
         const button = document.createElement("button")
         button.innerHTML = answer.text;
         button.classList.add("btn");
         answerButtons.appendChild(button);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.removeChild){
        answerButtons.removeChild(answerButtons.firstChild);
        // console.log(answerButtons.removeChild(answerButtons.firstChild))
    }


}

startQuiz();

