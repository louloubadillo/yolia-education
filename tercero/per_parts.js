// Given an answer, allows player to input the factors. Works with:
// - divisions
// - multiplications

class PerParts{
    constructor(amt, range, sign, id) {
        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.total = amt;

        let randoms = [];

        // Add HTML structure
        for (let i = 0; i < amt; i++) {
            randoms.push(makeRandom(2, sign, range));

            this.block.insertAdjacentHTML('beforeend',
            `<div class="part" style="flex-direction: row">
                <input type="number" id="${id}-${i}a" class="per-parts-input">
                <div class="sign">${sign}</div>
                <input type="number" id="${id}-${i}b" class="per-parts-input">
                <div class="sign"> = ${randoms[i][1]}</div>
            </div>`);
        }

        this.makeStiff = (color, div, ans=false) => {
            div.style.backgroundColor = color;
            div.querySelectorAll('input').forEach((el, i) => {
                el.setAttribute('disabled', 'true');
                el.style.background = '#fff0'
                el.style.color = 'black';
                el.style.fontWeight = 'bold';
                el.style.border = 'none';

                // Show correct answer
                if(ans) {
                    el.value = randoms[Array.prototype.indexOf.call(this.block.children, div)][0][1-i];
                }
            });
        }

        this.isCorrect = () => {
            let check = 0;

            // Check each div within the block
            for(let i = 0; i < this.block.children.length; i++) {
                // Select all inputs
                const inputs = this.block.children[i].querySelectorAll('input');
                // Check if numbers check out and they didn't answer 1xn
                if(inputs[0].value > 1 && inputs[1].value > 1 && calcOperation([inputs[1].value, inputs[0].value], sign) == randoms[i][1]) {
                    this.makeStiff('#9fff9f77', this.block.children[i]);
                    this.block.children[i].classList.remove('incorrect');
                    check++;
                } else {
                    this.block.children[i].classList.add('incorrect');
                    inputs[0].style.borderColor = "#fff0";
                    inputs[1].style.borderColor = "#fff0";
                }
            }

            return check;
        }

        this.gameOver = () => {
            this.block.querySelectorAll('.incorrect').forEach((el) => {
                this.makeStiff('#fff0', el, true);
                el.style.border = '0.3em #FF0076 solid';
            })
        }
    }
}