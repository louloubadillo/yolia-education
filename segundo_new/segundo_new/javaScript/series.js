/**
 * Series
 */


 function createSeries(str){
    let figureIcon = document.createElement('p');
    let figures = [{"serie":"258 , 283 , 308 ,  _ ", "res":"333"}, {"serie":"478 , 528 , 578 ,  _  ", "res":"628"}, {"serie":"599 , 641 , 683 ,  _ ", "res":"725"}, {"serie":"601 , 551 , 501 ,  _ ", "res":"451"}, {"serie":"755 , 666 , 577 ,  _ ", "res":"488"}, {"serie":"84 , 96 , 108 ,  _", "res":"120"}, {"serie":"58 , 65 , 72 ,  _", "res":"79"},
    {"serie":"124 , 177 , 230 ,  _ ", "res":"283"}, {"serie":"420 , 400 , 380 ,  _", "res":"360"}, {"serie":"69 , 78 , 87 ,  _", "res":"96"}, {"serie":"528 , 577 , 626 ,  _", "res":"675"}, {"serie":"612 , 647 , 682 ,  _", "res":"717"}, {"serie":"373 , 340 , 307 ,  _", "res":"274"}];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].res;
    figureIcon.innerText = figures[rand].serie;
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "40px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let SeriesTemplate = document.createElement('template');
SeriesTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <p class= 'tries'></p>
        <h4>Descubre el patrón y continua la serie</h4>
        <p>Escribe únicamente el número que sige en la serie</p>
        <div class='items' style=" margin: 1vh 1vw;"></div> 
        <input type='text' class='count' style=" margin: 1vh 1vw; color:#000;">
        <button class='verify'>Revisar</button>
        <p class="verify-icon"></p>
    </div>
`;
class Series extends HTMLElement {
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
        this.shadowRoot.append(SeriesTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createSeries(this.str) );
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
        //strMod = strMod.replace(" ","")
        return strMod === this.str[0]
    }

}

customElements.define('ejercicio-series', Series);