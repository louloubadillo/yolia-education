// A set of two operations that depend on similar numbers. Works for:
// - division
// - multiplication

class Grouped {
    constructor(info, id) {
        let img = document.createElement('div');
        img.style.flexDirection = "row";
        img.style.marginBottom = "1.5em";

        const nums = makeRandom(3, '/', info[5][0])[0].reverse();
        nums.push(getRandom(info[5][1][0], info[5][1][0]));

        // Images and question text
        let mainTxt = info[1];
        let txt1 = info[2];
        let txt2 = info[3];
        info[4].forEach((el, index) => {
            mainTxt = mainTxt.replace(el, nums[index]);
            txt1 = txt1.replace(el, nums[index]);
            txt2 = txt2.replace(el, nums[index]);
            
            let sty = `color: ${colors[getRandom(0,colors.length)]};`;
            sty += info[7][index][1];

            const imgCntt = 
            `<div draggable="true" class="draggable">
                <i class="${info[7][index][0]}" style="${sty}"></i>
                ${nums[index]}
            </div>`;

            img.insertAdjacentHTML('beforeend', imgCntt);
        });

        // Get answers of operations
        const ans1 = calcOperation([nums[1], nums[0]], info[6][0]);
        const ans2 = calcOperation([nums[2], nums[0]], info[6][1]);

        // Generate operations
        const op1 = new Operation([nums[1], nums[0]], info[6][0], id+'-a', ans1, true);
        const op2 = new Operation([nums[0], nums[2]], info[6][1], id+'-b', ans2, true);

        const operations = document.createElement('div');
        operations.style.flexDirection = 'row';

        // Block for first part: text and operation
        const q1 = document.createElement('div');
        q1.className = 'cont-group'
        q1.insertAdjacentHTML('beforeend', `<p>${txt1}</p>`);
        q1.appendChild(op1.block);
        operations.appendChild(q1);
        
        // Block for second part: text and operation
        const q2 = document.createElement('div');
        q2.className = 'cont-group'
        q2.insertAdjacentHTML('beforeend', `<p>${txt2}</p>`);
        q2.appendChild(op2.block);
        operations.appendChild(q2);

        this.text = mainTxt;

        this.total = 2;

        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.block.appendChild(img);
        this.block.appendChild(operations);

        this.isCorrect = () => {
            let check = 0;
            if(op1.block.querySelector('input').value == ans1) {
                op1.makeStiff('#9fff9f77');
                op1.block.classList.remove('incorrect');
                check++;
            } else {
                op1.block.classList.add('incorrect');
                op1.block.querySelector('input').style.borderColor = '#fff0';
            }
            if(op2.block.querySelector('input').value == ans2) {
                op2.makeStiff('#9fff9f77');
                op2.block.classList.remove('incorrect');
                check++;
            } else {
                op2.block.classList.add('incorrect');
                op2.block.querySelector('input').style.borderColor = '#fff0';
            }
            return check;
        }

        this.gameOver = () => {
            op1.gameOver();
            op2.gameOver();
        }
    }
}