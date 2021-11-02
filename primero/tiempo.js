class Tiempo {
    constructor(info, id) {
        let img = document.createElement('div');
        img.style.flexDirection = "row";
        //input: cantidad de factores, signo, rango
        //output: [0]-digitos random y [1]-respuesta
        const randoms = makeRandom(info[2].length, info[4], info[3]);
        let imgCntt = '';
        let firstArg = 0;
        firstArg = randoms[0];
        let colorOptions = ["#fca546", "#4f7bca", "#25ac8a", "#f5c331", "#25ac8a", "#f5c331"];
        // Images and text question
        let text = info[1];
        info[2].forEach((el, index) => {
            let sty = `font-size:25px; color: ${colorOptions[getRandom(0,colorOptions.length)]};`;
            sty += info[5][index][1];
            imgCntt = `<div style="display:inline;">`;
            imgCntt += `<p style="${sty}">${info[5][0][0]}</p>`;
            imgCntt+= `</div>`;
            imgCntt+= `</div>`;

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