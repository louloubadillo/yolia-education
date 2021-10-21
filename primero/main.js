// Stores all information on questions to be built
const questionTemplates = [[
    [
        "contar",
        "¿Cuántos carros hay?",
        ["int1"],
        [[1,8]],
        "c",
        [["fas fa-car", "font-size: 5vw;"]]
    ],
    [
        "contar",
        "¿Cuántos perros hay?",
        ["int1"],
        [[7,15]],
        "c",
        [["fas fa-dog", "font-size: 5vw;"]]
    ],
    [
        "contar",
        "¿Cuántas manzanas hay?",
        ["int1"],
        [[5,12]],
        "c",
        [["fas fa-apple-alt", "font-size: 5vw;"]]
    ],
    [
        "contar",
        "¿Cuántos libros hay?",
        ["int1"],
        [[3,15]],
        "c",
        [["fas fa-book", "font-size: 5vw;"]]
    ],
],
[
    [
        "agrupar",
        "¿Cuántos círculos hay?",
        ["int1"],
        [[1,12]],
        "a",
        [["fas fa-circle", "font-size: 5vw;"], ["fas fa-square", "font-size: 5vw;"], ["fas fa-play fa-rotate-270", "font-size: 5vw;"], ["fas fa-star", "font-size: 5vw;"]]
    ],
    [
        "agrupar",
        "¿Cuántos triángulos hay?",
        ["int1"],
        [[1,12]],
        "a",
        [["fas fa-play fa-rotate-270", "font-size: 5vw;"],["fas fa-circle", "font-size: 5vw;"], ["fas fa-square", "font-size: 5vw;"], ["fas fa-star", "font-size: 5vw;"]]
    ],
    [
        "agrupar",
        "¿Cuántos cuadrados hay?",
        ["int1"],
        [[1,12]],
        "a",
        [["fas fa-square", "font-size: 5vw;"],["fas fa-circle", "font-size: 5vw;"],  ["fas fa-play fa-rotate-270", "font-size: 5vw;"], ["fas fa-star", "font-size: 5vw;"]]
    ],
    [
        "agrupar",
        "¿Cuántas estrellas hay?",
        ["int1"],
        [[1,12]],
        "a",
        [["fas fa-star", "font-size: 5vw;"],["fas fa-circle", "font-size: 5vw;"], ["fas fa-square", "font-size: 5vw;"], ["fas fa-play fa-rotate-270", "font-size: 5vw;"]]
    ],
],
[
    [
        "seleccionar",
        "¿Qué forma tiene?",
        ["triángulo"],
        [[1,12]],
        "s",
        [["fas fa-pizza-slice ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué forma tiene?",
        ["círculo"],
        [[1,12]],
        "s",
        [["fas fa-basketball-ball ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué forma tiene?",
        ["cuadrado"],
        [[1,12]],
        "s",
        [["fas fa-dice-six ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué forma tiene?",
        ["rectángulo"],
        [[1,12]],
        "s",
        [["fas fa-ruler-horizontal ", ""]]
    ],
],
[
    [
        "seleccionar",
        "¿Qué significa este símbolo?",
        ["paz"],
        [[1,12]],
        "s",
        [["fas fa-peace ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué significa este símbolo?",
        ["amor"],
        [[1,12]],
        "s",
        [["fas fa-heart ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué significa este símbolo?",
        ["no fumar"],
        [[1,12]],
        "s",
        [["fas fa-smoking-ban ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué significa este símbolo?",
        ["dinero"],
        [[1,12]],
        "s",
        [["fas fa-money-bill-wave ", ""]]
    ],
    
],

[
    [
        "basic",
        "María tiene int1 manzanas y Juan tiene int2 limones<br><br>¿Cuántas frutas tienen en total?",
        ["int1", "int2"],
        [[2, 10]],
        "+",
        [["fas fa-apple-alt", "font-size: 12vw;"], ["fas fa-lemon","font-size: 12vw;"]]
    ],
    [
        "basic",
        "Un gato pesa int1 kg y un caballo pesa int2 kg <br><br>¿Cuánto pesan en total ambos animales?",
        ["int1", "int2"],
        [[2, 10]],
        "+",
        [["fas fa-cat", "font-size: 12vw;"], ["fas fa-horse", "font-size: 12vw;"]]
    ],
    [
        "basic",
        "Eduardo trae en su mochila un libro de int1 kg y una computadora de int2 kg <br><br>¿Cuántos kg está cargando Eduardo en total?",
        ["int1", "int2"],
        [[2, 10]],
        "+",
        [["fas fa-book", "font-size: 12vw;"], ["fas fa-laptop", "font-size: 12vw;"]]
    ],
    [
        "basic",
        "A Daniel le encantan los animales. Tiene int1 peces y int2 perros<br><br>¿Cuántas mascotas tiene Daniel en total? ",
        ["int1", "int2"],
        [[2, 10]],
        "+",
        [["fas fa-fish", "font-size: 12vw;"], ["fas fa-dog", "font-size: 12vw;"]]
    ]

],
[
    [
        "basic",
        "Una moto pesa int1 kg y una bicicleta pesa int2 kg<br><br>¿Cuántos kg pesan en total?",
        ["int1", "int2"],
        [[2, 20]],
        "+",
        [["fas fa-motorcycle", "font-size: 12vw;"], ["fas fa-bicycle", "font-size: 12vw;"]]
    ],
    [
        "basic",
        "Un gato pesa int1 kg y un caballo pesa int2 kg <br><br>¿Cuántos kg pesan en total ambos animales?",
        ["int1", "int2"],
        [[2, 20]],
        "+",
        [["fas fa-cat", "font-size: 12vw;"], ["fas fa-horse", "font-size: 12vw;"]]
    ],
    [
        "basic",
        "Enfrente a la casa de Regina hay int1 coches y int2 taxis  <br><br>¿Cuántos vehículos hay en total?",
        ["int1", "int2"],
        [[2, 20]],
        "+",
        [["fas fa-car", "font-size: 12vw;"], ["fas fa-taxi", "font-size: 12vw;"]]
    ],
    [
        "basic",
        "Martha compró para su fiesta de cumpleaños int1 helados de chocolate y int2 helados de menta<br><br>¿Cuántos helados compró Martha en total? ",
        ["int1", "int2"],
        [[2, 20]],
        "+",
        [["fas fa-ice-cream", "font-size: 12vw;"], ["fas fa-ice-cream", "font-size: 12vw;"]]
    ]
],
[
    [
        "basic",
        "Raúl está armando un rompecabezas de int1 piezas, de las cuales ya usó int2. <br><br>¿Cuántas piezas le faltan por usar? ",
        ["int1", "int2"],
        [[2, 10]],
        "-",
        [["fas fa-puzzle-piece", "font-size: 12vw;"], ["fas fa-puzzle-piece","font-size: 12vw;"]]
    ],
    [
        "basic",
        "Fernanda compró int1 galletas y le regaló int2 a su hermana.  <br><br>¿Cuántas galletas le quedan a Fernanda?",
        ["int1", "int2"],
        [[2, 10]],
        "-",
        [["fas fa-cookie", "font-size: 12vw;"], ["fas fa-cookie", "font-size: 12vw;"]]
    ],
    [
        "basic",
        "Mariana quiere leer int1 libros este año. Hasta ahora ha leído int2 <br><br>¿Cuántos libros le falta leer para cumplir su meta?",
        ["int1", "int2"],
        [[2, 10]],
        "-",
        [["fas fa-book", "font-size: 12vw;"], ["fas fa-book", "font-size: 12vw;"]]
    ],
    [
        "basic",
        "El árbol de Sofía tenía int1 hojas, pero en otroño se cayeron int2 <br><br>¿Cuántas hojas le quedan al árbol? ",
        ["int1", "int2"],
        [[2, 10]],
        "-",
        [["fas fa-leaf", "font-size: 12vw;"], ["fab fa-canadian-maple-leaf", "font-size: 12vw;"]]
    ]

],
[
    [
        "basic-drag",
        "En un panal viven int1 abejas. Un día, int2 salen a buscar alimento. <br><br> Arrastra las abejas para llenar la resta y saber cuántas abejas quedan en el panal.",
        ["int1","int2"],
        [[1, 40], [1, 30]],
        "-",
        [["fab fa-forumbee", ""], ["fab fa-forumbee", "font-size: 17vh;"]]
    ],
    [
        "basic",
        "Un gato pesa int1 kg y un caballo pesa int2 kg <br><br>¿Cuántos kg pesan en total ambos animales?",
        ["int1", "int2"],
        [[2, 20]],
        "+",
        [["fas fa-cat", "font-size: 12vw;"], ["fas fa-horse", "font-size: 12vw;"]]
    ],
    [
        "basic",
        "Enfrente a la casa de Regina hay int1 coches y int2 taxis  <br><br>¿Cuántos vehículos hay en total?",
        ["int1", "int2"],
        [[2, 20]],
        "+",
        [["fas fa-car", "font-size: 12vw;"], ["fas fa-taxi", "font-size: 12vw;"]]
    ],
    [
        "basic",
        "Martha compró para su fiesta de cumpleaños int1 helados de chocolate y int2 helados de menta<br><br>¿Cuántos helados compró Martha en total? ",
        ["int1", "int2"],
        [[2, 20]],
        "+",
        [["fas fa-ice-cream", "font-size: 12vw;"], ["fas fa-ice-cream", "font-size: 12vw;"]]
    ]
]
]

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