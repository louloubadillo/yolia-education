let colors = [
    '#fca546',
    '#ffbf01',
    '#25ac8a88',
    '#4f7bca',
    '#d0b8ed',
    '#ff8ca7',
    '#FF007688'
]

addQuestion('8', 'auto1')
addQuestionName()

function checkAnswers(id) {
    function getData() {
        return {
            "q1.1": 2970,
            "q1.2": 4336,
            "q1.3": 5263,
            "q1.4": 3787,
            "q1.5": 8297,
            "no1": 5,
            "no2": 3,
            "no3": 2,
            "no4": 4,
            "no5": 1,
            "q1.6": 1257
        };
    }

    // Select all questions
    let questions = document.querySelectorAll(id + ' .pregunta');

    for (let i = 0; i < questions.length; i++) {
        // Get inputs from each question
        let a = Array.from(questions[i].querySelectorAll('input')).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});        
        
        // Check if inputs are correct
        for (const key in a) {
            let ele = document.getElementById(key);
            if (getData()[key] == a[key]) {
                ele.parentNode.style.backgroundColor = '#9fff9f';
                ele.setAttribute("disabled", "");
                ele.style.background = '#fff0'
                ele.style.color = 'black';
                ele.style.fontWeight = 'bolder';
                ele.parentNode.classList.remove("incorrect");
            } else {
                ele.parentNode.classList.add("incorrect");
            }
            ele.style.borderColor = "#fff0";
        }

        // Select mover elements (if there are any)
        let dd = questions[i].querySelectorAll('.mover');
    
        if (dd.length) {
            let b = Array.from(dd).reduce((acc, div) => ({...acc, [div.id]: div.textContent}), {});
        
            for (const key in b) {
                let ele = document.getElementById(key);
                if (getData()[key] == b[key]) {
                    ele.style.backgroundColor = '#9fff9f';
                    ele.style.cursor = "default";
                    ele.setAttribute("draggable", "false");
                    ele.classList.add("correct");
                    ele.classList.remove("incorrect");
                } else {
                    ele.classList.add("incorrect");
                    ele.classList.remove("dropped")
                }
            }
        }

        // Add symbol depending on amount of correct answers
        let icon = questions[i].previousElementSibling.querySelector('i')
        if(icon != null) {
            icon.remove();
        }

        let sym = document.createElement('i');
        if (questions[i].querySelectorAll(' .incorrect').length == 0) {
            sym.className = 'fa fa-check sym';
            sym.style.backgroundColor = '#25AC8A';
            sym.setAttribute("aria-hidden","true");
        } else {
            sym.className = 'fa fa-times';
            sym.style.backgroundColor = '#FF0076';
            sym.setAttribute("aria-hidden","true");
        }
        console.log(questions[i]);
        questions[i].previousElementSibling.children[0].append(sym);
        // questions[i].previousElementSibling.prepend(sym);
    }

}

function addQuestionName() {
    let sections = document.querySelectorAll('.seccion');

    for (let i = 0; i < sections.length; i++) {
        let questions = sections[i].querySelectorAll('.pregunta-texto');
        let x = 1;

        for (let j = 0; j < questions.length; j++, x++) {
            let ele = document.createElement('h4');
            ele.innerHTML = `Pregunta ${x}`;
            questions[j].prepend(ele);
        }
    }
}

function addQuestion(index, id) {
    let preguntas = {
        "q1.7": [
            'Manuel y Camila coleccionan plumas. Si Camila tiene int1 y Manuel tiene int2, <br>¿Cuántas plumas tienen en total?',
            [['int1', 200, 300], ['int2', 300, 400]],
            '+',
            ['fas fa-feather-alt', 'fas fa-feather']
        ],
        "q1.8": [
            'Rebeca compró tres libros por $int1, una cartuchera por $int2 y una docena de cuadernos por $int3. <br> ¿Cuánto gastó en total?',
            [['int1', 400, 500], ['int2', 50, 100], ['int3', 350, 400]],
            '+',
            ['fas fa-book', 'fas fa-box', 'far fa-address-book']
        ],
        "q1.9": [
            'Felipe decidió salir al campo a recolectar flores. El lunes recolectó int1 y el martes int2. <br> ¿Cuántas flores recolectó entre los dos días?',
            [['int1', 600, 700], ['int2', 400, 450]],
            '+',
            ['fas fa-fan','fas fa-seedling']
        ],
        "q1.10": [
            'Luisa se fue de viaje en carro. Si recorrió int1 kilómetros, hizo una parada para comer y luego recorrió int2 kilómetros más. <br> ¿Cuántos kilómetros recorrió en total?',
            [['int1', 300, 400], ['int2', 500, 600]],
            '+',
            ['fas fa-car-side', 'fas fa-road']
        ],
        "q1.13": [
            'En una finca hay int1 nutrias, int2 caballos y int3 cuervos. <br> ¿Cuántos animales hay en total?',
            [['int1', 300, 350], ['int2', 250, 300], ['int3', 450, 500]],
            '+',
            ['fas fa-otter', 'fas fa-horse', 'fas fa-crow']
        ],
        "q1.14": [
            'Enrique le regaló a Carlos int1 limones y le quedan int2. <br> ¿Cuántos limones tenía?',
            [['int1', 300, 350], ['int2', 550, 600]],
            '+',
            ['fas fa-lemon', 'far fa-lemon']
        ],
        "q1.15": [
            'El Estado Estadolandia tiene int1 kilómetros cuadrados de superficie, el Distrito Cuadrado tiene int2 y el Estado Circulito tiene int3 kilómetros cuadrados. <br> ¿Cuántos kilómetros de superficie abarcan entre los tres estados?',
            [['int1', 7500, 8000], ['int2', 400, 500], ['int3', 1400, 1500]],
            '+',
            ['far fa-map', 'far fa-square', 'far fa-dot-circle']
        ],
        "q1.16": [
            'El Estado Mérida tiene int1 kilómetros cuadrados de superficie, Táchira tiene int2 y el Estado Trujillo int3 kilómetros cuadrados. <br> ¿Cuántos kilómetros de superficie abarcan entre los tres estados andinos?',
            [['int1', 11300, 11400], ['int2', 11100, 11200], ['int3', 7350, 7450]],
            '+',
            ['fas fa-map-signs', 'fas fa-map-marked-alt', 'fas fa-mountain']
        ],
        "q1.17": [
            'Una pareja de hipopótamos tuvieron un hipopótamo bebé. Si la mamá hipopótamo pesa int1 kilos, el papá hipopótamo int2 kilos y el bebé int3 kilos, <br> ¿Cuántos kilos pesan entre los tres?',
            [['int1', 6800, 8000], ['int2', 7500, 8000], ['int3', 100, 150]],
            '+',
            ['fas fa-hippo', 'fas fa-hippo', 'fas fa-hippo'],
            ['font-size: 18vh', '', 'font-size: 10vh;']
        ]/*,
        "q1.18": [
            'En una terminal de autobuses durante la mañana hay int1 pasajeros, en la tarde int2 y en la noche int3. <br> ¿Cuántos pasajeros hay en todo el día?',
            [['int1', 500, 550], ['int2', 300, 400], ['int3', 400, 450]],
            '+',
            ['']
        ],
        "q1.19": [
            'El Río Orinoco tiene int1 kilómetros de largo y el Amazonas int2. <br> ¿Cuántos kilómetros de largo hay entre los dos ríos?',
            [['int1', 2100, 2150], ['int2', 6430, 6440]],
            '+',
            ['']
        ],
        "q1.20": [
            'Marcos sale a correr todos los días para hacer ejercicio. En la mañana corre int1 metros, en la tarde int2 y en la noche int3 metros. <br> ¿Cuántos metros recorre en un día?',
            [['int1', 500, 600], ['int2', 700, 800], ['int3', 600, 700]],
            '+',
            ['']
        ]*/
    }

    for (const key in preguntas) {
        let text = preguntas[key][0];
        let int = [];

        let img = document.createElement('div');
        img.style.flexDirection = "row";
        img.style.paddingBottom = 0;
        img.style.marginBottom = 0;

        for (let i = 0; i < preguntas[key][1].length; i++) {
            // Generate random numbers and add them to the text
            let randInt = getRandom(preguntas[key][1][i][1], preguntas[key][1][i][2]);
            int.push(randInt);
            text = text.replace(preguntas[key][1][i][0], randInt);

            // Generate amount of images necessary
            let dv = document.createElement('div');
            let img_i = document.createElement('i');
            img_i.className = preguntas[key][3][i];
            let sty = `color: ${colors[getRandom(0,colors.length)]};`;
            let caption = document.createElement('p');
            caption.innerHTML = randInt;

            // If any image has a particular styling
            if(preguntas[key][4] != undefined) {
                for (let j = 0; j < preguntas[key][4].length; j++) {
                    sty += preguntas[key][4][i];
                }
            }

            img_i.style = sty;

            dv.appendChild(img_i);
            dv.appendChild(caption);
            img.appendChild(dv);
        }
        

        let currDiv = document.getElementById(id);

        let txt_div = document.createElement('p');
        txt_div.className = 'pregunta-texto';
        txt_div.innerHTML = text;

        currDiv.appendChild(txt_div);

        let prgn = document.createElement('div');
        prgn.className = 'pregunta';
        prgn.style = 'margin-top: 0.5em;';
        prgn.style.flexDirection = 'column';

        let part = document.createElement('div');
        part.className = 'parte';

        let lbl = document.createElement('label');
        lbl.className = 'sumas';
        lbl.setAttribute('for', key);
        let oprt = '';
        for (let i = 0; i < int.length-1; i++) {
            oprt += int[i] + '<br>'
        }
        oprt += `${preguntas[key][2]} ${int[int.length-1]}`
        lbl.innerHTML = oprt;

        let inpt = document.createElement('input');
        inpt.type = 'number';
        inpt.id = key;

        let cnt = document.createElement('div');
        // cnt.style.margin = 0;
        // cnt.style.padding = 0;
        cnt.appendChild(part);

        part.appendChild(lbl);
        part.appendChild(inpt);
        prgn.appendChild(img);
        prgn.appendChild(cnt);
        currDiv.appendChild(prgn);
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}