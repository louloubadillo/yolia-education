class Simbolos {
    constructor(info, id) {
        let img = document.createElement('div');
        img.style.flexDirection = "row";
        //input: cantidad de factores, signo, rango
        //output: [0]-digitos random y [1]-respuesta
        const randoms = makeRandom(info[2].length, info[4], info[3]);
        let imgCntt = '';
        let firstArg = 0;
        if(info[0] == "simbolos") {
            firstArg = randoms[0];
        } else {
            firstArg = [info[2].length];
        }
        
        // Images and text question
        let text = info[1];
        info[2].forEach((el, index) => {
            let sty = `color: ${colors[getRandom(0,colors.length)]};`;
            sty += info[5][index][1];
            if(info[0] == "simbolos") {
                imgCntt = `<div style="display:inline;">`;
                imgCntt += `<i class="${info[5][0][0]}" style="${sty}"></i>`;
                imgCntt+= `</div>`;
                imgCntt+= `</div>`;
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
        this.opr = new Operation(firstArg, info[4], id, info[2][0]);
        
        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.block.append(img);
        this.block.append(this.opr.block);
    }
}