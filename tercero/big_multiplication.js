class BigMultiplication {
    constructor(nums, id, answer) {
        this.block = document.createElement('div');
        this.block.className = 'part';
        this.total = 1;

        const inpt = document.createElement('input');
        inpt.type = 'text';
        inpt.className = 'focus';
        inpt.id = `${id}-c`;
        inpt.style.width = '4em';
        inpt.style.alignSelf = 'flex-end';

        // Fill with droppable objects
        if(nums.length == 1) {
            let q = '';
            for(let i = 0; i < nums[0]; i++){
                q += '<div class="droppable"></div>';
            }

            this.block.insertAdjacentHTML("afterbegin", `
            <div class="regular" style="flex-direction: row;padding-right: 0.39em;">
                <p class="sign">×</p>
                <div style="width: 4.1em;">${q}</div>
            </div>
            <div class="regular" style="flex-direction: row;padding-bottom: 0.23em;padding-right: unset;">
                <p class="sign">+</p>
                <div>
                    <input type="text" class="focus" id="${id}-a" style="width: 4em;margin-right: 0.38em;">
                    <input type="text" class="focus second" id="${id}-b" style="margin-right: 0.98em;">
                </div>
            </div>`);

            inpt.style.marginRight = '0.38em';
        } 
        // Fill with numbers
        else {
            // Make question
            let question = '';
            for (let i = 0; i < nums.length-1; i++) {
                question += nums[i] + '<br>'
            }
            question += `<em>×</em> ${nums[nums.length-1]}`;

            this.block.insertAdjacentHTML("afterbegin", `
            <label class="regular" for="${id}-c" style="width: 5em;">${question}</label>
            <div class="regular" style="flex-direction: row;padding-bottom: 0.23em;padding-right: unset;">
                <p class="sign">+</p>
                <div>
                    <input type="text" class="focus" id="${id}-a" style="width: 4em;">
                    <input type="text" class="focus second" id="${id}-b">
                </div>
            </div>`);
        }

        this.block.appendChild(inpt);

        this.makeStiff = (color) => {
            this.block.style.backgroundColor = color;
    
            inpt.style.fontWeight = 'bold';
            inpt.value = answer;
            
            this.block.querySelectorAll('input').forEach(el => {
                el.setAttribute('disabled', 'true');
                el.style.background = '#fff0';
                el.style.border = 'none';
                el.style.color = 'black';
            });
        }

        this.isCorrect = () => {
            if(inpt.value == answer) {
                this.makeStiff('#9fff9f77');
                this.block.classList.remove('incorrect');
                return 1;
            } else {
                this.block.classList.add('incorrect');
                this.block.querySelectorAll('input').forEach(el => {
                    el.style.borderColor = "#fff0";
                });
                return 0;
            }
        }
    }

    gameOver() {
        this.makeStiff('#fff0');
        this.block.style.border = '0.3em #FF0076 solid';
    }
}

// const a = new BigMultiplication([2], '1.1', 800);

// document.body.children[0].appendChild(a.block);