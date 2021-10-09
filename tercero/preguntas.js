let preguntas = `[{
    `+
    // "q1.s": [
    //     "sort",
    //     "Ayuda a Juan a resolver las siguientes sumas. Cuando acabes, arrastra los circulitos para indicar el mayor con 1 y el menor con 5.",
    //     ["q1.1", "q1.2", "q1.3", "q1.4", "q1.5"],
    //     [[3000, 200], [100, 20], [1, 50]],
    //     ["no1", "no2", "no3", "no4", "no5"]
    // ],
    `
    "q1.6": [
        "basic",
        "Enrique le regaló a Carlos int1 limones y le quedan int2. <br><br> ¿Cuántos limones tenía?",
        [["int1", 300, 350], ["int2", 550, 600]],
        "+",
        ["fas fa-lemon", "far fa-lemon"]
    ],
    "q1.7": [
        "basic",
        "Una pareja de hipopótamos tuvieron un hipopótamo bebé. Si la mamá hipopótamo pesa int1 kilos, el papá hipopótamo int2 kilos y el bebé int3 kilos, <br><br> ¿Cuántos kilos pesan entre los tres?",
        [["int1", 6800, 8000], ["int2", 7500, 8000], ["int3", 100, 150]],
        "+",
        ["fas fa-hippo", "fas fa-hippo", "fas fa-hippo"],
        ["font-size: 18vh", "", "font-size: 10vh;"]
    ]
},
{
    "q2.6": [
        "basic",
        "Un cartero debe entregar int1 cartas por semana. Si el lunes repartió int2 y el martes int3, <br> ¿Cuántas cartas le faltan por repartir?",
        [["int1", 7000, 8000], ["int2", 2000, 2500], ["int3", 1000, 2000]],
        "-",
        ["fas fa-mail-bulk", "fas fa-envelope", "far fa-envelope"]
    ],
    "q2.9": [
        "basic",
        "El Pico Bolívar en el estado Mérida tiene una altura de int1 metros y el Pico Espejo de int2. <br> ¿En cuántos metros supera el Pico Bolívar al Pico Espejo?",
        [["int1", 5005, 5010], ["int2", 4878, 4881]],
        "-",
        ["fas fa-mountain", "fas fa-mountain"],
        ["", "font-size: 18vh"]
    ]
}]`;

class Preguntas {
    constructor() {
        var questions = JSON.parse(preguntas);
        var answers = {};

        this.setAnswer = function(id, value) { answers[id] = value; }
        this.isCorrect = function(id, value) { return answers[id] == value; }
        this.getSection = function(index) { return questions[index]; }
        this.getAnswer = function(id) { return answers[id]; }
    }
}