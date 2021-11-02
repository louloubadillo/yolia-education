// Round a number to a given power of 10
function roundToPower(num, power) {
    return Math.round(num/(10**power))*10**power;
}

const powers = ['decena', 'centena', 'unidad de mil'];

// Rounds to a random power of 10, ranging from 10^1 to 10^3
class Round{
    constructor(info, id) {
        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.total = 1;
        
        // Saves questions
        const qs = document.createElement('div');
        qs.style.flexDirection = "row";
                
        const num = getRandom(info[2][0], info[2][1]);

        // Add image color
        const sty = `color: ${colors[getRandom(0,colors.length)]};`;
        
        // Generate individual question text
        let qText = info[1];
        const power = getRandom(0,3);
        qText = qText.replace("power1", `<em>${powers[power]}</em>`);

        // Generate individal questions
        qs.insertAdjacentHTML('beforeend',
        `<div class="cont-group">
            <div style="margin-bottom: 1em;">
                <i class="${info[3]}" style="${sty}"></i>
                ${num}
            </div>
            <div class="round">
                <input id="${id}-0" class="round-input" type="number">
            </div>
        </div>`);

        // Save answers
        const answer = (roundToPower(num, power+1));

        this.text = qText;

        this.block.appendChild(qs);

        this.isCorrect = () => {
            const input = this.block.querySelector('input');

            if(input.value == answer) {
                makeStiff('#9fff9f77', input);
                input.parentElement.classList.remove('incorrect');
                return 1;
            } else {
                input.parentElement.classList.add('incorrect');
                input.style.borderColor = '#fff0';
                return 0;
            }
        }

        function makeStiff(color, input) {
            input.parentElement.style.backgroundColor = color;

            input.setAttribute('disabled', 'true');
            input.style.background = '#fff0'
            input.style.color = 'black';
            input.style.fontWeight = 'bold';
            input.style.border = 'none';
            input.value = answer;
        }

        this.gameOver = () => {
            const input = this.block.querySelector('input');
            makeStiff('#fff0', input);
            input.parentElement.style.border = '0.3em #FF0076 solid';
        }
    }
}