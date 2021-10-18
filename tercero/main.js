// Stores all information on questions to be built
const questionTemplates = [[
    [
        "sort",
        "Ayuda a Juan a resolver las siguientes sumas. Cuando acabes, arrastra los circulitos para indicar el menor con 1 y el mayor con 5.",
        [[50, 500]],
        5,
        3,
        "+"
    ],
    [
        "basic",
        "Manuel y Camila coleccionan plumas. Si Camila tiene int1 y Manuel tiene int2, <br><br>¿Cuántas plumas tienen en total?",
        ["int1", "int2"],
        [[200, 400]],
        "+",
        [["fas fa-feather-alt", ""], ["fas fa-feather", ""]]
    ],
    [
        "basic-drag",
        "Enrique le regaló a Carlos int1 limones y le quedan int2. <br><br> Arrastra los limones para llenar la suma y decir cuántos limones tenía.",
        ["int1", "int2"],
        [[50, 100]],
        "+",
        [["fas fa-lemon", ""], ["far fa-lemon", ""]]
    ],
    [
        "basic",
        "Una pareja de hipopótamos tuvieron un hipopótamo bebé. Si la mamá hipopótamo pesa int1 kilos, el papá hipopótamo int2 kilos y el bebé int3 kilos, <br><br> ¿Cuántos kilos pesan entre los tres?",
        ["int1", "int2", "int3"],
        [[6800, 8000], [7500, 8000], [100, 150]],
        "+",
        [["fas fa-hippo", "font-size: 18vh;"], ["fas fa-hippo", ""], ["fas fa-hippo", "font-size: 10vh;"]]
    ]
],
[
    [
        "sort",
        "Ayuda a Anita a resolver las siguientes restas. Cuando acabes, arrastra los circulitos para indicar el menor con 1 y el mayor con 5.",
        [[50, 500]],
        5,
        2,
        "-"
    ],
    [
        "basic-drag",
        "Un cartero debe entregar int1 cartas por semana. El lunes repartió int2 cartas. <br><br> Arrastra las cartas para llenar la resta y decir cuántas cartas le faltan.",
        ["int1", "int2"],
        [[7000, 8000], [1000, 2000]],
        "-",
        [["fas fa-envelope", ""], ["far fa-envelope", ""]]
    ],
    [
        "basic",
        "El Pico Bolívar en el estado Mérida tiene una altura de int1 metros y el Pico Espejo de int2 metros. <br><br> ¿En cuántos metros supera el Pico Bolívar al Pico Espejo?",
        ["int1", "int2"],
        [[5005, 5010], [4878, 4881]],
        "-",
        [["fas fa-mountain",""], ["fas fa-mountain", "font-size: 18vh"]],
    ],
    [
        "basic-drag",
        "En un panal viven int1 abejas. Un día, int2 salen a buscar alimento. <br><br> Arrastra las abejas para llenar la resta y saber cuántas abejas quedan en el panal.",
        ["int1","int2"],
        [[1000, 1500], [500, 800]],
        "-",
        [["fab fa-forumbee", ""], ["fab fa-forumbee", "font-size: 17vh;"]]
    ],
],
[

]]

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
    const button = `<div class="center"><button onclick="showScore(${i})" class="verify check-score">Calcular puntuación</button></div>`;
    section.insertAdjacentHTML('beforeend', button);
});

function showScore(i) {
    // Calculate score
    let total = 0;
    let correct = 0;
    scores[i].forEach(el => {
        correct += el.score;
        total += el.total;
    });
    const score = Math.floor((correct / total) * 100);

    // Close section
    sections[i].removeAttribute('open');

    const scoreText = sections[i].nextElementSibling;
    scoreText.style.removeProperty('display');

    // Display score
    if(score >= 90) {
        scoreText.style.color = '#25AC8A';
    } else if (score < 60) {
        scoreText.style.color = '#FF0076'
    }
    scoreText.innerHTML = `${score}%`;
}