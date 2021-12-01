/**
 * Números
 */


 function createNumbers(str){
    let figureIcon = document.createElement('p');
    let figures = [{"num":"1", "escrito":"uno"},{"num":"2", "escrito":"dos"},{"num":"3", "escrito":"tres"},{"num":"4", "escrito":"cuatro"},{"num":"5", "escrito":"cinco"},{"num":"6", "escrito":"seis"},{"num":"7", "escrito":"siete"},{"num":"8", "escrito":"ocho"},{"num":"9", "escrito":"nueve"},{"num":"10", "escrito":"diez"},
    {"num":"11", "escrito":"once"},{"num":"12", "escrito":"doce"},{"num":"13", "escrito":"trece"},{"num":"14", "escrito":"catorce"},{"num":"15", "escrito":"quince"},{"num":"16", "escrito":"dieciséis"},{"num":"17", "escrito":"diecisiete"},{"num":"18", "escrito":"dieciocho"},{"num":"19", "escrito":"diecinueve"},{"num":"20", "escrito":"veinte"},
    {"num":"21", "escrito":"veintiuno"},{"num":"22", "escrito":"veintidós"},{"num":"23", "escrito":"veintitrés"},{"num":"24", "escrito":"veinticuatro"},{"num":"25", "escrito":"veinticinco"},{"num":"26", "escrito":"veintiséis"},{"num":"27", "escrito":"veintisiete"},{"num":"28", "escrito":"veintiocho"},{"num":"29", "escrito":"veintinueve"},{"num":"30", "escrito":"treinta"},];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].escrito;
    figureIcon.innerText = figures[rand].num;
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "50px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let NumerosTemplate = document.createElement('template');
NumerosTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <p>Escribe en letra el número</p>
        <div class='items' style=" margin: 1vh 1vw;"></div> 
        <input type='text' class='count' style=" margin: 1vh 1vw; color:#000;">
        <button class='verify'>Revisar</button>
        <p class="verify-icon"></p>
    </div>
`;

class Numeros extends HTMLElement {
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
        this.shadowRoot.append(NumerosTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createNumbers(this.str) );
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

customElements.define('ejercicio-numeros', Numeros);
