/**
 * Figuras
 * Mostrar diferentes figuras
 * Deben escoger cuál es
 */


 function createFigEsp(str){
    let figureIcon = document.createElement('img');
    let figures = [{"icon":"./images/minecraft.png", "forma":"cubo"},{"icon":"./images/rubiks.png", "forma":"cubo"},
    {"icon":"./images/giza.png", "forma":"pirámide"},{"icon":"./images/can.png", "forma":"cilindro"},{"icon":"./images/candle.png", "forma":"cilindro"},
    {"icon":"./images/earth.png", "forma":"esfera"}, {"icon":"./images/giza.png", "forma":"pirámide"}, {"icon":"./images/earth.png", "forma":"esfera"},
    {"icon":"./images/football.png", "forma":"esfera"},{"icon":"./images/dado.png", "forma":"cubo"},{"icon":"./images/volcan.png", "forma":"pirámide"},
    {"icon":"./images/box.png", "forma":"cubo"},{"icon":"./images/traffic-cone.png", "forma":"cono"},{"icon":"./images/icecream.png", "forma":"cono"},
    {"icon":"./images/globo.png", "forma":"esfera"},];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].forma;
    figureIcon.src = figures[rand].icon;
    figureIcon.ariaHidden = true;
    figureIcon.style.maxWidth = "90px";
    figureIcon.style.maxHeight = "90px";
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "35px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let FigurasEspTemplate = document.createElement('template');
FigurasEspTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <br>
        <div class='items' style=" margin: 1vh 1vw;"></div> 
        <p>¿Qué forma tiene?</p>
        <select class="count-A" name="figures">
            <option value="esfera">Esfera</option>
            <option value="cubo">Cubo</option>
            <option value="pirámide">Pirámide</option>
            <option value="cilindro">Cilindro</option>
            <option value="cono">Cono</option>
        </select>
        <button class='verify-A'>Revisar</button>
        <p class="verify-icon-A"></p>

    </div>
`;

class FigurasEsp extends HTMLElement {
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
        this.shadowRoot.append(FigurasEspTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createFigEsp(this.str) );
        })

        // Agregar un event listener a .verify que llame a verificar con el valor del input
        this.shadowRoot.querySelector('.verify-A').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count-A').value; 
            if (this.verifyInput(value)){
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

    }
    verifyInput(str){
        let strMod = str.toLowerCase();
        return strMod === this.str[0]
    }

}

customElements.define('ejercicio-figuras-esp', FigurasEsp);
