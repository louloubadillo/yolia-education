let colors = [
    '#fca546',
    '#ffbf01',
    '#25ac8a88',
    '#4f7bca',
    '#d0b8ed',
    '#ff8ca7',
    '#FF007688'
]

// Construct all questions with their three parts:
// - text-content
// - question-content
// - button
class Question {
    constructor(info, section, question) {
        const id = `q${section}.${question}`;
        this.finalCont = document.createElement('div');
        this.finalCont.className = 'question';
        this.finalCont.id = id;
        this.score = 0;

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

            case "contar":
                let c = new Contar(info, id);
                text = c.text;
                opr = c.opr;
                questionCont = c.block;
            break; 

            case "decenas":
                let d = new Decenas(info, id);
                text = d.text;
                opr = d.opr;
                questionCont = d.block;
            break; 

            case "agrupar":
                let a = new Agrupar(info, id);
                text = a.text;
                opr = a.opr;
                questionCont = a.block;
            break; 

            case "seleccionar":
                let s = new Seleccionar(info, id);
                text = s.text;
                opr = s.opr;
                questionCont = s.block;
            break; 

            case "escribir":
                let e = new Escribir(info, id);
                text = e.text;
                opr = e.opr;
                questionCont = e.block;
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

        this.total = opr.total;
        
        // Button
        const button = document.createElement('div');
        button.className = 'verify';
        button.innerText = 'Verificar';
        button.addEventListener('click', () => {
            // Add symbol depending on amount of correct answers
            const icon = this.finalCont.querySelector('.tries').children[2-tries];

            // All are correct
            this.score = opr.isCorrect();
            if (this.score == this.total) {
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
                alert('Se han acabado tus intentos. Se van a enseñar las respuestas correctas.');
                
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