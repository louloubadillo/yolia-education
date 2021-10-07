let colors = [
    '#fca546',
    '#ffbf01',
    '#25ac8a88',
    '#4f7bca',
    '#d0b8ed',
    '#ff8ca7',
    '#FF007688'
]

let z = new Preguntas();

addQuestions('0', 'auto1')

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkAnswers(id) {
    let currSection = document.querySelector(id);

    // Select all questions
    let questions = currSection.querySelectorAll('.pregunta');
    let totalAmt = 0;
    let correctAmt = 0;

    for (let i = 0; i < questions.length; i++) {
        // Get inputs from each question
        let a = Array.from(questions[i].querySelectorAll('input')).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});        
        
        // Check if inputs are correct
        for (const key in a) {
            let ele = document.getElementById(key);
            if (z.isCorrect(key, a[key])) {
                ele.parentNode.style.backgroundColor = '#b4f7b7';
                ele.setAttribute("disabled", "");
                ele.style.background = '#fff0'
                ele.style.color = 'black';
                ele.style.fontWeight = 'bolder';
                ele.parentNode.classList.remove("incorrect");
                correctAmt++;
            } else {
                ele.parentNode.classList.add("incorrect");
            }
            ele.style.borderColor = "#fff0";
            totalAmt++;
        }

        // Select mover elements (if there are any)
        let movers = questions[i].querySelectorAll('.mover');
    
        // Check if movers are correct
        if (movers.length) {
            let b = Array.from(movers).reduce((acc, div) => ({...acc, [div.id]: div.textContent}), {});
        
            for (const key in b) {
                let ele = document.getElementById(key);
                totalAmt++;
                if (z.isCorrect(key, b[key])) {
                    ele.style.backgroundColor = '#b4f7b7';
                    ele.style.cursor = "default";
                    ele.setAttribute("draggable", "false");
                    ele.classList.add("correct");
                    ele.classList.remove("incorrect");
                    correctAmt++;
                } else {
                    ele.classList.add("incorrect");
                    ele.classList.remove("dropped")
                }
            }
        }

        // Add symbol depending on amount of correct answers
        let icon = questions[i].previousElementSibling.querySelector('i')
        if(icon == null) {
            icon = document.createElement('i');
            icon.setAttribute("aria-hidden","true");
        }

        if (questions[i].querySelectorAll('.incorrect').length == 0) {
            icon.className = 'fa fa-check';
            icon.style.backgroundColor = '#25AC8A';
            // Color question block accordingly
            questions[i].style.backgroundColor = '#9fff9f77';
            questions[i].previousElementSibling.style.backgroundColor = '#9fff9f77';
        } else {
            icon.className = 'fa fa-times';
            icon.style.backgroundColor = '#FF0076';
            // Color question block accordingly
            // questions[i].style.backgroundColor = '#f997';
            // questions[i].previousElementSibling.style.backgroundColor = '#f997';
        }
        questions[i].previousElementSibling.children[0].append(icon);
        // questions[i].previousElementSibling.prepend(icon);
    }

    // Show score for section
    let scoreDiv = document.createElement('div');
    scoreDiv.classList.add('report');
    scoreDiv.innerHTML = `${correctAmt}/${totalAmt}`;
    currSection.appendChild(scoreDiv);
    if(correctAmt == totalAmt) {
        alert('Felicidades!')
    }
}

function addOperation(key, ints, sign, prgn) {
    prgn.className = 'pregunta';
    prgn.style = 'padding-top: 0.5em;';
    prgn.style.flexDirection = 'column';
    prgn.style.backgroundColor = key[key.length-1]%2 == 0 ? '#f8f8f8' : '#fff';

    let part = document.createElement('div');
    part.className = 'parte';

    let lbl = document.createElement('label');
    lbl.className = 'sumas';
    lbl.setAttribute('for', key);
    let oprt = '';
    for (let i = 0; i < ints.length-1; i++) {
        oprt += ints[i] + '<br>'
    }
    oprt += sign + ' ' + ints[ints.length-1];
    lbl.innerHTML = oprt;

    let inpt = document.createElement('input');
    inpt.type = 'number';
    inpt.id = key;

    let cnt = document.createElement('div');
    cnt.appendChild(part);

    part.appendChild(lbl);
    part.appendChild(inpt);
    return cnt;
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

function addBasic(data, key, currDiv) {
    let ints = [];
        
    let img = document.createElement('div');
    img.style.flexDirection = "row";
    img.style.paddingBottom = 0;
    img.style.marginBottom = 0;
    
    let text = data[1];

    // Generate numbers and images
    for (let i = 0; i < data[2].length; i++) {
        // Generate random numbers and add them to the text
        let randInt = getRandom(data[2][i][1], data[2][i][2]);
        ints.push(randInt);
        text = text.replace(data[2][i][0], randInt);

        // Generate amount of images necessary
        let dv = document.createElement('div');
        let img_i = document.createElement('i');
        img_i.className = data[4][i];
        let sty = `color: ${colors[getRandom(0,colors.length)]};`;
        let caption = document.createElement('p');
        caption.innerHTML = randInt;

        // If any image has a particular styling
        if(data[5] != undefined) {
            for (let j = 0; j < data[5].length; j++) {
                sty += data[5][i];
            }
        }

        img_i.style = sty;

        dv.appendChild(img_i);
        dv.appendChild(caption);
        img.appendChild(dv);
    }

    let txtDiv = document.createElement('p');
    txtDiv.className = 'pregunta-texto';
    txtDiv.innerHTML = text;
    txtDiv.style.backgroundColor = key[key.length-1]%2 == 0 ? '#f8f8f8' : '#fff';

    currDiv.appendChild(txtDiv);
    let prgn = document.createElement('div');
    let cnt = addOperation(key, ints, data[3], prgn);
    
    prgn.appendChild(img);
    prgn.appendChild(cnt);
    currDiv.appendChild(prgn);

    // Save answer
    let k = 0;
    switch (data[3]) {
        case "+":
            for(const i in ints) { k += ints[i]; }
            break;
        case "-":
            k = ints[0];
            for (let i = 1; i < ints.length; i++) { k -= ints[i]; }
            break;
        default:
            break;
    }
    z.setAnswer(key, k);
}

function addSort() {
    
}

function addQuestions(index, id) {
    let preguntas = z.getSection(index);
    let currDiv = document.getElementById(id);

    for (const key in preguntas) {
        switch (preguntas[key][0]) {
            case "basic":
                addBasic(preguntas[key], key, currDiv);
                break;
        
            default:
                break;
        }
    }

    addQuestionName()
}