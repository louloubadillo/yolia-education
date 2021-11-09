/**
 * Series
 */


 function createSeries(str){
    let figureIcon = document.createElement('p');
    let figures = [{"serie":"258 , 283 , 308 ,  _ ", "res":"333"}, {"serie":"478 , 528 , 578 ,  _  ", "res":"628"}, {"serie":"599 , 641 , 683 ,  _ ", "res":"725"}, {"serie":"601 , 551 , 501 ,  _ ", "res":"451"}, {"serie":"755 , 666 , 577 ,  _ ", "res":"488"}, {"serie":"84 , 96 , 108 ,  _", "res":"120"}, {"serie":"58 , 65 , 72 ,  _", "res":"79"},
    {"serie":"124 , 177 , 230 ,  _ ", "res":"283"}, {"serie":"420 , 400 , 380 ,  _", "res":"360"}, {"serie":"69 , 78 , 87 ,  _", "res":"96"}, {"serie":"528 , 577 , 626 ,  _", "res":"675"}, {"serie":"612 , 647 , 682 ,  _", "res":"717"}, {"serie":"373 , 340 , 307 ,  _", "res":"274"}, {"serie":"21,  28,  35,  _", "res":"42"}, {"serie":"82,  95, 108,  _", "res":"121"}, {"serie":" 57,   61,  65,  _", "res":"69"}, {"serie":"104,  120,  136,  _", "res":"152"}, {"serie":" 333,  321,  309,  _", "res":"297"}, {"serie":" 114,  165,  216,  _", "res":"267"}, {"serie":" 114,  165,  216,  _", "res":"267"}];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].res;
    figureIcon.innerText = figures[rand].serie;
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "40px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let SeriesTemplate = document.createElement('template');
SeriesTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <br>
        <div>
            <p class= 'tries'></p>
            <h4>Descubre el patrón y continua la serie</h4>
            <p>Escribe únicamente el número que sigue en la serie</p>
            <div class='items' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify'>Revisar</button>
            <p class="verify-icon"></p>
        </div>

        <div>
            <p class= 'tries2'></p>
            <h4>Descubre el patrón y continua la serie</h4>
            <p>Escribe únicamente el número que sigue en la serie</p>
            <div class='items2' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count2' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify2'>Revisar</button>
            <p class="verify-icon2"></p>
        </div>

        <div>
            <p class= 'tries3'></p>
            <h4>Descubre el patrón y continua la serie</h4>
            <p>Escribe únicamente el número que sigue en la serie</p>
            <div class='items3' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count3' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify3'>Revisar</button>
            <p class="verify-icon3"></p>
        </div>

        <div>
            <p class= 'tries4'></p>
            <h4>Descubre el patrón y continua la serie</h4>
            <p>Escribe únicamente el número que sigue en la serie</p>
            <div class='items4' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count4' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify4'>Revisar</button>
            <p class="verify-icon4"></p>
        </div>
    </div>

    <div style="display: flex;flex-direction: row;justify-content: center;">
        <div style="margin: 2vh 4vw; max-width: 250px;">
            <button class='verify-T'>Revisar Preguntas</button>
            <p class="verify-icon-T"></p>
        </div>
    </div>    
`;
class Series extends HTMLElement {
    items = []
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
        this.shadowRoot.append(SeriesTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createSeries(this.str) );
            this.shadowRoot.querySelector('.items2').append( createSeries(this.str2) );
            this.shadowRoot.querySelector('.items3').append( createSeries(this.str3) );
            this.shadowRoot.querySelector('.items4').append( createSeries(this.str4) );
        })
        this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
        this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
        this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
        this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;

        // Agregar un event listener a .verify que llame a verificar con el valor del input
        this.shadowRoot.querySelector('.verify').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count').value;
            if(this.tries<1){
                this.tries=0;
                this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
                window.alert("Se han acabado tus intentos");
            }
            
            else{
                if (this.verifyInput(value)){
                    this.shadowRoot.querySelector('.count').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon').style.color = "#ff0000";
                    this.tries--;
                    this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries; 
                }
            } 
        })

        //Pregunta 2
        this.shadowRoot.querySelector('.verify2').addEventListener('click', ()=>{
            let value2 = this.shadowRoot.querySelector('.count2').value;
            if(this.tries2<1){
                this.tries2=0;
                this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
                window.alert("Se han acabado tus intentos");
            }
            
            else{
                if (this.verifyInput2(value2)){
                    this.shadowRoot.querySelector('.count2').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon2').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon2').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count2').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon2').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon2').style.color = "#ff0000";
                    this.tries2--;
                    this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2; 
                }
            } 
        })

        //Pregunta 3
        this.shadowRoot.querySelector('.verify3').addEventListener('click', ()=>{
            let value3 = this.shadowRoot.querySelector('.count3').value;
            if(this.tries3<1){
                this.tries3=0;
                this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
                window.alert("Se han acabado tus intentos");
            }
            
            else{
                if (this.verifyInput3(value3)){
                    this.shadowRoot.querySelector('.count3').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon3').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon3').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count3').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon3').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon3').style.color = "#ff0000";
                    this.tries3--;
                    this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3; 
                }
            } 
        })

        //Pregunta 4
        this.shadowRoot.querySelector('.verify4').addEventListener('click', ()=>{
            let value4 = this.shadowRoot.querySelector('.count4').value;
            if(this.tries4<1){
                this.tries4=0;
                this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;
                window.alert("Se han acabado tus intentos");
            }
            
            else{
                if (this.verifyInput4(value4)){
                    this.shadowRoot.querySelector('.count4').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon4').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon4').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count4').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon4').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon4').style.color = "#ff0000";
                    this.tries4--;
                    this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries; 
                }
            } 
        })

        //Check Respuestas
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

customElements.define('ejercicio-series', Series);