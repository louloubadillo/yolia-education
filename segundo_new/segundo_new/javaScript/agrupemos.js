/**
 * Agrupemos
 * Generar una cantidad random de triángulos, cuadrados y círculos
 * Abajo aparecen tres inputs y un botón 
 * Escribir número en input y verificar con botón 
 */

function createFigures(counters){
    let figureIcon = document.createElement('i');
    let options = ['fa-circle', 'fa-square', 'fa-heart'];
    let colors = ["#fca546", "#4f7bca", "#DC143C"]; 
    let rand = Math.round(Math.random() * 2);
    counters[rand]++;
    figureIcon.classList.add('fa', options[rand], 'fa-2x', 'fa-rotate-360');
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.color = colors[rand];
    return figureIcon
}

let AgrupemosTemplate = document.createElement('template');
AgrupemosTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div style="display: flex;flex-direction: row;justify-content: center;">
        <br>
        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class='tries'></p>
            <div class='items' style=" margin: 1vh 1vw;"></div> 
            <p>¿Cuántos cuadrados hay?</p>
            <input type='number' class='count-S' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-S'>Revisar</button>
            <p class="verify-icon-S"></p>
            <p>¿Cuántos corazones hay?</p>
            <input type='number' class='count-H' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-H'>Revisar</button>
            <p class="verify-icon-H"></p>
            <p>¿Cuántos círculos hay?</p>
            <input type='number' class='count-C' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-C'>Revisar</button>
            <p class="verify-icon-C"></p>
        </div>

        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class='tries2'></p>
            <div class='items2' style=" margin: 1vh 1vw;"></div> 
            <p>¿Cuántos cuadrados hay?</p>
            <input type='number' class='count-S2' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-S2'>Revisar</button>
            <p class="verify-icon-S2"></p>
            <p>¿Cuántos corazones hay?</p>
            <input type='number' class='count-H2' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-H2'>Revisar</button>
            <p class="verify-icon-H2"></p>
            <p>¿Cuántos círculos hay?</p>
            <input type='number' class='count-C2' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-C2'>Revisar</button>
            <p class="verify-icon-C2"></p>
        </div>

        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class='tries3'></p>
            <div class='items3' style=" margin: 1vh 1vw;"></div> 
            <p>¿Cuántos cuadrados hay?</p>
            <input type='number' class='count-S3' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-S3'>Revisar</button>
            <p class="verify-icon-S3"></p>
            <p>¿Cuántos corazones hay?</p>
            <input type='number' class='count-H3' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-H3'>Revisar</button>
            <p class="verify-icon-H3"></p>
            <p>¿Cuántos círculos hay?</p>
            <input type='number' class='count-C3' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-C3'>Revisar</button>
            <p class="verify-icon-C3"></p>
        </div>

        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class='tries4'></p>
            <div class='items4' style=" margin: 1vh 1vw;"></div> 
            <p>¿Cuántos cuadrados hay?</p>
            <input type='number' class='count-S4' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-S4'>Revisar</button>
            <p class="verify-icon-S4"></p>
            <p>¿Cuántos corazones hay?</p>
            <input type='number' class='count-H4' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-H4'>Revisar</button>
            <p class="verify-icon-H4"></p>
            <p>¿Cuántos círculos hay?</p>
            <input type='number' class='count-C4' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify-C4'>Revisar</button>
            <p class="verify-icon-C4"></p>
        </div>
    </div>

    <div style="margin: 2vh 4vw; max-width: 250px;">
        <button class='verify-T'>Revisar Preguntas</button>
        <p class="verify-icon-T"></p>
    </div>
`;

class Agrupemos extends HTMLElement {
    items = [];
    counters = [0,0,0]
    counters2 = [0,0,0]
    counters3 = [0,0,0]
    counters4 = [0,0,0]
    tries = 3;
    tries2 = 3;
    tries3 = 3;
    tries4 = 3;
    constructor(){
        super();
        // Crear arreglo de longitud aleatoria (y llenar con 0's)
        let randomNumber = Math.round(Math.random() * (15 - 1) + 5);
        this.items = new Array(randomNumber).fill(0);
        this.attachShadow({mode: 'open'});
    }
    // connected
    connectedCallback(){
        this.shadowRoot.append(AgrupemosTemplate.content.cloneNode(true))
        
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append(createFigures(this.counters));
            this.shadowRoot.querySelector('.items2').append(createFigures(this.counters2));
            this.shadowRoot.querySelector('.items3').append(createFigures(this.counters3));
            this.shadowRoot.querySelector('.items4').append(createFigures(this.counters4));
        })
        this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
        this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
        this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
        this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;

        // Agregar un event listener a .verify que llame a verificar con el valor del input
        
        this.shadowRoot.querySelector('.verify-S').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count-S').value;
            if(this.tries<1){
                this.tries=0;
                this.shadowRoot.querySelector('.tries').innerHTML = "Intentos  Restantes: " + this.tries;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifySquare(value)){
                    this.shadowRoot.querySelector('.count-S').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-S').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-S').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-S').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-S').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-S').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-S').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-S').style.color = "#ff0000"; 
                    this.tries--;
                    this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
                }
            }
        })
        this.shadowRoot.querySelector('.verify-C').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count-C').value;
            if(this.tries<1){
                this.tries=0;
                this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyCircle(value)){
                    this.shadowRoot.querySelector('.count-C').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-C').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-C').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-C').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-C').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-C').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-C').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-C').style.color = "#ff0000";  
                    this.tries--;
                    this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
                }
            }
        })
        this.shadowRoot.querySelector('.verify-H').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count-H').value;
            if(this.tries<1){
                this.tries=0;
                this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyHeart(value)){
                    this.shadowRoot.querySelector('.count-H').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-H').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-H').innerHTML = "Correcto!";
                    this.shadowRoot.querySelector('.verify-icon-H').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-H').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-H').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-H').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-H').style.color = "#ff0000"; 
                    this.tries--;
                    this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
                }
            }
        })

        //Pregunta 2
        this.shadowRoot.querySelector('.verify-S2').addEventListener('click', ()=>{
            let value2 = this.shadowRoot.querySelector('.count-S2').value2;
            if(this.tries2<1){
                this.tries2=0;
                this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos  Restantes: " + this.tries2;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifySquare2(value2)){
                    this.shadowRoot.querySelector('.count-S2').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-S2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-S2').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-S2').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-S2').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-S2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-S2').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-S2').style.color = "#ff0000"; 
                    this.tries2--;
                    this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
                }
            }
        })
        this.shadowRoot.querySelector('.verify-C2').addEventListener('click', ()=>{
            let value2 = this.shadowRoot.querySelector('.count-C2').value;
            if(this.tries2<1){
                this.tries2=0;
                this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyCircle2(value2)){
                    this.shadowRoot.querySelector('.count-C2').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-C2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-C2').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-C2').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-C2').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-C2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-C2').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-C2').style.color = "#ff0000";  
                    this.tries2--;
                    this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
                }
            }
        })
        this.shadowRoot.querySelector('.verify-H2').addEventListener('click', ()=>{
            let value2 = this.shadowRoot.querySelector('.count-H2').value;
            if(this.tries2<1){
                this.tries2=0;
                this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyHeart2(value2)){
                    this.shadowRoot.querySelector('.count-H2').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-H2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-H2').innerHTML = "Correcto!";
                    this.shadowRoot.querySelector('.verify-icon-H2').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-H2').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-H2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-H2').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-H2').style.color = "#ff0000"; 
                    this.tries2--;
                    this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
                }
            }
        })

        //Pregunta 3
this.shadowRoot.querySelector('.verify-S3').addEventListener('click', ()=>{
            let value3 = this.shadowRoot.querySelector('.count-S3').value;
            if(this.tries3<1){
                this.tries3=0;
                this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos  Restantes: " + this.tries3;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifySquare3(value3)){
                    this.shadowRoot.querySelector('.count-S3').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-S3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-S3').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-S3').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-S3').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-S3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-S3').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-S3').style.color = "#ff0000"; 
                    this.tries3--;
                    this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
                }
            }
        })
        this.shadowRoot.querySelector('.verify-C3').addEventListener('click', ()=>{
            let value3 = this.shadowRoot.querySelector('.count-C3').value;
            if(this.tries3<1){
                this.tries3=0;
                this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyCircle3(value3)){
                    this.shadowRoot.querySelector('.count-C3').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-C3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-C3').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-C3').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-C3').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-C3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-C3').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-C3').style.color = "#ff0000";  
                    this.tries3--;
                    this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
                }
            }
        })
        this.shadowRoot.querySelector('.verify-H3').addEventListener('click', ()=>{
            let value3 = this.shadowRoot.querySelector('.count-H3').value;
            if(this.tries3<1){
                this.tries3=0;
                this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyHeart3(value3)){
                    this.shadowRoot.querySelector('.count-H3').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-H3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-H3').innerHTML = "Correcto!";
                    this.shadowRoot.querySelector('.verify-icon-H3').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-H3').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-H3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-H3').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-H3').style.color = "#ff0000"; 
                    this.tries3--;
                    this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
                }
            }
        })

        //Pregunta 4
        this.shadowRoot.querySelector('.verify-S4').addEventListener('click', ()=>{
            let value4 = this.shadowRoot.querySelector('.count-S4').value;
            if(this.tries4<1){
                this.tries4=0;
                this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos  Restantes: " + this.tries4;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifySquare4(value4)){
                    this.shadowRoot.querySelector('.count-S4').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-S4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-S4').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-S4').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-S4').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-S4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-S4').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-S4').style.color = "#ff0000"; 
                    this.tries4--;
                    this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;
                }
            }
        })
        this.shadowRoot.querySelector('.verify-C4').addEventListener('click', ()=>{
            let value4 = this.shadowRoot.querySelector('.count-C4').value;
            if(this.tries4<1){
                this.tries4=0;
                this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyCircle4(value4)){
                    this.shadowRoot.querySelector('.count-C4').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-C4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-C4').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon-C4').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-C4').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-C4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-C4').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-C4').style.color = "#ff0000";  
                    this.tries4--;
                    this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;
                }
            }
        })
        this.shadowRoot.querySelector('.verify-H4').addEventListener('click', ()=>{
            let value4 = this.shadowRoot.querySelector('.count-H4').value;
            if(this.tries4<1){
                this.tries4=0;
                this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyHeart4(value4)){
                    this.shadowRoot.querySelector('.count-H4').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count-H4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-H4').innerHTML = "Correcto!";
                    this.shadowRoot.querySelector('.verify-icon-H4').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count-H4').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count-H4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon-H4').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon-H4').style.color = "#ff0000"; 
                    this.tries4--;
                    this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;
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
    verifySquare(n){
        return n == this.counters[1];
    }
    verifyHeart(n){
        //alert(n == this.items.length);
        return n == this.counters[2];
    }
    verifyCircle(n){
        //alert(n == this.items.length);
        return n == this.counters[0];
    }

    //Pregunta 2
    verifySquare2(n){
        return n == this.counters2[1];
    }
    verifyHeart2(n){
        //alert(n == this.items.length);
        return n == this.counters2[2];
    }
    verifyCircle2(n){
        //alert(n == this.items.length);
        return n == this.counters2[0];
    }

    //Pregunta 3
    verifySquare3(n){
        return n == this.counters3[1];
    }
    verifyHeart3(n){
        //alert(n == this.items.length);
        return n == this.counters3[2];
    }
    verifyCircle3(n){
        //alert(n == this.items.length);
        return n == this.counters3[0];
    }

    //Pregunta 4
    verifySquare4(n){
        return n == this.counters4[1];
    }
    verifyHeart4(n){
        //alert(n == this.items.length);
        return n == this.counters4[2];
    }
    verifyCircle4(n){
        //alert(n == this.items.length);
        return n == this.counters4[0];
    }
}

customElements.define('ejercicio-agrupemos', Agrupemos);
