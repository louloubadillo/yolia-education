// Return random number, only use third parameter if you want decimals
function getRandom(min, max, d=0) {
    const num = Math.random() * (max - min) + min;
    // Returns decimal with two places
    if(d) { return num.toFixed(d); }
    // Returns int
    else { return Math.floor(num); }
}

function calcOperation(nums, sign) {
    // Calculate answer
    let ans = 0;
    switch (sign) {
        case "+":
            nums.forEach(el => { ans += Number.parseFloat(el); });
            break;
        case "-":
            ans = nums[0];
            for (let i=1; i < nums.length; i++) { ans -= Number.parseFloat(nums[i]); }
            break;
        case '×':
            ans = 1;
            nums.forEach(el => { ans *= Number.parseFloat(el); });
            break;
        default:
            ans = Number.parseFloat(nums[1]) / Number.parseFloat(nums[0]);
            break;
    }
    return ans;
}

// Return array in which [0] is array of random numbers and [1] is answer
function makeRandom(amt, sign, range) {
    let n = [[],[]];

    if(sign == '/') {
        // Random numbers
        const a = getRandom(2, 10);
        const b = a * getRandom(range[0], range[1], range[2]);
        // Calculate answer
        n[0].push(a);
        n[0].push(b);
        n[1].push(calcOperation(n[0], sign, range[2]));
    } else {
        // Random numbers
        let a = [];

        // If each number must be within a different range
        if(range.length == amt) {
            range.forEach(el => {
                a.push(getRandom(el[0], el[1], el[2]));
            });
        } else {
            for (let i = 0; i < amt; i++) {
                a.push(getRandom(range[0][0], range[0][1], range[0][2]));
            }
        }

        if(sign == '-') {
            a.sort((a, b) => {return a-b});
            a.reverse();
        }

        n[0] = a;
        n[1] = calcOperation(a, sign).toFixed(range[0][2]);
    }
    
    return n;
}

// Forms the block (with numbers or droppable areas) for basic operations: 
// - addition
// - subtraction
// - multiplication
// - division
class Operation {
    constructor(nums, sign, id, answer) {
        this.block = document.createElement('div');
        this.block.className = 'part';
        this.total = 1;

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