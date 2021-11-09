class Identificar {
    constructor(info, id) {
        let img = document.createElement('div');
        img.style.flexDirection = "row";
        //input: cantidad de factores, signo, rango
        //output: [0]-digitos random y [1]-respuesta
        const randoms = makeRandom(info[2].length, info[4], info[3]);
        let counters = [0,0,0,0];
        let myrng = new Math.seedrandom('hello.');
        let colorOptions = ["#fca546", "#4f7bca", "#25ac8a", "#f5c331"]; 
        let min = info[3][0][0];
        let max = info[3][0][1];
        let randomN = Math.round(Math.random() * (max- min) + min);
        let imgCntt = '';
        let firstArg = 0;
        if(info[0] == "identificar") {
            firstArg = randoms[0];
        } else {
            firstArg = [info[2].length];
        }
        
        // Images and text question
        let text = info[1];
        info[2].forEach((el, index) => {
            
            if(info[0] == "identificar") {
                imgCntt = `<div style="display:inline;">`;
                for(let i = 0; i < randomN; i++){
                    let randomIndex = Math.round(Math.random() * (5- 0) + 0);
                    let sty = ``;
                    sty += info[5][index][1];
                    counters[randomIndex]++; 
                    sty += `color: ${colors[getRandom(0,colors.length)]};`;
                    imgCntt += `<i class="${info[5][randomIndex][0]}" style="${sty}"></i>`;
                    imgCntt+= `</div>`;
                    
                }
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


        let ans = counters[0] + counters[1] + counters[2] + counters[3];

        this.text = text;
        this.opr = new Operation(firstArg, info[4], id, ans);
        
        this.block = document.createElement('div');
        this.block.className = 'question-content';
        this.block.append(img);
        this.block.append(this.opr.block);
    }
}