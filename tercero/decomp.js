// Returns array with number decomposed by powers of 10, starting from 10^5
function getParts(num) {
    let parts = [];
    for (let i = 1; i < 7; i++) {
        const n = num%(10**i);
        parts.unshift(n/10**(i-1));
        num -= n;
    }

    return parts;
}

// Given a number, you must break down the number into powers of 10
class Decomp{
    constructor(text, range) {
        const num = getRandom(range[0], range[1]);
        const parts = getParts(num);
        const str = num.toString();

        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.total = 6;
        this.text = text.replace("int1", str.slice(0, str.length-3) + ',' + str.slice(-3));

        // Add all inputs and labels for them
        this.block.insertAdjacentHTML('beforeend', 
        `<div style="flex-direction: row;">
            <div>
                <div style="flex-direction: row;" class="round">
                    <input type="number" class="decomp-input">
                    <p class="decomp-text">centenas de mil</p>
                </div>
                <div style="flex-direction: row;" class="round">
                    <input type="number" class="decomp-input">
                    <p class="decomp-text">decenas de mil</p>
                </div>
                <div style="flex-direction: row;" class="round">
                    <input type="number" class="decomp-input">
                    <p class="decomp-text">unidades de mil</p>
                </div>
            </div>
            <div>
                <div style="flex-direction: row;" class="round">
                    <input type="number" class="decomp-input">
                    <p class="decomp-text">centenas</p>
                </div>
                <div style="flex-direction: row;" class="round">
                    <input type="number" class="decomp-input">
                    <p class="decomp-text">decenas</p>
                </div>
                <div style="flex-direction: row;" class="round">
                    <input type="number" class="decomp-input">
                    <p class="decomp-text">unidades</p>
                </div>
            </div>
        </div>`);

        const inps = this.block.querySelectorAll('input');

        this.isCorrect = () => {
            let check = 0;
            inps.forEach((el, index) => {
                if(el.value == parts[index]) {
                    makeStiff('#9fff9f77', el, index);
                    el.parentElement.classList.remove('incorrect');
                    check++;
                } else {
                    el.parentElement.classList.add('incorrect');
                    el.style.borderColor = '#fff0';
                }
            });
            return check;
        }

        function makeStiff(color, input, i) {
            input.parentElement.style.backgroundColor = color;

            input.setAttribute('disabled', 'true');
            input.style.background = '#fff0'
            input.style.color = 'black';
            input.style.fontWeight = 'bold';
            input.style.border = 'none';
            input.value = parts[i];
        }

        // Displays correct answers for all those that were answered incorrectly
        this.gameOver = () => {
            inps.forEach((el, index) => {
                if(el.parentElement.classList.contains('incorrect')) {
                    makeStiff('#fff0', el, index);
                    el.parentElement.style.border = '0.3em #FF0076 solid';
                }
            });
        }
    }
}