const Questions = [
    {
        question: "What is the capital of France?",
        correct_answer: "Paris",
        incorrect_answers: ["London", "Berlin", "Madrid"]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        correct_answer: "William Shakespeare",
        incorrect_answers: ["Charles Dickens", "Mark Twain", "Jane Austen"]
    },
    {
        question: "How many letters are there in the English alphabet?",
        correct_answer: "26",
        incorrect_answers: ["24", "28", "20"]
    },
    {
        question: "which animal is known as the ship of the Desert?",
        correct_answer: "camel",
        incorrect_answers: ["tiger", "dog", "cow"]
    },
    {
        question: "How many days are there in a week ?",
        correct_answer: "7",
        incorrect_answers: ["6", "8", "9"]
    },
    {
        question: "How many continents are there in the world ?",
        correct_answer: "7",
        incorrect_answers: ["6", "8", "9"]
    },
        {
        question: "Name the national flower of India ?",
        correct_answer: "Lotus flower",
        incorrect_answers: ["jasmin", "mandhara", "rose"]
    },
            {
        question: "what is the chemical symbol for water?",
        correct_answer: "H2O",
        incorrect_answers: ["O2", "KCL", "NH3"]
    },
            {
        question: "what is the capital of India ?",
        correct_answer: "New Delhi",
        incorrect_answers: ["Panjab", "hydrabad", "Up"]
    },



    {
        question: "What is 2 + 2?",
        correct_answer: "4",
        incorrect_answers: ["3", "5", "6"]
    }
];

const ques = document.getElementById("ques");
let currQuestion = 0;
let score = 0;

function loadQues() {
    const opt = document.getElementById("opt");
    let currentQuestion = Questions[currQuestion].question;
    ques.innerText = currentQuestion;
    opt.innerHTML = "";

    const correctAnswer = Questions[currQuestion].correct_answer;
    const incorrectAnswers = Questions[currQuestion].incorrect_answers;
    const options = [correctAnswer, ...incorrectAnswers];
    options.sort(() => Math.random() - 0.5);

    options.forEach((option) => {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = option;
        choiceLabel.textContent = option;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    });
}

function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
    totalScore.innerHTML += "<h3>All Answers</h3>";
    Questions.forEach((el, index) => {
        totalScore.innerHTML += `<p>${index + 1}. ${el.correct_answer}</p>`;
    });
}

function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}

function checkAns() {
    const selectedAns = document.querySelector('input[name="answer"]:checked');
    if (selectedAns) {
        const answerValue = selectedAns.value;
        if (answerValue === Questions[currQuestion].correct_answer) {
            score++;
        }
        nextQuestion();
    } else {
        alert("Please select an answer.");
    }
}

window.onload = loadQues;
