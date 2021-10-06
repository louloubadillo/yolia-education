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
            "no5": 1
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
            console.log('yeah');
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
        console.log(sym);
        questions[i].previousElementSibling.children[0].append(sym);
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