let preguntas = `[{
    "q1.7": [
        "basic",
        "Manuel y Camila coleccionan plumas. Si Camila tiene int1 y Manuel tiene int2, <br>¿Cuántas plumas tienen en total?",
        [["int1", 200, 300], ["int2", 300, 400]],
        "+",
        ["fas fa-feather-alt", "fas fa-feather"]
    ],
    "q1.8": [
        "basic",
        "Rebeca compró tres libros por $int1, una cartuchera por $int2 y una docena de cuadernos por $int3. <br> ¿Cuánto gastó en total?",
        [["int1", 400, 500], ["int2", 50, 100], ["int3", 350, 400]],
        "+",
        ["fas fa-book", "fas fa-box", "far fa-address-book"]
    ],
    "q1.9": [
        "basic",
        "Felipe decidió salir al campo a recolectar flores. El lunes recolectó int1 y el martes int2. <br> ¿Cuántas flores recolectó entre los dos días?",
        [["int1", 600, 700], ["int2", 400, 450]],
        "+",
        ["fas fa-fan","fas fa-seedling"]
    ],
    "q1.10": [
        "basic",
        "Luisa se fue de viaje en carro. Si recorrió int1 kilómetros, hizo una parada para comer y luego recorrió int2 kilómetros más. <br> ¿Cuántos kilómetros recorrió en total?",
        [["int1", 300, 400], ["int2", 500, 600]],
        "+",
        ["fas fa-car-side", "fas fa-road"]
    ],
    "q1.13": [
        "basic",
        "En una finca hay int1 nutrias, int2 caballos y int3 cuervos. <br> ¿Cuántos animales hay en total?",
        [["int1", 300, 350], ["int2", 250, 300], ["int3", 450, 500]],
        "+",
        ["fas fa-otter", "fas fa-horse", "fas fa-crow"]
    ],
    "q1.14": [
        "basic",
        "Enrique le regaló a Carlos int1 limones y le quedan int2. <br> ¿Cuántos limones tenía?",
        [["int1", 300, 350], ["int2", 550, 600]],
        "+",
        ["fas fa-lemon", "far fa-lemon"]
    ],
    "q1.15": [
        "basic",
        "El estado Estadolandia tiene int1 kilómetros cuadrados de superficie, el Distrito Cuadrado tiene int2 y el estado Circulito tiene int3 kilómetros cuadrados. <br> ¿Cuántos kilómetros de superficie abarcan entre los tres estados?",
        [["int1", 7500, 8000], ["int2", 400, 500], ["int3", 1400, 1500]],
        "+",
        ["far fa-map", "far fa-square", "far fa-dot-circle"]
    ],
    "q1.16": [
        "basic",
        "El estado Mérida tiene int1 kilómetros cuadrados de superficie, Táchira tiene int2 y el estado Trujillo int3 kilómetros cuadrados. <br> ¿Cuántos kilómetros de superficie abarcan entre los tres estados andinos?",
        [["int1", 11300, 11400], ["int2", 11100, 11200], ["int3", 7350, 7450]],
        "+",
        ["fas fa-map-signs", "fas fa-map-marked-alt", "fas fa-mountain"]
    ],
    "q1.17": [
        "basic",
        "Una pareja de hipopótamos tuvieron un hipopótamo bebé. Si la mamá hipopótamo pesa int1 kilos, el papá hipopótamo int2 kilos y el bebé int3 kilos, <br> ¿Cuántos kilos pesan entre los tres?",
        [["int1", 6800, 8000], ["int2", 7500, 8000], ["int3", 100, 150]],
        "+",
        ["fas fa-hippo", "fas fa-hippo", "fas fa-hippo"],
        ["font-size: 18vh", "", "font-size: 10vh;"]
    ],
    "q1.18": [
        "basic",
        "En una terminal de autobuses durante la mañana hay int1 pasajeros, en la tarde int2 y en la noche int3. <br> ¿Cuántos pasajeros hay en todo el día?",
        [["int1", 500, 550], ["int2", 300, 400], ["int3", 400, 450]],
        "+",
        [""]
    ],
    "q1.19": [
        "basic",
        "El Río Orinoco tiene int1 kilómetros de largo y el Amazonas int2. <br> ¿Cuántos kilómetros de largo hay entre los dos ríos?",
        [["int1", 2100, 2150], ["int2", 6430, 6440]],
        "+",
        [""]
    ],
    "q1.20": [
        "basic",
        "Marcos sale a correr todos los días para hacer ejercicio. En la mañana corre int1 metros, en la tarde int2 y en la noche int3 metros. <br> ¿Cuántos metros recorre en un día?",
        [["int1", 500, 600], ["int2", 700, 800], ["int3", 600, 700]],
        "+",
        [""]
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
    "q2.8": [
        "basic",
        "El peso de un hipopótamo es de int1 kilogramos y el de un caballo es int2 kilogramos. <br> ¿En cuántos kilogramos supera el hipopótamo a la jirafa?",
        [["int1", 3500, 4000], ["int2", 380, 1000]],
        "-",
        ["fas fa-hippo", "fas fa-horse-head"]
    ],
    "q2.9": [
        "basic",
        "El Pico Bolívar en el estado Mérida tiene una altura de int1 metros y el Pico Espejo de int2. <br> ¿En cuántos metros supera el Pico Bolívar al Pico Espejo?",
        [["int1", 5005, 5010], ["int2", 4878, 4881]],
        "-",
        ["fas fa-mountain", "fas fa-mountain"],
        ["", "font-size: 18vh"]
    ],
    "q2.10": [
        "basic",
        "Guanare, la capital del estado Portuguesa tiene int1 habitantes. San Carlos, la capital del estado Cojedes tiene int2 habitantes. <br> ¿En cuántos habitantes supera Guanare a San Carlos?",
        [["int1", 157000, 158000], ["int2", 83000, 84000]],
        "-",
        ["fas fa-city", "fas fa-landmark"]
    ]
}]`;

class Preguntas {
    constructor() {
        var questions = JSON.parse(preguntas);
        var answers = {};

        this.setAnswer = function(id, value) { answers[id] = value; }
        this.isCorrect = function(id, value) { return answers[id] == value; }
        this.getSection = function(index) { return questions[index]; }
    }
}