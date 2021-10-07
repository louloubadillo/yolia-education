/**
 * Símbolos
 */


 function createSymbols(str){
    let figureIcon = document.createElement('p');
    let figures = [{"icon":"🎈", "forma":"globo"},{"icon":"0️⃣", "forma":"cero"},{"icon":"1️⃣", "forma":"uno"},{"icon":"2️⃣", "forma":"dos"},
    {"icon":"3️⃣", "forma":"tres"},{"icon":"4️⃣", "forma":"cuatro"},{"icon":"5️⃣", "forma":"cinco"},{"icon":"6️⃣", "forma":"seis"},
    {"icon":"7️⃣", "forma":"siete"},{"icon":"8️⃣", "forma":"ocho"},{"icon":"9️⃣", "forma":"nueve"},{"icon":"🐶", "forma":"perro"},
    {"icon":"⏸", "forma":"pausa"},{"icon":"☮", "forma":"paz"},{"icon":"🐱", "forma":"gato"},{"icon":"🚀", "forma":"cohete"},
    {"icon":"🍪", "forma":"galleta"},{"icon":"🍕", "forma":"pizza"}];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].forma;
    figureIcon.innerText = figures[rand].icon;
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "35px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let SimbolosTemplate = document.createElement('template');
SimbolosTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <br>
        <div class='items' style=" margin: 1vh 1vw;"></div> 
        <p>¿Qué representa este símbolo?</p>
        <input type='text' class='count' style=" margin: 1vh 1vw; color:#000;">
        <button class='verify'>Revisar</button>
        <p class="verify-icon"></p>

    </div>
`;

class Simbolos extends HTMLElement {
    items = []
    str = [""]; 
    constructor(){
        super();
        // Crear arreglo de longitud aleatoria (y llenar con 0's)
        let randomNumber = 1;
        this.items = new Array(randomNumber).fill(0);
        this.attachShadow({mode: 'open'});
    }
    // connected
    connectedCallback(){
        this.shadowRoot.append(SimbolosTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createSymbols(this.str) );
        })

        // Agregar un event listener a .verify que llame a verificar con el valor del input
        this.shadowRoot.querySelector('.verify').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count').value; 
            if (this.verifyInput(value)){
                this.shadowRoot.querySelector('.count').style.color = "#25ac8a"; 
                this.shadowRoot.querySelector('.count').style.fontWeight = 'bold';
                this.shadowRoot.querySelector('.verify-icon').innerHTML = "✔️ Correcto"; 
                this.shadowRoot.querySelector('.verify-icon').style.color = "#25ac8a"; 
            }
            else{
                this.shadowRoot.querySelector('.count').style.color = "#ff0000"; 
                this.shadowRoot.querySelector('.count').style.fontWeight = 'bold';
                this.shadowRoot.querySelector('.verify-icon').innerHTML = "❌ Incorrecto"; 
                this.shadowRoot.querySelector('.verify-icon').style.color = "#ff0000"; 
            }
        })

    }
    verifyInput(str){
        let strMod = str.toLowerCase();
        return strMod === this.str[0]
    }

}

customElements.define('ejercicio-simbolos', Simbolos);
