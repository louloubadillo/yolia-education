// Builds a fraction (very pretty)

class Fraction extends HTMLElement{
    constructor(numerator, denominator, display=false) {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const block = document.createElement('div');
        block.className = 'fraction';
        this.total = 2;

        // Number at the top
        const upper = document.createElement('input');
        upper.setAttribute('type', 'number');
        upper.style.textAlign = 'center';
        
        // Number at the bottom
        const lower = document.createElement('input');
        lower.setAttribute('type', 'number');
        lower.style.textAlign = 'center';
        
        // Disable button if a value was passed
        if(display) {
            upper.value = numerator;
            upper.setAttribute('disabled', 'true');
            upper.style.border = 'none';
            upper.style.backgroundColor = '#fff0';
            upper.style.color = 'black';
            lower.value = denominator;
            lower.setAttribute('disabled', 'true');
            lower.style.border = 'none';
            lower.style.backgroundColor = '#fff0';
            lower.style.color = 'black';
        }

        const denom = document.createElement('div');
        denom.className = 'denom';
        denom.appendChild(lower);
        
        block.appendChild(upper);
        block.appendChild(denom);

        const style = document.createElement('style');
        style.textContent = `
        .fraction {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.8em;
            margin: 0.8em;
            border-radius: 10px;
        }
        .fraction input{
            width: 2.5em;
            align-self: center;
        }
        
        .denom {
            margin-top: 0.2em;
            padding-top: 0.29em;
            border-top: solid black 1px;
        }
        
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        input[type=number] {
            -moz-appearance: textfield;
        }
        
        input {
            background-color: #ffffffdd;
            border-radius: 0.3em;
            border: solid grey 0.09em;
            font: inherit;
            padding-left: 0.2em;
            padding-right: 0.2em;
            text-align: center; 
            width: 5em;
        }`;

        shadow.appendChild(style);
        shadow.appendChild(block);

        this.makeStiff = (color) => {
            block.style.backgroundColor = color;
            upper.setAttribute('disabled', 'true');
            upper.style.border = 'none';
            upper.style.backgroundColor = '#fff0';
            upper.style.fontWeight = 'bold';
            upper.style.color = 'black';
            upper.value = numerator;
            
            lower.setAttribute('disabled', 'true');
            lower.style.border = 'none';
            lower.style.backgroundColor = '#fff0';
            lower.style.fontWeight = 'bold';
            lower.style.color = 'black';
            lower.value = denominator;
        }
        
        this.isCorrect = () => {
            if(upper.value == numerator && lower.value == denominator) {
                this.makeStiff('#9fff9f77');
                block.classList.remove('incorrect');
                return 2;
            }
            let check = 0;
            if(upper.value == numerator) {
                upper.setAttribute('disabled', 'true');
                upper.style.border = 'none';
                upper.style.backgroundColor = '#fff0';
                upper.style.fontWeight = 'bold';
                upper.style.color = 'black';
                check = 1;
            } else if(lower.value == denominator) {
                lower.setAttribute('disabled', 'true');
                lower.style.border = 'none';
                lower.style.backgroundColor = '#fff0';
                lower.style.fontWeight = 'bold';
                lower.style.color = 'black';
                check = 1;
            } else {
                upper.style.border = '#fff0';
                lower.style.border = 'none';
            }
            this.classList.add('incorrect');
            block.style.backgroundColor = '#f998';

            return check;
        }

        this.gameOver = (num, denom) => {
            this.makeStiff('#fff0', num, denom);
            block.style.border = '0.3em #FF0076 solid';
        }
    }
}

customElements.define('a-fraction', Fraction);