// Variáveis globais
let currentQuestion = 1;
let totalQuestions = 5;
let correctAnswers = 0;

// Inicialização quando o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('quiz-container')) {
        initializeQuiz();
    }
});

function initializeQuiz() {
    updateProgressBar();
    showCurrentQuestion();
}

function selectAnswer(button, isCorrect) {
    // Desabilitar todos os botões da pergunta atual
    const currentQuestionElement = document.querySelector('.quiz-question.active');
    const allButtons = currentQuestionElement.querySelectorAll('.option-button');
    
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('selected');
    });
    
    // Marcar a resposta selecionada
    button.classList.add('selected');
    
    if (isCorrect) {
        button.classList.add('correct');
        correctAnswers++;
        
        // Avançar para próxima pergunta após um delay
        setTimeout(() => {
            nextQuestion();
        }, 1500);
    } else {
        button.classList.add('incorrect');
        
        // Mostrar mensagem de erro e resetar
        setTimeout(() => {
            showErrorAndReset();
        }, 1500);
    }
}

function nextQuestion() {
    const currentQuestionElement = document.querySelector('.quiz-question.active');
    currentQuestionElement.classList.remove('active');
    
    currentQuestion++;
    
    if (currentQuestion <= totalQuestions) {
        updateProgressBar();
        
        // Mostrar próxima pergunta
        setTimeout(() => {
            showCurrentQuestion();
        }, 500);
    }
}

function showCurrentQuestion() {
    const questionElement = document.querySelector(`[data-question="${currentQuestion}"]`);
    
    if (questionElement) {
        questionElement.classList.add('active');
        
        // Se for pergunta troll, avançar automaticamente
        if (questionElement.classList.contains('troll-question')) {
            setTimeout(() => {
                nextQuestion();
            }, 3000);
        }
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress');
    if (progressBar) {
        const percentage = ((currentQuestion - 1) / totalQuestions) * 100;
        progressBar.style.width = percentage + '%';
    }
}

function showErrorAndReset() {
    alert("Resposta errada! Você vai ter que começar tudo de novo. 😅");
    resetQuiz();
}

function resetQuiz() {
    currentQuestion = 1;
    correctAnswers = 0;
    
    // Esconder todas as perguntas
    document.querySelectorAll('.quiz-question').forEach(question => {
        question.classList.remove('active');
        
        // Reabilitar botões e remover classes
        const buttons = question.querySelectorAll('.option-button');
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('selected', 'correct', 'incorrect');
        });
    });
    
    // Mostrar primeira pergunta
    updateProgressBar();
    setTimeout(() => {
        showCurrentQuestion();
    }, 500);
}

function avoidNoButton() {
    const noButton = document.getElementById('no-button');
    const container = document.getElementById('quiz-container');
    
    // Calcular nova posição aleatória
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    // Aplicar nova posição
    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
    
    // Adicionar efeito visual
    noButton.style.transform = 'scale(0.9)';
    setTimeout(() => {
        noButton.style.transform = 'scale(1)';
    }, 100);
}

function showResults() {
    // Adicionar efeito de transição
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = "resultado.html";
    }, 500);
}