// Constructs question-content block of sort type questions

class Sort {
    constructor(range, totalAmt, amt, sign, id) {
        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.block.style.flexDirection = 'row';
        this.block.style.paddingTop = 0;
        this.block.style.marginTop = 0;
        this.total = totalAmt*2;

        let idCount = 1;

        // Make operations
        let operations = [];
        let answers = [];
        for (let i = 0; i < totalAmt; i++, idCount++) {
            const randoms = makeRandom(amt, sign, range);
            operations.push(new Operation(randoms[0], sign, `${id}-${idCount}`, randoms[1]));
            answers.push([randoms[1], i+1]);
        }

        // Get answers for movers
        answers.sort((a, b) => { return a[0] - b[0]; });
        let moverAnswers = {}
        answers.forEach((el, i) => {
            moverAnswers[`${el[1]-1}`] = i+1;
        });

        let movers = [];
        for (let i = 0; i < totalAmt; i++, idCount++) {
            // Create mover
            const mover = document.createElement('div');
            mover.setAttribute('draggable', 'true');
            mover.className = 'mover';
            mover.id = `${id}-${idCount}`;
            mover.innerHTML = i+1;
            movers.push(mover);

            // Add mover and operation to question content
            const currDiv = document.createElement('div');
            currDiv.append(operations[i].block);
            currDiv.append(mover);
            this.block.append(currDiv);
        }

        this.isCorrect = () => {
            let check = 0;
            for (let i = 0; i < totalAmt; i++) {
                check += operations[i].isCorrect();
                if(movers[i].innerHTML == moverAnswers[`${i}`]) {
                    check += this.makeStiff('#9fff9f77', movers[i]);
                    movers[i].classList.remove('incorrect');
                } else {
                    check += this.markWrong(movers[i]);
                }
            }
            return check;
        }

        // Makes all incorrect answer stiff so they can't be changed
        this.gameOver = () => {
            // Make all movers unmovable
            movers.forEach((el, index) => {
                if(el.classList.contains('incorrect')) {
                    el.innerHTML = moverAnswers[`${index}`];
                    this.makeStiff('#fff0', el);
                    el.style.border = '0.3em #FF0076 solid';
                }
            });

            // Remove input from operation
            operations.forEach(el => {
                if(el.block.classList.contains('incorrect')) {
                    el.gameOver();
                }
            });
        }
    }

    makeStiff(color, mover) {
        mover.style.backgroundColor = color;
        mover.setAttribute('draggable', 'false');
        mover.classList.add('stiff');
        mover.style.fontWeight = 'bold';
        return 1;
    }

    markWrong(mover) {
        mover.style.backgroundColor = '#f998';
        mover.classList.add('incorrect')
        return 0;
    }
}