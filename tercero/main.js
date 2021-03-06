// Adds question of questionTemplates to HTML
const sections = document.querySelectorAll('details');

let scores = [];

sections.forEach((section, i) => {
    scores.push([]);
    // Add all questions for this section
    questionTemplates[i].forEach((questionInfo, j) => {
        const question = new Question(questionInfo, i, j);
        section.append(question.finalCont);
        scores[i].push(question);
    });

    // Add score button at the end of each section
    const button = `<div class="center" style="padding-bottom:0.6em"><button onclick="sections[${i}].removeAttribute('open')" class="verify close-section">Cerrar sección</button></div>`;
    section.insertAdjacentHTML('beforeend', button);
});

function calcSectionScore(i) {
    // Calculate score
    let total = 0;
    let correct = 0;
    scores[i].forEach(el => {
        correct += el.score;
        total += el.total;
    });
    const score = (correct / total) * 100;

    const scoreText = sections[i].nextElementSibling;
    scoreText.style.removeProperty('display');

    // Display score
    if(score >= 90) {
        scoreText.style.color = '#25AC8A';
    } else if (score < 60) {
        scoreText.style.color = '#FF0076'
    } else {
        scoreText.style.color = '#ff9a00';
    }
    scoreText.innerHTML = score.toFixed(2);
}

function showTotalScore() {
    let totalScore = 0;

    // Add up all section scores
    sections.forEach(section => {
        const scoreText = section.nextElementSibling;
        totalScore += parseFloat(scoreText.innerHTML) ? parseFloat(scoreText.innerHTML) : 0;
    });

    totalScore /= 15;
    const totalText = document.getElementById('total-score');

    if(totalScore >= 90) {
        totalText.style.color = '#25AC8A';
    } else if (totalScore < 60) {
        totalText.style.color = '#FF0076'
    } else {
        totalText.style.color = '#ff9a00';
    }

    totalText.innerHTML = `<em>Calificación final: </em>${totalScore.toFixed(2)}`;
}