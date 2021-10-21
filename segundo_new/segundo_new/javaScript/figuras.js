/**
 * Figuras
 * Mostrar diferentes figuras
 * Deben escoger cuál es
 */


 function createFig(str){
    let figureIcon = document.createElement('p');
    let figures = [{"icon":"🔵", "forma":"círculo"}, {"icon":"⚽", "forma":"círculo"}, {"icon":"🏀", "forma":"círculo"}, {"icon":"💿", "forma":"círculo"}, 
    {"icon":"🟪", "forma":"cuadrado"}, {"icon":"🧇", "forma":"cuadrado"},{"icon":"🍱", "forma":"cuadrado"},
    {"icon":"🔺", "forma":"triángulo"},{"icon":"🔶", "forma":"rombo"},{"icon":"⬢", "forma":"hexágono"}];
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
    <div>
        <br>
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
`;

class Figuras extends HTMLElement {
    items = []
    str = [""];
    tries = 3; 
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
        })
        this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
        // Agregar un event listener a .verify que llame a verificar con el valor del input
        this.shadowRoot.querySelector('.verify-A').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count-A').value; 
            if(this.tries<=1){
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

    }
    verifyInput(str){
        let strMod = str.toLowerCase();
        return strMod === this.str[0]
    }

}

customElements.define('ejercicio-figuras', Figuras);
