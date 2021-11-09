// Add basic question-content block, with images and operation

class Basic {
    constructor(info, id) {
        let img = document.createElement('div');
        img.style.flexDirection = "row";
        const randoms = makeRandom(info[2].length, info[4], info[3]);

        let imgCntt = '';
        let firstArg = 0;
        if(info[0] == "basic") {
            firstArg = randoms[0];
        } else {
            firstArg = [info[2].length];
        }

        // Images and text question
        let text = info[1];
        info[2].forEach((el, index) => {
            text = text.replace(el, randoms[0][index]);
            
            let sty = `color: ${colors[getRandom(0,colors.length)]};`;
            sty += info[5][index][1];

            if(info[0] == "basic") {
                imgCntt = 
                `<div>
                    <i class="${info[5][index][0]}" style="${sty}"></i>
                </div>`;
            } else {
                imgCntt = 
                `<div draggable="true" class="draggable">
                    <i class="${info[5][index][0]}" style="${sty}"></i>
                    ${randoms[0][index]}
                </div>`;
            }

            img.insertAdjacentHTML('beforeend', imgCntt);
        });

        this.text = text;

        
        if(info[4] == '×' && randoms[0][0] >= 10 && randoms[0][1] >= 20) {
            this.opr = new BigMultiplication(firstArg, id+'-0', randoms[1]);
        } else {
            this.opr = new Operation(firstArg, info[4], id+'-0', randoms[1]);
        }
        
        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.block.append(img);
        this.block.append(this.opr.block);
    }
}