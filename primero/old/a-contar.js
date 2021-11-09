/**
 * A contar
 * Generar una cantidad random de cochecitos (1 al 10)
 * Abajo aparece un input y un botón 
 * Escribir número en input y verificar con botón 
 */

function createCarIcon(){
    /*let carIcon = document.createElement('i');
    //let colors = ['#5C7AEA', '#3D56B2', '#14279B']
    //let rand = Math.round(Math.random() * 2);
    carIcon.classList.add('fa', 'fa-car', 'fa-3x');
    carIcon.ariaHidden = true;
    carIcon.style.margin = "0px 4px";
    //carIcon.style.color = colors[rand];*/
    let carIcon = document.createElement('p');
    let ops = [ "🚘", "🚗", "🚕"];
    carIcon.innerText = ops[0];
    carIcon.ariaHidden = true;
    carIcon.style.margin = "0px 3px";
    carIcon.style.fontSize = "30px";
    carIcon.style.display = "inline";
    return carIcon;
}

let AContarTemplate = document.createElement('template');
AContarTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <p class='tries'></p>
        <div class='items' style=" margin: 1vh 1vw;"></div> 
        <input type='number' class='count' style=" margin: 1vh 1vw; color:#000;">
        <button class='verify'>Revisar</button>
        <p class="verify-icon"></p>
    </div>
`;

class AContar extends HTMLElement {
    items = []
    tries = 3; 
    constructor(){
        super();
        // Crear arreglo de longitud aleatoria (y llenar con 0's)
        let randomNumber = Math.round(Math.random() * (15 - 1) + 1);
        this.items = new Array(randomNumber).fill(0);
        this.attachShadow({mode: 'open'});
    }
    // connected
    connectedCallback(){
        this.shadowRoot.append(AContarTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createCarIcon() );
        })
        this.shadowRoot.querySelector('.tries').innerHTML = "Intentos: " + this.tries; 
        // Agregar un event listener a .verify que llame a verificar con el valor del input
        this.shadowRoot.querySelector('.verify').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count').value;
            if(this.tries<=1){
                this.tries=0;
                this.shadowRoot.querySelector('.tries').innerHTML = "Intentos: " + this.tries;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verify(value)){
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
                    this.tries--;
                    this.shadowRoot.querySelector('.tries').innerHTML = "Intentos: " + this.tries; 
                }
            }
            
        })
    }
    verify(n){
        //alert(n == this.items.length);
        return n == this.items.length;
    }

}

customElements.define('ejercicio-a-contar', AContar);
