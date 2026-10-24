
const questions = [
    {
        question: "Define photosynthesis.",
        answer: "Photosynthesis is the process by which green plants make food using sunlight."
    },
    {
        question: "What gas do plants absorb during photosynthesis?",
        answer: "Carbon dioxide"
    },
    {
        question: "What is the basic unit of life?",
        answer: "Cell"
    },
    {
        question: "Which organ pumps blood around the body?",
        answer: "Heart"
    },
    {
        question: "What is the chemical formula for water?",
        answer: "H2O"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const button = document.getElementById("main-btn");
const note = document.querySelector(".note");

// Display the current question
function showQuestion() {
    questionElement.textContent =
        `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;

    answerInput.value = "";
    answerInput.disabled = false;
    answerInput.style.display = "block";

    note.style.display = "block";
    button.textContent = "Next Question";
}

// Submit answer and immediately move forward
button.addEventListener("click", function () {
    const userAnswer = answerInput.value.trim();

    // Don't continue if the answer is empty
    if (userAnswer === "") {
        return;
    }

    const correctAnswer = questions[currentQuestion].answer;

    // Mark the answer silently
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
    }

    // Move to the next question immediately
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
});

// Show score at the end
function showFinalScore() {
    questionElement.textContent =
        `You're done with this quiz you scored ${score} out of ${questions.length}.`;

    answerInput.style.display = "none";
    button.style.display = "none";
    note.style.display = "none";
}
// Start the quiz
showQuestion();


// Inside your renderer.js or frontend script
document.getElementById('my-action-button').addEventListener('click', () => {

    // Check if running inside the actual desktop app
    const isDesktopApp = typeof window !== 'undefined' && window.process && window.process.type;

    if (isDesktopApp) {
        // 🖥️ Desktop App Behavior: Call your Electron backend safely
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('perform-native-task');
    } else {
        // 🌐 Regular Browser Behavior: Provide a web fallback or a friendly alert
        console.log("Running as a portfolio web demo.");
        alert("This feature simulates saving a file locally! Download the desktop version for full access.");
    }
});

