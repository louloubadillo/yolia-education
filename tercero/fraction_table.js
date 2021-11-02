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

                row.insertAdjacentHTML('beforeend', 
                `<td>${currQuestion[0]}</td>
                <td>${currQuestion[1]}</td>
                <td class="check-me">
                    <div class="round">
                        <input style="text-align: center;width: 11em; height: 1.9em;">
                    </div>
                </td>`);
                this.total += 3;
            }
            // Only fraction
            else if(!count) {
                const fraction = new Fraction(currQuestion[0], currQuestion[1], true);
                const fractionTD = document.createElement('td');
                fractionTD.appendChild(fraction);
                row.appendChild(fractionTD);

                row.insertAdjacentHTML('beforeend',
                `<td class="check-me">
                    <div class="round">
                        <input type="number" style="width: 3em;text-align: center;">
                    </div>
                </td>
                <td class="check-me">
                    <div class="round">
                        <input type="number" style="width: 3em;text-align: center;">
                    </div>
                </td>
                <td class="check-me">
                    <div class="round">
                        <input style="text-align: center;width: 11em; height: 1.9em;">
                    </div>
                </td>`);

                this.total += 3
            }
            // Only name of fraction 
            else {
                const fraction = new Fraction(currQuestion[0], currQuestion[1]);
                const fractionTD = document.createElement('td');
                fractionTD.classList.add('check-me');
                fractionTD.appendChild(fraction);
                row.appendChild(fractionTD);

                row.insertAdjacentHTML('beforeend', 
                `<td class="check-me">
                    <div class="round">
                        <input type="number" style="width: 3em;text-align: center;">
                    </div>
                </td>
                <td class="check-me">
                    <div class="round">
                        <input type="number" style="width: 3em;text-align: center;">
                    </div>
                </td>
                <td>${currQuestion[2]}</td>`);

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
                        if(!j) {
                            // Fraction
                            check += currRow.children[j].firstChild.isCorrect();
                        } else {
                            // Inputs
                            const ele = currRow.children[j].children[0].children[0];
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