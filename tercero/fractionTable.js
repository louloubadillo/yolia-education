const nums = {
    2: "Dos",
    3: "Tres",
    4: "Cuatro",
    5: "Cinco",
    6: "Seis",
    7: "Siete",
    8: "Ocho",
    9: "Nueve",
    10: "Diez",
    11: "Once",
    12: "Doce",
    13: "Trece",
    14: "Catorce",
    15: "Quince",
    16: "Dieciséis",
    17: "Diecisiete",
    18: "Dieciocho",
    19: "Diecinueve",
    20: "Viente",
};

const denoms = {
    2: "medios",
    3: "tercios",
    4: "cuartos",
    5: "quintos",
    6: "sextos",
    7: "séptimos",
    8: "octavos",
    9: "novenos",
    10: "décimos"
};

class FractionTable{
    constructor(amt) {
        const tCont = document.createElement('table');
        const table = document.createElement('tbody');
        table.insertAdjacentHTML('afterbegin',
        `<tr>
            <th>Fracción</th>
            <th>Numerador</th>
            <th>Denominador</th>
            <th>Se lee</th>
        </tr>`);
        tCont.appendChild(table);

        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.block.appendChild(tCont);

        this.total = 0;

        // Example row
        const row = document.createElement('tr'); 
        const fraction = new Fraction(5, 6, true);
        const fractionTD = document.createElement('td');
        fractionTD.appendChild(fraction);
        row.appendChild(fractionTD);
        const num = document.createElement('td');
        num.innerText = '5';
        row.appendChild(num);
        const denom = document.createElement('td');
        denom.innerText = '6';
        row.appendChild(denom);
        const inptTD = document.createElement('td');
        inptTD.innerText = 'Cinco sextos';
        row.appendChild(inptTD);
        table.appendChild(row);

        let answers = [];
        let count = 0;

        for (let i = 0; i < amt; i++, count++) {
            count = count >= 3 ? count = 0 : count;

            let currQuestion = [
                getRandom(2, 20),   // [0] numerator
                getRandom(2, 10),   // [1] denominator
            ]
            
            // Generate name of fraction
            currQuestion.push(nums[currQuestion[0]]+' '+denoms[currQuestion[1]]);

            const row = document.createElement('tr');
            // Only parts of fraction
            if(count%2) {
                const fraction = new Fraction(currQuestion[0], currQuestion[1]);
                const fractionTD = document.createElement('td');
                fractionTD.classList.add('check-me');
                fractionTD.appendChild(fraction);
                row.appendChild(fractionTD);
                
                const num = document.createElement('td');
                num.innerText = currQuestion[0];
                row.appendChild(num);
                
                const denom = document.createElement('td');
                denom.innerText = currQuestion[1];
                row.appendChild(denom);
                
                const inptTD = document.createElement('td');
                const inpt = document.createElement('input');
                const inptD = document.createElement('div');
                inptD.className = 'round';
                inptD.appendChild(inpt);
                inpt.style.textAlign = 'center';
                inpt.style.width = '11em';
                inpt.style.height = '1.9em';
                inptTD.classList.add('check-me');
                inptTD.appendChild(inptD);
                row.appendChild(inptTD);
                this.total += 3;
            }
            // Only fraction
            else if(!count) {
                const fraction = new Fraction(currQuestion[0], currQuestion[1], true);
                const fractionTD = document.createElement('td');
                fractionTD.appendChild(fraction);
                row.appendChild(fractionTD);
                
                const numTD = document.createElement('td');
                const num = document.createElement('input');
                const numD = document.createElement('div');
                numD.className = 'round';
                num.style.width = '3em';
                num.style.textAlign = 'center';
                numTD.classList.add('check-me');
                numD.appendChild(num);
                numTD.appendChild(numD);
                row.appendChild(numTD);
                
                const denomTD = document.createElement('td');
                const denom = document.createElement('input');
                const denomD = document.createElement('div');
                denomD.className = 'round';
                denom.style.width = '3em';
                denom.style.textAlign = 'center';
                denomTD.classList.add('check-me');
                denomD.appendChild(denom);
                denomTD.appendChild(denomD);
                row.appendChild(denomTD);
                
                const inptTD = document.createElement('td');
                const inpt = document.createElement('input');
                const inptD = document.createElement('div');
                inptD.className = 'round';
                inpt.style.textAlign = 'center';
                inpt.style.width = '11em';
                inpt.style.height = '1.9em';
                inptTD.classList.add('check-me');
                inptD.appendChild(inpt);
                inptTD.appendChild(inptD);
                row.appendChild(inptTD);

                this.total += 3
            }
            // Only name of fraction 
            else {
                const fraction = new Fraction(currQuestion[0], currQuestion[1]);
                const fractionTD = document.createElement('td');
                fractionTD.classList.add('check-me');
                fractionTD.appendChild(fraction);
                row.appendChild(fractionTD);

                const numTD = document.createElement('td');
                const num = document.createElement('input');
                const numD = document.createElement('div');
                numD.className = 'round';
                num.style.width = '3em';
                num.style.textAlign = 'center';
                numTD.classList.add('check-me');
                numD.appendChild(num);
                numTD.appendChild(numD);
                row.appendChild(numTD);
                
                const denomTD = document.createElement('td');
                const denom = document.createElement('input');
                const denomD = document.createElement('div');
                denomD.className = 'round';
                denom.style.width = '3em';
                denom.style.textAlign = 'center';
                denomTD.classList.add('check-me');
                denomD.appendChild(denom);
                denomTD.appendChild(denomD);
                row.appendChild(denomTD);

                const name = document.createElement('td');
                name.innerText = currQuestion[2];
                row.appendChild(name);

                this.total += 4;
            }

            answers.push(currQuestion);
            table.appendChild(row);
        }
        // console.log(answers);

        this.isCorrect = () => {
            let check = 0;
            for (let i = 2; i < table.children.length; i++) {
                const currRow = table.children[i];

                for (let j = 0; j < currRow.children.length; j++) {
                    if(currRow.children[j].classList.contains('check-me')) {
                        const element = currRow.children[j].firstChild;
                        if(!j) {
                            // Fraction
                            check += element.isCorrect();
                        } else {                        
                            const ele = element.firstChild;
                            if(ele.value == answers[i-2][j-1]) {
                                ele.setAttribute('disabled', 'true');
                                ele.style.border = 'none';
                                ele.style.backgroundColor = '#fff0';
                                ele.style.fontWeight = 'bold';
                                ele.style.color = 'black';
                                ele.parentElement.classList.remove('incorrect');
                                ele.parentElement.classList.remove('check-me');
                                ele.parentElement.style.backgroundColor = '#9fff9f77';
                                check++;
                            } else {
                                ele.parentElement.classList.add('incorrect');
                                ele.style.border = 'none';
                            }                                
                        }
                    }
                }
            }

            return check;
        }

        this.gameOver = () => {
            this.block.querySelectorAll('.incorrect').forEach(el => {
                if(el.nodeName.toLowerCase() == 'a-fraction') {
                    el.gameOver();
                } else {
                    // Get column and row in order to get proper answer from answers[]
                    const columnNumber = Array.prototype.indexOf.call(
                        el.parentElement.parentElement.children, 
                        el.parentElement
                    );
                    const rowNumber = Array.prototype.indexOf.call(
                        el.parentElement.parentElement.parentElement.children, 
                        el.parentElement.parentElement
                    );

                    const ele = el.firstChild;
                    ele.setAttribute('disabled', 'true');
                    ele.style.backgroundColor = '#fff0';
                    ele.style.fontWeight = 'bold';
                    ele.style.color = 'black';
                    ele.parentElement.classList.remove('incorrect');
                    ele.parentElement.classList.remove('check-me');
                    ele.parentElement.style.backgroundColor = '#fff0';
                    ele.value = answers[rowNumber-2][columnNumber-1];
                    el.style.border = '0.3em #FF0076 solid';
                }
            });
        }
    }
}