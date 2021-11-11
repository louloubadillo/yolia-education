// Manage behaviour of movers, draggable objects and droppable objects

const moverElements = document.querySelectorAll('.mover');
const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");


draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
    elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
    elem.addEventListener("drag", drag);
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
    elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
    elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
    elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

// Add behaviours to all drag elements
moverElements.forEach(elem => {
    elem.addEventListener("dragstart", moverDragStart);
    elem.addEventListener("dragend", dragEnd);
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", moverDrop);
});

function moverDragStart(event) {
    event.target.classList.add("drag-start");
    event.dataTransfer.setData('text', event.target.id);
}

function drag(event) {
    event.target.style.cursor = "grabbing";
}

function dragStart(event) {
    event.target.classList.add("drag-start");
    event.dataTransfer.setData("text", event.target.innerText);
}

function dragEnd(event) {
    event.target.classList.remove("drag-start");
    event.target.style.removeProperty("cursor");
}

function dragEnter(event) {
    if (!event.target.classList.contains("stiff")) {
        event.target.classList.add("drag-enter");
    }
}

function dragOver(event) {
    event.preventDefault();
    if (!event.target.classList.contains("stiff")) {
        event.target.classList.add("drag-enter");
    }
}

function dragLeave(event) {
    if (!event.target.classList.contains("stiff")) {
        event.target.classList.remove("drag-enter");
    }
}

function moverDrop(event) {
    event.preventDefault();
    event.target.classList.remove("drag-enter");
    const draggableElementId = event.dataTransfer.getData("text");
    const droppableElementId = event.target.id;

    if (!event.target.classList.contains("stiff")) {
        // Change value of text content (but not ID, otherwise they'll be harder to verify)
        if (draggableElementId != droppableElementId) {
            const draggableElement = document.getElementById(draggableElementId);
            const droppableElementTextContent = event.target.textContent;

            // Change text displayed by mover and colour
            event.target.classList.add('mover-dropped');
            event.target.style.removeProperty('background-color');
            event.target.textContent = draggableElement.textContent;
            draggableElement.style.removeProperty('background-color');
            draggableElement.textContent = droppableElementTextContent;
        }
    }
}

function drop(event) {
    event.preventDefault(); // This is in order to prevent the browser default handling of the data
    
    // Change colour
    event.target.classList.remove("drag-enter");
    event.target.style.backgroundColor = "#ffffff7e";

    // Add text and reshape
    let cntt = event.dataTransfer.getData("text");
    event.target.innerText = cntt;
    event.target.style.width = `${cntt.length*0.6 + 0.6}em`;
}