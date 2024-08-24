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
    } else {
        showResults();
    }
}

function avoidNoButton() {
    const noButton = document.getElementById('no-button');
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + 'px';
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + 'px';
}

function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    window.scrollTo(0, document.body.scrollHeight);
}

function resetQuiz() {
    document.querySelectorAll('.quiz-question').forEach(question => {
        question.classList.add('hidden');
    });
    showNextQuestion(); // Mostrar a primeira pergunta
    window.scrollTo(0, 0);
}
