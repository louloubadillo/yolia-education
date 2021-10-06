let boxElements = document.querySelectorAll('.mover');

// Add behaviours to all drag elements
boxElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
    elem.addEventListener("dragend", dragEnd);
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
});

function dragStart(event) {
    event.target.classList.add("drag-start");
    event.dataTransfer.setData("text", event.target.id);
}

function dragEnd(event) {
    event.target.classList.remove("drag-start");
}

function dragEnter(event) {
    if(!event.target.classList.contains("correct")) {
        event.target.classList.add("drag-enter");
    }
}

function dragOver(event) {
    event.preventDefault();
    if(!event.target.classList.contains("correct")) {
        event.target.style.removeProperty("background-color");
        event.target.classList.add("drag-enter");
    }
}

function dragLeave(event) {
    if(!event.target.classList.contains("correct")) {
        event.target.classList.remove("drag-enter");
    }
}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove("drag-enter");
    const draggableElementId = event.dataTransfer.getData("text");
    const droppableElementId = event.target.id;

    if(!event.target.classList.contains("correct")) {
        // Change value of text content (but not ID, otherwise they'll be harder to verify)
        if(draggableElementId !== droppableElementId) {
            const draggableElement = document.getElementById(draggableElementId);
            const droppableElementTextContent = event.target.textContent;
            
            event.target.classList.add('dropped');
            event.target.textContent = draggableElement.textContent;
            draggableElement.classList.add('dropped');
            draggableElement.textContent = droppableElementTextContent;
        }
    }
}
