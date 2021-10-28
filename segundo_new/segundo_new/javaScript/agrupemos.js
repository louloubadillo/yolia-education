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
    <div>
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
`;

class Agrupemos extends HTMLElement {
    items = [];
    counters = [0,0,0]
    tries = 3;
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
        })
        this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries; 
        // Agregar un event listener a .verify que llame a verificar con el valor del input
        
        this.shadowRoot.querySelector('.verify-S').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count-S').value;
            if(this.tries<=1){
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
            if(this.tries<=1){
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
            if(this.tries<=1){
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
}

customElements.define('ejercicio-agrupemos', Agrupemos);
