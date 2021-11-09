/**
 * Figuras
 * Mostrar diferentes figuras
 * Deben escoger cuál es
 */

//Aumentar banco de preguntas

 function createFig(str){
    let figureIcon = document.createElement('p');
    let figures = [{"icon":"🔵", "forma":"círculo"}, {"icon":"⚽", "forma":"círculo"}, {"icon":"🏀", "forma":"círculo"}, {"icon":"💿", "forma":"círculo"},  {"icon":"🌎", "forma":"círculo"}, 
    {"icon":"🟪", "forma":"cuadrado"}, {"icon":"🧇", "forma":"cuadrado"},{"icon":"🍱", "forma":"cuadrado"}, {"icon":"📅", "forma":"cuadrado"}, {"icon":"🚾", "forma":"cuadrado"}, 
    {"icon":"🔺", "forma":"triángulo"}, {"icon":"🍙", "forma":"triángulo"}, {"icon":"💩", "forma":"triángulo"}, {"icon":"🌲", "forma":"triángulo"}, {"icon":"📐", "forma":"triángulo"},
    {"icon":"🔶", "forma":"rombo"}, {"icon":"🪁", "forma":"rombo"}, {"icon":"💠", "forma":"rombo"}, {"icon":"♦", "forma":"rombo"}, 
    {"icon":"⬢", "forma":"hexágono"}, {"icon":"⬡", "forma":"hexágono"}, {"icon":"⬣", "forma":"hexágono"}, {"icon":"⬢", "forma":"hexágono"}];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].forma;
    figureIcon.innerText = figures[rand].icon;
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "55px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let FigurasTemplate = document.createElement('template');
FigurasTemplate.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div style="display: flex;flex-direction: row;justify-content: center;">
            <br>
            <div style="margin: 2vh 4vw; max-width: 250px;">
                <p class='tries'></p>
                <div class='items' style=" margin: 1vh 1vw;"></div> 
                <p>¿Qué figura es?</p>
                <select class="count-A" name="figures">
                    <option value="círculo">Círculo</option>
                    <option value="cuadrado">Cuadrado</option>
                    <option value="triángulo">Triángulo</option>
                    <option value="rombo">Rombo</option>
                    <option value="hexágono">Hexágono</option>
                </select>
                <button class='verify-A'>Revisar</button>
                <p class="verify-icon-A"></p>
            </div>

            <div style="margin: 2vh 4vw; max-width: 250px;">
                <p class='tries2'></p>
                <div class='items2' style=" margin: 1vh 1vw;"></div> 
                <p>¿Qué figura es?</p>
                <select class="count-A2" name="figures">
                    <option value="círculo">Círculo</option>
                    <option value="cuadrado">Cuadrado</option>
                    <option value="triángulo">Triángulo</option>
                    <option value="rombo">Rombo</option>
                    <option value="hexágono">Hexágono</option>
                </select>
                <button class='verify-A2'>Revisar</button>
                <p class="verify-icon-A2"></p>
            </div>

            <div style="margin: 2vh 4vw; max-width: 250px;">
                <p class='tries3'></p>
                <div class='items3' style=" margin: 1vh 1vw;"></div> 
                <p>¿Qué figura es?</p>
                <select class="count-A3" name="figures">
                    <option value="círculo">Círculo</option>
                    <option value="cuadrado">Cuadrado</option>
                    <option value="triángulo">Triángulo</option>
                    <option value="rombo">Rombo</option>
                    <option value="hexágono">Hexágono</option>
                </select>
                <button class='verify-A3'>Revisar</button>
                <p class="verify-icon-A3"></p>
            </div>

            <div style="margin: 2vh 4vw; max-width: 250px;">
                <p class='tries4'></p>
                <div class='items4' style=" margin: 1vh 1vw;"></div> 
                <p>¿Qué figura es?</p>
                <select class="count-A4" name="figures">
                    <option value="círculo">Círculo</option>
                    <option value="cuadrado">Cuadrado</option>
                    <option value="triángulo">Triángulo</option>
                    <option value="rombo">Rombo</option>
                    <option value="hexágono">Hexágono</option>
                </select>
                <button class='verify-A4'>Revisar</button>
                <p class="verify-icon-A4"></p>
            </div>
            
        </div>

        <div style="margin: 2vh 4vw; max-width: 250px;">
            <button class='verify-T'>Revisar Preguntas</button>
            <p class="verify-icon-T"></p>
        </div>
`;

class Figuras extends HTMLElement {
    items = [];
    //items2 = [];
    str = [""];
    str2 = [""];
    str3 = [""];
    str4 = [""];
    tries = 3;
    tries2 = 3;
    tries3 = 3;
    tries4 = 3;  
    constructor(){
        super();
        // Crear arreglo de longitud aleatoria (y llenar con 0's)
        let randomNumber = 1;
        this.items = new Array(randomNumber).fill(0);
        this.attachShadow({mode: 'open'});
    }
    // connected
    connectedCallback(){
        this.shadowRoot.append(FigurasTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createFig(this.str) );
            this.shadowRoot.querySelector('.items2').append( createFig(this.str2) );
            this.shadowRoot.querySelector('.items3').append( createFig(this.str3) );
            this.shadowRoot.querySelector('.items4').append( createFig(this.str4) );
            
        })
        this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
        this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
        this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
        this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;

        // Agregar un event listener a .verify que llame a verificar con el valor del input
        this.shadowRoot.querySelector('.verify-A').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count-A').value; 
            if(this.tries<1){
                this.tries=0;
                this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyInput(value)){
                    this.shadowRoot.querySelector('.count-A').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-A').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-A').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-A').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-A').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-A').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-A').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-A').style.color = "#ff0000";
                    this.tries--;
                    this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;  
                }
            }
        })

        this.shadowRoot.querySelector('.verify-A2').addEventListener('click', ()=>{
            let value2 = this.shadowRoot.querySelector('.count-A2').value; 
            if(this.tries2<1){
                this.tries2=0;
                this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyInput2(value2)){
                    this.shadowRoot.querySelector('.count-A2').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-A2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-A2').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-A2').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-A2').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-A2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-A2').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-A2').style.color = "#ff0000";
                    this.tries2--;
                    this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;  
                }
            }
        })

        this.shadowRoot.querySelector('.verify-A3').addEventListener('click', ()=>{
            let value3 = this.shadowRoot.querySelector('.count-A3').value; 
            if(this.tries3<1){
                this.tries3=0;
                this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyInput3(value3)){
                    this.shadowRoot.querySelector('.count-A3').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-A3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-A3').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-A3').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-A3').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-A3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-A3').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-A3').style.color = "#ff0000";
                    this.tries3--;
                    this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;  
                }
            }
        })

        this.shadowRoot.querySelector('.verify-A4').addEventListener('click', ()=>{
            let value4 = this.shadowRoot.querySelector('.count-A4').value; 
            if(this.tries4<1){
                this.tries4=0;
                this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyInput4(value4)){
                    this.shadowRoot.querySelector('.count-A4').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-A4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-A4').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-A4').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-A4').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-A4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-A4').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-A4').style.color = "#ff0000";
                    this.tries4--;
                    this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;  
                }
            }
        })

        this.shadowRoot.querySelector('.verify-T').addEventListener('click', ()=>{
            const tries_total = [this.tries, this.tries2, this.tries3, this.tries4];
            const countOcurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1: a), 0);
            if(tries_total.find(element => element == 0) == undefined){
                this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 100%";
                this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
            }else{
                if (countOcurrences(tries_total, 0) == 1){
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 75%";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                }else if(countOcurrences(tries_total, 0) == 2){
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 50%";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                }else if(countOcurrences(tries_total, 0) == 3){
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 25%";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                }else{
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 0% :(";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                
                }
            }
        })

    }
    verifyInput(str){
        let strMod = str.toLowerCase();
        return strMod === this.str[0]
    }
    verifyInput2(str){
        let strMod2 = str.toLowerCase();
        return strMod2 === this.str2[0]
    }

    verifyInput3(str){
        let strMod3 = str.toLowerCase();
        return strMod3 === this.str3[0]
    }

    verifyInput4(str){
        let strMod4 = str.toLowerCase();
        return strMod4 === this.str4[0]
    }

}

customElements.define('ejercicio-figuras', Figuras);
