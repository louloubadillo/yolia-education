const figuras = document.querySelector('#figuras');
const msg = document.querySelector('.msg');
const btn = document.querySelector('#btn');
let intentos = 3;

figuras.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log('Submitted');
    msg.innerHTML = 'Quedan ' + intentos + ' intentos';
    intentos = intentos -1;
    if (intentos <= 0){
        btn.removeChild(btn);
    }

}