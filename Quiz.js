const answers = {
    q1: "Lion",
    q2: "Blue Whale",
    q3: "Peacock",
    q4: "France",
    q5: "George Washington",
    q6: "Tokyo"
};

function nextPage(currentPage) {
    document.getElementById(`page${currentPage}`).classList.add('hidden');
    document.getElementById(`page${currentPage + 1}`).classList.remove('hidden');
}

function showResults() {
    let score = 0;
    const totalQuestions = 6;

    for (let i = 1; i <= totalQuestions; i++) {
        const form = document.getElementById(`form${i}`);
        const selectedAnswer = form.querySelector('input[name="q' + i + '"]:checked');

        if (selectedAnswer && selectedAnswer.value === answers['q' + i]) {
            score++;
        }
    }

    document.getElementById('score').innerText = `You scored ${score} out of ${totalQuestions}.`;
    document.getElementById('score').classList.remove('hidden');
}
