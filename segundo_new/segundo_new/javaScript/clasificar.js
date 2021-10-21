/**
 * Clasificar
 * Generar una cantidad random de animales y otros objetos
 * Abajo aparece un input y un botón 
 * Escribir cantidad de animales en input y verificar con botón 
 */

 function createIcon(counters){
    let figureIcon = document.createElement('p');
    let ops = ["🐶", "🐢", "🐷", "🐱", "🐠", "🍕", "🍔", "🍫","🎒", "🚘", "🎈"];
    let rand = Math.round(Math.random() *10);
    if(rand < 5){
        counters[0]++; 
    }
    else if (rand >= 5 && rand < 8){
        counters[1]++;
    }
    else{
        counters[2]++;
    }
    figureIcon.innerText = ops[rand];
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "35px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let ClasificarTemplate = document.createElement('template');
ClasificarTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <br>
        <div class='items' style=" margin: 1vh 1vw;"></div> 
        <p>¿Cuántos animales hay?</p>
        <input type='number' class='count-A' style=" margin: 1vh 1vw; color:#000;">
        <button class='verify-A'>Revisar</button>
        <p class="verify-icon-A"></p>
        <p>¿Cuánta comida hay?</p>
        <input type='number' class='count-F' style=" margin: 1vh 1vw; color:#000;">
        <button class='verify-F'>Revisar</button>
        <p class="verify-icon-F"></p>
    </div>
`;

class Clasificar extends HTMLElement {
    items = []
    counters = [0,0,0]
    constructor(){
        super();
        // Crear arreglo de longitud aleatoria (y llenar con 0's)
        let randomNumber = Math.round(Math.random() * (8 - 1) + 1);
        this.items = new Array(randomNumber).fill(0);
        this.attachShadow({mode: 'open'});
    }
    // connected
    connectedCallback(){
        this.shadowRoot.append(ClasificarTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createIcon(this.counters) );
        })

        // Agregar un event listener a .verify que llame a verificar con el valor del input
        this.shadowRoot.querySelector('.verify-A').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count-A').value;
            if (this.verifyAnimals(value)){
                this.shadowRoot.querySelector('.count-A').style.color = "#25ac8a"; 
                this.shadowRoot.querySelector('.count-A').style.fontWeight = 'bold';
                this.shadowRoot.querySelector('.verify-icon-A').innerHTML = "✔️ Correcto"; 
                this.shadowRoot.querySelector('.verify-icon-A').style.color = "#25ac8a"; 
            }
            else{
                this.shadowRoot.querySelector('.count-A').style.color = "#ff0000"; 
                this.shadowRoot.querySelector('.count-A').style.fontWeight = 'bold';
                this.shadowRoot.querySelector('.verify-icon-A').innerHTML = "❌ Incorrecto"; 
                this.shadowRoot.querySelector('.verify-icon-A').style.color = "#ff0000"; 
            }
        })
        this.shadowRoot.querySelector('.verify-F').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count-F').value;
            if (this.verifyFood(value)){
                this.shadowRoot.querySelector('.count-F').style.color = "#25ac8a"; 
                this.shadowRoot.querySelector('.count-F').style.fontWeight = 'bold';
                this.shadowRoot.querySelector('.verify-icon-F').innerHTML = "✔️ Correcto"; 
                this.shadowRoot.querySelector('.verify-icon-F').style.color = "#25ac8a"; 
            }
            else{
                this.shadowRoot.querySelector('.count-F').style.color = "#ff0000"; 
                this.shadowRoot.querySelector('.count-F').style.fontWeight = 'bold';
                this.shadowRoot.querySelector('.verify-icon-F').innerHTML = "❌ Incorrecto"; 
                this.shadowRoot.querySelector('.verify-icon-F').style.color = "#ff0000";  
            }
        })
    }
    verifyAnimals(n){
        return n == this.counters[0];
    }
    verifyFood(n){
        return n == this.counters[1];
    }
}

customElements.define('ejercicio-clasificar', Clasificar);
