/*
 Unidades
*/

function createNumbersUni(str){
    let figureIcon = document.createElement('p');
    let figures = [{"num":"345", "res":"5"}, {"num":"102", "res":"2"}, {"num":"856", "res":"6"}, {"num":"234", "res":"4"}, {"num":"599", "res":"9"}, {"num":"954", "res":"4"}, {"num":"318", "res":"8"}, {"num":"471", "res":"1"},
    {"num":"780", "res":"0"}, {"num":"569", "res":"9"}, {"num":"999","res":"9"}, {"num":"319", "res":"9"}, {"num":"882", "res":"2"}, {"num":"566", "res":"6"}, {"num":"691", "res":"1"}, {"num":"745", "res":"5"}];
    
    let limit = figures.length-1;
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].res;
    figureIcon.innerText = figures[rand].num;
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "40px";
    figureIcon.style.display = "inline";
    return figureIcon;

}

let UnidadesTemplate = document.createElement('template');
UnidadesTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <p class= 'tries'></p>
        <p>Escribe cúal es la unidad del siguiente número</p>
        <div class='items' style=" margin: 1vh 1vw;"></div> 
        <input type='text' class='count' style=" margin: 1vh 1vw; color:#000;">
        <button class='verify'>Revisar</button>
        <p class="verify-icon"></p>
    </div>
`;

class Unidades extends HTMLElement {
    items = []
    str = [""];
    tries = 3;

    constructor(){
        super();
        let randomNumber = 1;
        this.items = new Array(randomNumber).fill(0);
        this.attachShadow({mode: 'open'});
    }
    //connected
    connectedCallback(){
        this.shadowRoot.append(UnidadesTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createNumbersUni(this.str) );
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

customElements.define('ejercicio-unidades', Unidades);