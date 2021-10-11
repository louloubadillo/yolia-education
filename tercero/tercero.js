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

function checkBasic(id) {
    let currQuestion = document.getElementById(id);
    let intentos = parseInt(currQuestion.getAttribute('intentos'));

    let totalAmt = 0;
    let correctAmt = 0;

    let a = Array.from(currQuestion.querySelectorAll('input')).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});        
    
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
    let movers = currQuestion.querySelectorAll('.mover');

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
                ele.classList.add("stiff");
                ele.classList.remove("incorrect");
                correctAmt++;
            } else {
                ele.classList.add("incorrect");
                ele.classList.remove("dropped")
            }
        }
    }

    // Add symbol depending on amount of correct answers
    let icon = currQuestion.children[0].querySelector('i')
    if(icon == null) {
        icon = document.createElement('i');
        icon.setAttribute("aria-hidden","true");
    }
    
    // let icon = document.createElement('i');
    // icon.setAttribute("aria-hidden","true");

    if (correctAmt == totalAmt) {
        icon.className = 'fa fa-check';
        icon.style.backgroundColor = '#25AC8A';
        currQuestion.style.backgroundColor = '#9fff9f77';
        currQuestion.setAttribute('score', correctAmt/totalAmt + intentos*0.1);

        // Disable check button
        currQuestion.children[2].style.display = "none";
    } else {
        icon.className = 'fa fa-times';
        icon.style.backgroundColor = '#FF0076';
        currQuestion.setAttribute('intentos', intentos-1);
    }
        
    if (intentos == 0) {
        // Disable check button
        currQuestion.children[2].style.display = "none";

        // Add icon
        icon.className = "fas fa-heart-broken";

        
        // Show correct answers
        currQuestion.querySelectorAll('.incorrect').forEach(el => {
            el.setAttribute('draggable', 'false');
            el.classList.add('stiff');
            let inpt = el.children[1];
            inpt.setAttribute("disabled", "true");
            inpt.value = z.getAnswer(inpt.getAttribute('id'));
            inpt.style.color = 'black';
            inpt.style.fontWeight = 'bolder';
            inpt.style.background = '#fff0';
        });
    }

    currQuestion.children[0].children[0].append(icon);
}

function addOperation(key, ints, sign) {
    let oprt = '';
    for (let i = 0; i < ints.length-1; i++) {
        oprt += ints[i] + '<br>'
    }
    oprt += sign + ' ' + ints[ints.length-1];

    let part =
    `<div class="parte">
        <label class="sumas" for="${key}">${oprt}</label>
        <input type="number" id="${key}">
    </div>`

    // Save answer
    let k = 0;
    switch (sign) {
        case "+":
            ints.forEach(el => { k += el; });
            break;
        case "-":
            k = ints[0];
            for (let i = 1; i < ints.length; i++) { k -= ints[i]; }
            break;
        default:
            break;
    }
    z.setAnswer(key, k);

    return part;
}

function addBasic(data, key, i, qID) {
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
        let sty = `color: ${colors[getRandom(0,colors.length)]};`;
        
        // If any image has a particular styling
        if(data[5] != undefined) {
            for (let j = 0; j < data[5].length; j++) {
                sty += data[5][i];
            }
        }

        let image = 
        `<div draggable="true" class="draggable">
            <i class="${data[4][i]}" style="${sty}"></i>
            <p>${randInt}</p>
        </div>`;

        img.innerHTML += image;
    }

    let txtDiv = document.createElement('p');
    txtDiv.className = 'pregunta-texto';
    txtDiv.innerHTML = `<h4>Pregunta ${i}</h4>${text}`;

    let prgn = document.createElement('div');
    prgn.className = 'pregunta-cont';
    prgn.style.flexDirection = 'column';
    
    let cnt = document.createElement('div');
    cnt.innerHTML = addOperation(key, ints, data[3]);
    cnt.style.padding = '0';
    
    prgn.appendChild(img);
    prgn.appendChild(cnt);
    
    let finalCnt = document.createElement('div');
    finalCnt.className = 'pregunta';
    finalCnt.id = qID;
    finalCnt.setAttribute('intentos', 2);
    finalCnt.setAttribute('score', 0);
    finalCnt.appendChild(txtDiv);
    finalCnt.appendChild(prgn);

    return finalCnt;
}

function addSort(data, currDiv) {
    let ints = [];

    for (let i = 0; i < data[3].length; i++) {
        // Generate random numbers and add them to the text
        let randInt = getRandom(data[2][i][1], data[2][i][2]);
        ints.push(randInt);
    }

    // <div>
    //     addOperation
    //     <div draggable="true" class="mover" id="no5">5</div>
    // </div>
}

function addQuestions(index, id) {
    let preguntas = z.getSection(index);
    let currDiv = document.getElementById(id);
    
    let i = 1;
    
    for (const key in preguntas) {
        let qID = `${id}-${i}`;

        let button = document.createElement('button');
        button.innerText = "Check!";
        button.style.width = "5em";
        
        switch (preguntas[key][0]) {
            case "basic":
                button.setAttribute('onclick', `checkBasic('${qID}')`);
                currDiv.append(addBasic(preguntas[key], key, i, qID));
                break;
        
            default:
                break;
        }

        currDiv.lastElementChild.append(button);
        i++;
    }
}