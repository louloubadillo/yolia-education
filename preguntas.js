let preguntas = '[{"q1.7": ["Manuel y Camila coleccionan plumas. Si Camila tiene int1 y Manuel tiene int2, <br>¿Cuántas plumas tienen en total?",[["int1",200,300],["int2",300,400]],"+",["fas fa-feather-alt","fas fa-feather"]],"q1.8": ["Rebeca compró tres libros por $int1, una cartuchera por $int2 y una docena de cuadernos por $int3. <br> ¿Cuánto gastó en total?",[["int1",400,500],["int2",50,100],["int3",350,400]],"+",["fas fa-book","fas fa-box","far fa-address-book"]]'/*,"q1.9": ["Felipe decidió salir al campo a recolectar flores. El lunes recolectó int1 y el martes int2. <br> ¿Cuántas flores recolectó entre los dos días?",[["int1",600,700],["int2",400,450]],"+",["fas fa-fan","fas fa-seedling"]],"q1.10": ["Luisa se fue de viaje en carro. Si recorrió int1 kilómetros, hizo una parada para comer y luego recorrió int2 kilómetros más. <br> ¿Cuántos kilómetros recorrió en total?",[["int1",300,400],["int2",500,600]],"+",["fas fa-car-side","fas fa-road"]],"q1.13": ["En una finca hay int1 nutrias, int2 caballos y int3 cuervos. <br> ¿Cuántos animales hay en total?",[["int1",300,350],["int2",250,300],["int3",450,500]],"+",["fas fa-otter","fas fa-horse","fas fa-crow"]],"q1.14": ["Enrique le regaló a Carlos int1 limones y le quedan int2. <br> ¿Cuántos limones tenía?",[["int1",300,350],["int2",550,600]],"+",["fas fa-lemon","far fa-lemon"]],"q1.15": ["El Estado Estadolandia tiene int1 kilómetros cuadrados de superficie, el Distrito Cuadrado tiene int2 y el Estado Circulito tiene int3 kilómetros cuadrados. <br> ¿Cuántos kilómetros de superficie abarcan entre los tres estados?",[["int1",7500,8000],["int2",400,500],["int3",1400,1500]],"+",["far fa-map","far fa-square","far fa-dot-circle"]],"q1.16": ["El Estado Mérida tiene int1 kilómetros cuadrados de superficie, Táchira tiene int2 y el Estado Trujillo int3 kilómetros cuadrados. <br> ¿Cuántos kilómetros de superficie abarcan entre los tres estados andinos?",[["int1",11300,11400],["int2",11100,11200],["int3",7350,7450]],"+",["fas fa-map-signs","fas fa-map-marked-alt","fas fa-mountain"]],"q1.17": ["Una pareja de hipopótamos tuvieron un hipopótamo bebé. Si la mamá hipopótamo pesa int1 kilos, el papá hipopótamo int2 kilos y el bebé int3 kilos, <br> ¿Cuántos kilos pesan entre los tres?",[["int1",6800,8000],["int2",7500,8000],["int3",100,150]],"+",["fas fa-hippo","fas fa-hippo","fas fa-hippo"],["font-size: 18vh","","font-size: 10vh;"]],"q1.18": ["En una terminal de autobuses durante la mañana hay int1 pasajeros, en la tarde int2 y en la noche int3. <br> ¿Cuántos pasajeros hay en todo el día?",[["int1",500,550],["int2",300,400],["int3",400,450]],"+",[""]],"q1.19": ["El Río Orinoco tiene int1 kilómetros de largo y el Amazonas int2. <br> ¿Cuántos kilómetros de largo hay entre los dos ríos?",[["int1",2100,2150],["int2",6430,6440]],"+",[""]],"q1.20": ["Marcos sale a correr todos los días para hacer ejercicio. En la mañana corre int1 metros, en la tarde int2 y en la noche int3 metros. <br> ¿Cuántos metros recorre en un día?",[["int1",500,600],["int2",700,800],["int3",600,700]],"+",[""]]*/+'}]';

class Preguntas {
    constructor() {
        var questions = JSON.parse(preguntas);
        var answers = {"q1.1": 2970,
        "q1.2": 4336,
        "q1.3": 5263,
        "q1.4": 3787,
        "q1.5": 8297,
        "q1.6": 1257,
        "no1": 5,
        "no2": 3,
        "no3": 2,
        "no4": 4,
        "no5": 1};

        this.setAnswer = function(id, value) { answers[id] = value; }
        this.isCorrect = function(id, value) { return answers[id] == value; }
        this.getSection = function(index) { return questions[index]; }
    }
}