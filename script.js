const playButton = document.getElementById("play-button");
const creditsButton = document.getElementById("credits-button");
const backToMenuButton = document.getElementById("back-to-menu");

const menuContainer = document.getElementById("menu-container");
const quizContainer = document.getElementById("quiz-container");
const creditsContainer = document.getElementById("credits-container");
const answerAudioCorrect = new Audio("./correct.mp3")
const fireSound = new Audio("./fire.mp3")

playButton.addEventListener("click", () => {
    menuContainer.style.display = "none";
    quizContainer.style.display = "flex";
    loadQuestion();
});

creditsButton.addEventListener("click", () => {
    menuContainer.style.display = "none";
    creditsContainer.style.display = "flex";
});

backToMenuButton.addEventListener("click", () => {
    creditsContainer.style.display = "none";
    menuContainer.style.display = "flex";
});

const questions = [
{
    question: "Na frase 'O jogador construiu uma casa de madeira.', quem é o sujeito?",
    answers: ["A casa", "De madeira", "O jogador", "Construiu"],
    correct: 2,
},
{
    question: "Na frase 'O creeper explodiu a ponte.', qual é o verbo e o que ele indica?",
    answers: [
        "O verbo é 'ponte' e indica um lugar.",
        "O verbo é 'explodir' e indica uma forma de transporte.",
        "O verbo é 'o' e indica um pronome.",
        "O verbo é 'explodiu' e indica uma ação.",
    ],
    correct: 3,
},
{
    question: "Corrija a frase: 'Eu minerei um montão blocos.'",
    answers: [
        "Eu minerei blocos montão.",
        "Eu minerei montão blocos.",
        "Eu minerarei um montão de blocos.",
        "Eu minerei um montão de blocos.",
    ],
    correct: 3,
},
{
    question: "Complete: 'Nós ___ (explorar) a caverna hoje.'",
    answers: ["exploraremos", "exploramos", "explorando", "explorou"],
    correct: 1,
},
{
    question: "Substitua o nome pelo pronome: 'O minerador achou diamantes dele.'",
    answers: [
        "O minerador achou as diamantes dele.",
        "O minerador achou seus diamantes.",
        "O minerador achou o diamante dele.",
        "O minerador achou o seu diamante.",
    ],
    correct: 1,
},
{
    question: "Separe a palavra 'picareta' em sílabas.",
    answers: ["pi-ca-re-ta", "pic-a-re-ta", "pi-ca-reta", "pi-ca-re"],
    correct: 0,
},
{
    question: "Qual é o plural de 'zumbi'?",
    answers: ["zumbies", "zumbys", "zumbiz", "zumbis"],
    correct: 3,
},
{
    question: "Complete a frase: 'O minério está ___ (raro/rara).'",
    answers: ["raras", "raro", "rara", "raros"],
    correct: 1,
},
{
    question: "Identifique o tipo de frase: 'Construa um abrigo antes que escureça!'",
    answers: ["Imperativa", "Interrogativa", "Exclamativa", "Declarativa"],
    correct: 0,
},
{
    question: "Transforme a frase no passado: 'Eu exploro cavernas todos os dias.'",
    answers: [
        "Eu explorar cavernas todos os dias.",
        "Eu explorava cavernas todos os dias.",
        "Eu explorei cavernas todos os dias.",
        "Eu explorarei cavernas todos os dias.",
    ],
    correct: 2,
},
    // Adicione outras perguntas aqui.
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const progressBar = document.getElementById("progress");
const restart = document.getElementById("restart");
function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;
    answerButtons.forEach((button, index) => {
        button.textContent = questionData.answers[index];
        button.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(index) {

const resultScreen = document.getElementById('resultScreen');
const resultMessage = document.getElementById('resultMessage');
    if (index === questions[currentQuestion].correct) {
        score++;
resultScreen.style.display = "flex";
resultMessage.textContent = "Parabéns, Você acertou!"
answerAudioCorrect.play()
    } else {
resultScreen.style.display = "flex";
resultMessage.textContent = "Ops, Você errou!"
    }
    currentQuestion++;

}
function nextQuestion() {
    resultScreen.style.display = "none";
    updateProgress();
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}
function updateProgress() {
    const progress = ((currentQuestion / questions.length) * 100).toFixed(2);
    progressBar.style.width = `${progress}%`;
}

function endQuiz() {
    questionElement.textContent = `Você completou o quiz! Pontuação: ${score}/${questions.length}`;
    restart.style.display = "flex";
    document.getElementById("answers").style.display = "none";
}

function restartQuiz() {
    fireSound.play()
    currentQuestion = 0;
    score = 0;
    restart.style.display = "none";
    document.getElementById("answers").style.display = "block";
    document.getElementById("body").style.color = "red"
    loadQuestion()
    updateProgress()
    progressBar.style.background = "#ff4a4a";
    progressBar.style.borderColor = "red"
    setTimeout(function() {
            progressBar.style.background = "lightgreen"
    progressBar.style.borderColor = "green"
    document.getElementById("body").style.color = "white"
    }, 100);
} 