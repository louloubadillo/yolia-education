// Transform between units of weight, volume, and distance
// Power refers to power of 10 to multiply to get the answer

class Units {
    constructor(text, range, power, img) {
        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.total = 1;

        const num = getRandom(range[0], range[1], range[2]);
        const answer = power < 0
            // So answers with decimals don't have more zeros than necessary
            ? (num*10**power).toFixed(Math.abs(power))
            : num*10**power;
        this.text = text.replace('int1', num);

        this.block.insertAdjacentHTML('afterbegin',
        `<div>
            <i class="${img}" style="color: ${colors[getRandom(0,colors.length)]};"></i>
        </div>
        <div class="round" style="padding-top: 0.8em;">
            <input type="number" style="align-self: center;text-align: center;">
        </div>`);

        // So individual functions don't have to do it every time they're called
        const inpt = this.block.querySelector('input');
        
        function makeStiff(color) {
            inpt.parentElement.style.backgroundColor = color;

            inpt.setAttribute('disabled', 'true');
            inpt.style.border = 'none';
            inpt.style.backgroundColor = '#fff0';
            inpt.style.fontWeight = 'bold';
            inpt.style.color = 'black';
            inpt.parentElement.classList.remove('incorrect');
            inpt.value = answer;
        }

        this.isCorrect = () => {
            if(inpt.value == answer || inpt.value == parseFloat(answer)) {
                makeStiff('#9fff9f77');
                return 1;
            } else {
                inpt.style.border = 'none';
                inpt.parentElement.classList.add('incorrect');
                return 0;
            }
        }

        this.gameOver = () => {
            makeStiff('#fff0');
            inpt.parentElement.style.border = '0.3em #FF0076 solid';
        }
    }
}