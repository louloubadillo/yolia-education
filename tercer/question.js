let colors = [
    '#fca546',
    '#ffbf01',
    '#25ac8a88',
    '#4f7bca',
    '#d0b8ed',
    '#ff8ca7',
    '#FF007688'
]

// info, section, question
class Question {
    constructor(info, section, question) {
        const id = `q${section}.${question}`;
        this.finalCont = document.createElement('div');
        this.finalCont.className = 'question';
        this.finalCont.id = id;

        let tries = 2;

        // question-text: includes title, tries icons and question text
        let txtDiv = document.createElement('p');
        txtDiv.className = 'question-text';
        txtDiv.insertAdjacentHTML('afterbegin',`<h4>Pregunta ${question+1}</h4>
        <div class="tries">
        <i class="fas fa-question"></i>
        <i class="fas fa-question"></i>
        <i class="fas fa-question"></i>
        </div>`);
        let text = '';
        
        // Question content
        let questionCont;
        let opr;
        switch (info[0]) {
            case "sort":
                text = info[1];
                opr = new Sort(info[2], info[3], info[4], info[5], id);
                questionCont = opr.block;
            break;

            // For basic and basic-drag
            default:
                let b = new Basic(info, id);
                text = b.text;
                opr = b.opr;
                questionCont = b.block;

            break;
        }
        txtDiv.insertAdjacentHTML("beforeend", `<p>${text}</p>`);
        
        // Button
        const button = document.createElement('div');
        button.className = 'verify';
        button.style.width = '5.5em';
        button.innerText = 'Verificar';
        button.addEventListener('click', () => {
            // Add symbol depending on amount of correct answers
            const icon = this.finalCont.querySelector('.tries').children[2-tries];

            // All are correct
            const a = opr.isCorrect();
            if (a >= 1) {
                icon.className = 'fa fa-check';
                icon.style.backgroundColor = '#25AC8A';
                this.finalCont.style.backgroundColor = '#9fff9f77';

                // Disable check button
                this.finalCont.children[2].style.display = "none";
            } 
            // Some are incorrect (-1 try)
            else if (tries > 0){
                icon.className = 'fa fa-times';
                icon.style.backgroundColor = '#FF0076';
                tries -= 1;
            } 
            // No more tries left
            else {
                // Disable check button
                this.finalCont.children[2].style.display = "none";
                opr.gameOver();
                
                // Add icon
                icon.className = "fas fa-heart-broken";
                icon.style.backgroundColor = '#FF0076';
            }
        });

        this.finalCont.append(txtDiv);
        this.finalCont.append(questionCont);
        this.finalCont.append(button);
    }
}


let p = new Question([
    "basic",
    "Un cartero debe entregar int1 cartas por semana. Si el lunes repartió int2 y el martes int3, <br> ¿Cuántas cartas le faltan por repartir?",
    ["int1", "int2", "int3"], 
    [1000, 8000],
    "-",
    [["fas fa-mail-bulk", ""], ["fas fa-envelope", ""], ["far fa-envelope", ""]]
], 2, 2);
// let pp = new Question([
//     "basic-drag",
//     "Un cartero debe entregar int1 cartas por semana. Si el lunes repartió int2 y el martes int3, <br> ¿Cuántas cartas le faltan por repartir?",
//     ["int1", "int2", "int3"], 
//     [1000, 8000],
//     "-",
//     [["fas fa-mail-bulk", ""], ["fas fa-envelope", ""], ["far fa-envelope", ""]]
// ], 2, 2);
// let op = new Question([
//     "basic",
//     "Una pareja de hipopótamos tuvieron un hipopótamo bebé. Si la mamá hipopótamo pesa int1 kilos, el papá hipopótamo int2 kilos y el bebé int3 kilos, <br><br> ¿Cuántos kilos pesan entre los tres?",
//     ["int1", "int2", "int3"],
//     [[6800, 8000], [7500, 8000], [100, 150]],
//     "+",
//     [["fas fa-hippo", "font-size: 18vh;"], ["fas fa-hippo", ""], ["fas fa-hippo", "font-size: 10vh;"]]
// ], 1, 1)

// document.body.append(pp.this.finalCont)
// document.body.append(op.this.finalCont)
// document.body.append(p.this.finalCont)