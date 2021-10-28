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
        ["Triángulo"],
        [[1,12]],
        "s",
        [["fas fa-pizza-slice ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué forma tiene?",
        ["Círculo"],
        [[1,12]],
        "s",
        [["fas fa-basketball-ball ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué forma tiene?",
        ["Cuadrado"],
        [[1,12]],
        "s",
        [["fas fa-dice-six ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué forma tiene?",
        ["Rectángulo"],
        [[1,12]],
        "s",
        [["fas fa-ruler-horizontal ", ""]]
    ],
],
[
    [
        "seleccionar",
        "¿Qué significa este símbolo?",
        ["Paz"],
        [[1,12]],
        "s",
        [["fas fa-peace ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué significa este símbolo?",
        ["Amor"],
        [[1,12]],
        "s",
        [["fas fa-heart ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué significa este símbolo?",
        ["No fumar"],
        [[1,12]],
        "s",
        [["fas fa-smoking-ban ", ""]]
    ],
    [
        "seleccionar",
        "¿Qué significa este símbolo?",
        ["Dinero"],
        [[1,12]],
        "s",
        [["fas fa-money-bill-wave ", ""]]
    ],
    
],
[
    [
        "escribir",
        "Escribe en letra el número",
        ["Quince"],
        [[1,5]],
        "e",
        [["15 ", ""]]
    ],
    [
        "escribir",
        "Escribe en letra el número",
        ["Veintitrés"],
        [[1,5]],
        "e",
        [["23 ", ""]]
    ],
    [
        "escribir",
        "Escribe en letra el número",
        ["Trece"],
        [[1,5]],
        "e",
        [["13 ", ""]]
    ],
    [
        "escribir",
        "Escribe en letra el número",
        ["Veintiocho"],
        [[1,5]],
        "e",
        [["28 ", ""]]
    ],
    
],
[
    [
        "sort",
        "Ayuda a Juan a resolver las siguientes sumas. Cuando acabes, arrastra los circulitos para indicar el menor con 1 y el mayor con 2.",
        [[1, 10, 0]],
        2,
        2,
        "+"
    ],
    [
        "sort",
        "Ayuda a Fernanda a resolver las siguientes sumas. Cuando acabes, arrastra los circulitos para indicar el menor con 1 y el mayor con 2.",
        [[1, 10, 0]],
        2,
        2,
        "+"
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
        "decenas",
        "¿Cuántos decenas completas de carros hay?",
        ["int1"],
        [[10,20]],
        "c",
        [["fas fa-car", "font-size: 5vw;"]]
    ],
    [
        "decenas",
        "¿Cuántas decenas completas de perros hay?",
        ["int1"],
        [[7,15]],
        "c",
        [["fas fa-dog", "font-size: 5vw;"]]
    ],
    [
        "decenas",
        "¿Cuántas decenas completas de manzanas hay?",
        ["int1"],
        [[15,20]],
        "c",
        [["fas fa-apple-alt", "font-size: 5vw;"]]
    ],
    [
        "decenas",
        "¿Cuántas decenas completas de libros hay?",
        ["int1"],
        [[12,25]],
        "c",
        [["fas fa-book", "font-size: 5vw;"]]
    ],
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
        "Pedro decidió ahorrar para comprarse un juego de Nintendo. Si todos los meses ahorra $int1, <br><br> ¿Cuánto llevará ahorrado al cabo de int2 meses? Arrastra las imágenes para armar la multiplicación.",
        ["int1", "int2"],
        [[100, 200], [6, 11]],
        "×",
        [["fas fa-coins", ""], ["far fa-calendar-alt", ""]]
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