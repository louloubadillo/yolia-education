/*
 * Meses del Calendario
 */


 function createMes(str){
    let figureIcon = document.createElement('p');
    let figures = [{"mes":"Enero", "num":"1"}, {"mes":"Febrero", "num":"2"}, {"mes":"Marzo", "num":"3"}, {"mes":"Abril", "num":"4"}, {"mes":"Mayo", "num":"5"}, {"mes":"Junio", "num":"6"}, {"mes":"Julio", "num":"7"}, {"mes":"Agosto", "num":"8"},
    {"mes":"Septiembre", "num":"9"}, {"mes":"Octubre", "num":"10"}, {"mes":"Noviembre", "num":"11"}, {"mes":"Diciembre", "num":"12"}];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].num;
    figureIcon.innerText = figures[rand].mes;
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "45px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let MesesTemplate = document.createElement('template');
MesesTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <br>
        <p class='tries'></p>
        <div class='items' style=" margin: 1vh 1vw;"></div> 
        <p>Enumera el Mes del Año del 1 al 12</p>
        <select class="count-A" name="figures">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
        <button class='verify-A'>Revisar</button>
        <p class="verify-icon-A"></p>

    </div>
`;

class Meses extends HTMLElement {
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
        this.shadowRoot.append(MesesTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createMes(this.str) );
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

customElements.define('ejercicio-meses', Meses);