// Função para verificar a senha
function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === "ta tonta") {
        window.location.href = 'quiz.html'; // Redireciona para o quiz se a senha estiver correta
    } else {
        alert("Senha incorreta! Tente novamente.");
    }
}

// Evento de carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('quiz-container')) {
        showQuiz();
    }
});

function showQuiz() {
    document.getElementById('quiz-container').classList.remove('hidden');
    showNextQuestion(); // Inicia com a primeira pergunta
}

function nextQuestion(answer) {
    if (answer === 'errado') {
        alert("Resposta errada! Você vai ter que começar tudo de novo.");
        resetQuiz();
    } else {
        showNextQuestion();
    }
}

function showNextQuestion() {
    const questions = document.querySelectorAll('.quiz-question');
    const currentIndex = Array.from(questions).findIndex(q => !q.classList.contains('hidden'));

    if (currentIndex >= 0 && currentIndex < questions.length - 1) {
        questions[currentIndex].classList.add('hidden');
        const nextQuestion = questions[currentIndex + 1];

        nextQuestion.classList.remove('hidden');

        if (nextQuestion.querySelector('p').innerText.includes('gostou') ||
            nextQuestion.querySelector('p').innerText.includes('mereço')) {
            setTimeout(() => showNextQuestion(), 5000); // Mudar automaticamente após 5s
        }
    }
}

function avoidNoButton() {
    const noButton = document.getElementById('no-button');
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + 'px';
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + 'px';
}

function showResults() {
    window.location.href = "resultado.html";
}

function resetQuiz() {
    document.querySelectorAll('.quiz-question').forEach(question => {
        question.classList.add('hidden');
    });
    showNextQuestion(); // Mostrar a primeira pergunta
    window.scrollTo(0, 0);
}
