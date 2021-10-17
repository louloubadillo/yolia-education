class Operation {
    constructor(nums, sign, id, answer) {
        this.block = document.createElement('div');
        this.block.className = 'part';

        let length = answer.toString().length*0.6 + 0.6;

        // Fill with droppable objects
        if(nums.length == 1) {
            if(sign == '/') {
                this.block.style = "flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `
                <div class="droppable" style="margin-right: 0.29em;"></div>
                <div style="flex-direction: column;">
                    <input type="number" id="${id}" style="width: ${length}em;text-align: left;padding-left: 0.3em;margin-right: 0.38em;margin-left: 0.29em;">
                    <label class="divisions" for="${id}">
                        <div class="droppable"></div>
                    </label>
                </div>`);
            } else {
                let q = '';
                for(let i = 0; i < nums[0]; i++){
                    q += '<div class="droppable"></div>';
                }

                this.block.insertAdjacentHTML("afterbegin", `
                <div class="regular" style="flex-direction: row;padding-right: 0.39em;">
                    <p class="sign">${sign}</p>
                    <div style="width: 4.1em;">${q}</div>
                </div>
                <input type="number" id="${id}" style="text-align: right; width: 5em;margin-right: 0.38em;">`)
            }
        } 
        // Fill with numbers
        else {
            if(sign == "/") {
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `
                <p style="margin-right: 4.5px;">${nums[0]}</p>
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <input type="number" id="${id}" style="width: ${length}em;text-align: left;">
                    <label class="divisions" for="${id}">${nums[1]}</label>
                </div>`);
            } else {
                // Make question
                let question = '';
                for (let i = 0; i < nums.length-1; i++) {
                    question += nums[i] + '<br>'
                }
                question += `<em>${sign}</em> ${nums[nums.length-1]}`;

                this.block.insertAdjacentHTML("afterbegin", `
                <label class="regular" for="${id}" style="width: 5em;">${question}</label>
                <input type="number" id="${id}" style="width: 5em;">`);
            }
        }

        this.makeStiff = (color) => {
            this.block.style.backgroundColor = color;
    
            let inpt = this.block.getElementsByTagName('input')[0];
            inpt.setAttribute('disabled', 'true');
            inpt.style.background = '#fff0'
            inpt.style.color = 'black';
            inpt.style.fontWeight = 'bold';
            inpt.style.border = 'none';
            inpt.value = answer;
        }

        this.isCorrect = () => {
            if(this.block.getElementsByTagName('input')[0].value == answer) {
                this.makeStiff('#9fff9f77');
                this.block.classList.remove('incorrect');
                return 1;
            } else {
                this.block.classList.add('incorrect');
                this.block.getElementsByTagName('input')[0].style.borderColor = "#fff0";
                return 0;
            }
        }
    }

    gameOver() {
        this.makeStiff('#fff0');
        this.block.style.border = '0.3em #FF0076 solid';
    }
}
/*
// For dropper
let a = new Operation(
    [2],    // amount of droppers
    '+',    // sign
    'p1',   // element id
    69      // answer
);
let c = new Operation(
    [2],    // amount of droppers
    '/',    // sign
    'p1',   // element id
    2      // answer
);

// For standard
let b = new Operation(
    [4, 8], // array of nums
    '/',    // sign
    'p2',   // element id
    2       // answer
);

// let d = document.createElement('div');
// d.className = 'pregunta-cont';
// d.append(a.block)
// d.append(c.block)
// document.body.append(d);

// document.body.insertAdjacentHTML('beforeend', 
// `<div draggable="true" class="draggable" style="display: flex;justify-content:center;margin:1em;">
//     <i class="fas fa-lemon" style="color: orange; font-size: 3em;"display:flex;flex-direction: column;></i>
//     23
// </div>`);

// document.body.insertAdjacentHTML('beforeend', 
// `<div draggable="true" class="draggable" style="display: flex;justify-content:center;margin:1em;">
//     <i class="far fa-lemon" style="color: #4f7bca; font-size: 3em;display:flex;flex-direction: column;"></i>
//     46
// </div>`);
*/