/**
 * Problemas Cifras
 */


 function createFigCifra(str){
    let figureIcon = document.createElement('img');
    let figures = [{"icon":"./images/prob-cifras/543.png", "num":"3"}, {"icon":"./images/prob-cifras/199.png", "num":"9"}, {"icon":"./images/prob-cifras/237.png", "num":"7"}, {"icon":"./images/prob-cifras/351.png", "num":"1"}, {"icon":"./images/prob-cifras/428.png", "num":"8"}, {"icon":"./images/prob-cifras/612.png", "num":"2"}, {"icon":"./images/prob-cifras/765.png", "num":"5"}];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].num;
    figureIcon.src = figures[rand].icon;
    figureIcon.ariaHidden = true;
    figureIcon.style.maxWidth = "160px";
    figureIcon.style.maxHeight = "160px";
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "35px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let ProbCifraTemplate = document.createElement('template');
ProbCifraTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <p class= 'tries'></p>
        <p>José Ángel cumplió 7 años, su tío Gregorio le regaló los carritos que se indica abajo, ¿Cuantas unidades tiene?</p>
        <div class='items' style=" margin: 1vh 1vw;"></div>
        <input type='text' class='count' style=" margin: 1vh 1vw; color:#000;">
        <button class='verify'>Revisar</button>
        <p class="verify-icon"></p>
    </div>
`;

class ProbCifra extends HTMLElement {
    items = [];
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
        this.shadowRoot.append(ProbCifraTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createFigCifra(this.str) );
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

customElements.define('ejercicio-prob-cifra', ProbCifra);