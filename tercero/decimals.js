class Decimals{
    constructor(range, denom) {
        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.total = 1;

        const cont = document.createElement('div');
        cont.style.flexDirection = 'row';
        cont.style.alignItems = 'center';
        cont.style.paddingTop = '0.8em';
        cont.className = 'round';
        this.block.appendChild(cont);

        const numer = getRandom(range[0], range[1]);

        const fraction = new Fraction(numer, denom, true);
        const inpt = document.createElement('input');
        inpt.style.alignSelf = 'center';
        inpt.style.textAlign = 'center';
        inpt.style.marginLeft = '1.6em';

        cont.appendChild(fraction);
        cont.append('=');
        cont.appendChild(inpt);

        const answer = numer/denom;

        this.block.insertAdjacentHTML('afterbegin',
        `<div style="width: 7em;height: 7em;margin-top: 1em;">
            <svg viewBox="0 0 32 32">
                <circle r="16" cx="16" cy="16"/ style="stroke: ${colors[getRandom(0,colors.length)]};stroke-dasharray: ${answer*100 == 100 ? 101 : answer*100} 100;">
            </svg>            
        </div>`);

        function makeStiff(color) {
            cont.style.backgroundColor = color;
            inpt.setAttribute('disabled', 'true');
            inpt.style.background = '#fff0';
            inpt.style.border = 'none';
            inpt.style.color = 'black';
            inpt.style.fontWeight = 'bold';
            inpt.value = answer;
            inpt.style.removeProperty('margin-left');
        }

        this.isCorrect = () => {
            if(inpt.value == answer) {
                makeStiff('#9fff9f77');
                cont.classList.remove('incorrect');
                return 1;
            } else {
                cont.classList.add('incorrect');
                inpt.style.border = 'none';
                return 0;
            }
        }

        this.gameOver = () => {
            makeStiff('#fff0');
            cont.style.border = '0.3em #FF0076 solid';
        }
    }
}