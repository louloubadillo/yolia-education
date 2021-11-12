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
            } 
            else if(sign == 'c'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <input type="number" id="${id}" style="width: 3em;text-align: center;">
                </div>`);
            }
            else if(sign == 'a'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <input type="number" id="${id}" style="width: 3em;text-align: center;">
                </div>`);
            }
            else if(sign == 's'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <select name="figures" id="figures">
                        <option value="Triángulo">Triángulo</option>
                        <option value="Cuadrado">Cuadrado</option>
                        <option value="Círculo">Círculo</option>
                        <option value="Rombo">Rombo</option>
                        <option value="Rectángulo">Rectángulo</option>
                        <option value="Hexágono">Hexágono</option>
                    </select>
                </div>`);
            }
            else if(sign == 'n'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <select name="numbers" id="numbers">
                        <option value="Uno">Uno</option>
                        <option value="Dos">Dos</option>
                        <option value="Tres">Tres</option>
                        <option value="Cuatro">Cuatro</option>
                        <option value="Cinco">Cinco</option>
                        <option value="Seis">Seis</option>
                        <option value="Siete">Siete</option>
                        <option value="Ocho">Ocho</option>
                        <option value="Nueve">Nueve</option>
                        <option value="Diez">Diez</option>
                        <option value="Once">Once</option>
                        <option value="Doce">Doce</option>
                    </select>
                </div>`);
            }
            else if(sign == 'o'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <select name="numbers" id="numbers">
                        <option value="Primero">Primero</option>
                        <option value="Segundo">Segundo</option>
                        <option value="Tercero">Tercero</option>
                        <option value="Cuarto">Cuarto</option>
                        <option value="Quinto">Quinto</option>
                        <option value="Sexto">Sexto</option>
                        <option value="Séptimo">Séptimo</option>
                        <option value="Octavo">Octavo</option>
                        <option value="Noveno">Noveno</option>
                        <option value="Décimo">Décimo</option>
                        <option value="Décimo primero">Décimo primero</option>
                        <option value="Décimo segundo">Décimo segundo</option>
                        <option value="Décimo tercero">Décimo tercero</option>
                        <option value="Décimo cuarto">Décimo cuarto</option>
                        <option value="Décimo quinto">Décimo quinto</option>
                        <option value="Décimo sexto">Décimo sexto</option>
                        <option value="Décimo séptimo">Décimo séptimo</option>
                        <option value="Décimo octavo">Décimo octavo</option>
                        <option value="Décimo noveno">Décimo noveno</option>
                        <option value="Vigésimo">Vigésimo</option>
                    </select>
                </div>`);
            }
            else if(sign == 'z'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <input type="text" id="${id}" style="width: 8em;text-align: center;">
                </div>`);
            }
            else if(sign == 'e'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <input type="text" id="${id}" style="width: 8em;text-align: center;">
                </div>`);
            }
            else if(sign == 't'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: row; padding: unset; margin: unset;">
                    <input type="text" id="${id}" style="width: 5em;text-align: center;">

                </div>`);
            }
            else {
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
            } 
            else if(sign == 'c'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <input type="number" id="${id}" style="width: 3em;text-align: center;">
                </div>`);
            }
            else if(sign == 'a'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <input type="number" id="${id}" style="width: 3em;text-align: center;">
                </div>`);
            }
            else if(sign == 'z'){
                this.block.style ="flex-direction: row;";
                this.block.insertAdjacentHTML("afterbegin", `  
                <div style="display: flex;flex-direction: column; padding: unset; margin: unset;">
                    <input type="text" id="${id}" style="width: 8em;text-align: center;">
                </div>`);
            }
            else {
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

        if(sign!='s' && sign!='n' && sign!='o'){
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
        }else{
            this.makeStiff = (color) => {
                this.block.style.backgroundColor = color;
        
                let inpt = this.block.getElementsByTagName('select')[0];
                inpt.setAttribute('disabled', 'true');
                inpt.style.background = '#fff0'
                inpt.style.color = 'black';
                inpt.style.fontWeight = 'bold';
                inpt.style.border = 'none';
                inpt.value = answer;
            }
        }

        this.isCorrect = () => {
            if(sign != 's' && sign != 'n' && sign!='o'){
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
            else{
                if(this.block.getElementsByTagName('select')[0].value == answer) {
                    this.makeStiff('#9fff9f77');
                    this.block.classList.remove('incorrect');
                    return 1;
                } else {
                    this.block.classList.add('incorrect');
                    this.block.getElementsByTagName('select')[0].style.borderColor = "#fff0";
                    return 0;
                }
            }
        }
    }

    gameOver() {
        this.makeStiff('#fff0');
        this.block.style.border = '0.3em #FF0076 solid';
    }
}