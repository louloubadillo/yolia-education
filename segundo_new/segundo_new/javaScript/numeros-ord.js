/**
 * Números Ordinales
 */

//Mayusculas

 function createNumbersOrd(str){
    let figureIcon = document.createElement('p');
    let figures = [{"num":"60°", "escrito":"sexagésimo"},{"num":"14°", "escrito":"decimo cuarto"},{"num":"10°", "escrito":"décimo"},{"num":"37°", "escrito":"trigésimo séptimo"},{"num":"56°", "escrito":"quincuagésimo sexto"},{"num":"72°", "escrito":"septuagésimo segundo"},
    {"num":"28°", "escrito":"vigésimo octavo"},{"num":"13°", "escrito":"decimo tercero"},{"num":"45°", "escrito":"cuadragésimo quinto"},{"num":"41°", "escrito":"cuadragésimo primero"},{"num":"8°", "escrito":"octavo"},{"num":"18°", "escrito":"decimo octavo"},{"num":"23°", "escrito":"vigésimo tercero"},{"num":"39°", "escrito":"trigésimo noveno"}];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].escrito;
    figureIcon.innerText = figures[rand].num;
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "40px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let NumerosOrdTemplate = document.createElement('template');
NumerosOrdTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <p class= 'tries'></p>
        <p>Escribe con letra el número ordinal</p>
        <div class='items' style=" margin: 1vh 1vw;"></div> 
        <input type='text' class='count' style=" margin: 1vh 1vw; color:#000;">
        <button class='verify'>Revisar</button>
        <p class="verify-icon"></p>
    </div>
`;

class NumerosOrd extends HTMLElement {
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
        this.shadowRoot.append(NumerosOrdTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createNumbersOrd(this.str) );
        })
        this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
        // Agregar un event listener a .verify que llame a verificar con el valor del input
        this.shadowRoot.querySelector('.verify').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count').value;
            if(this.tries<=1){
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

    }
    verifyInput(str){
        let strMod = str.toLowerCase();
        return strMod === this.str[0]
    }

}

customElements.define('ejercicio-numeros-ord', NumerosOrd);