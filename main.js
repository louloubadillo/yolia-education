const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
});

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragEnter(event){
    //Add class droppable-hover to the target droppable element
    event.target.classList.add("droppable-hover");
}

function dragOver(event) {
    event.preventDefault();
}

function dragLeave(event){
    event.target.classList.remove("droppable-hover");
}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove("droppable-hover");
    const draggableElementData = event.dataTransfer.getData("text");
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    if(draggableElementData === droppableElementData){
        event.target.classList.add("dropped");
        const draggableElement = document.getElementById(draggableElementData);
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
        event.target.insertAdjacentHTML("afterbegin", `<i class="${draggableElementData}"></i>`);
    }
}

/* Segunda Pregunta - Medidas */


const medidas = document.querySelector('#medidas');
const msg = document.querySelector('.msg')
const pregunta1 = document.querySelector('#pregunta1');
const pregunta2 = document.querySelector('#pregunta2');
const pregunta3 = document.querySelector('#pregunta3');
const pregunta4 = document.querySelector('#pregunta4');

medidas.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    //console.log(pregunta1.value);
    if(pregunta1.value == '' || pregunta2.value == '' || pregunta3.value == '' || pregunta4.value == ''){
        msg.classList.remove('correcto');
        msg.classList.remove('incorrecto');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor conteste todas las preguntas';

        //setTimeout(() => msg.remove(), 3000);
    }else{
        if(pregunta1.value == '1' && pregunta2.value == '2' && pregunta3.value == '3' && pregunta4.value == '3'){
            msg.classList.remove('error');
            msg.classList.remove('incorrecto');
            msg.classList.add('correcto');
            msg.innerHTML = 'Felicidades! Las respuestas son correctas.';
        }else{
            msg.classList.remove();
            msg.classList.remove('correcto');
            msg.classList.remove('error');
            msg.classList.add('incorrecto');
            msg.innerHTML = 'Las respuestas son incorrectas, intente de nuevo.';
            //setTimeout(() => msg.remove(), 3000);
            pregunta1.value = '';
            pregunta2.value = '';
            pregunta3.value = '';
            pregunta4.value = '';

        }
    }

}