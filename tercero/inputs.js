// Script to validate text values and move cursor

const inps = document.querySelectorAll('.focus');

inps.forEach(inp => {
    inp.addEventListener('input', moveCursor);
    // inp.addEventListener('keydown', del);
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) || n=='-' || n=='.';
}

// Moves cursor to beginning of input and validates that input is numeric
function moveCursor(e) {
    const inp = e.target;
    let txt = '';

    for (let i = 0; i < inp.value.length; i++) {
        txt += isNumeric(inp.value[i]) ? inp.value[i] : '';
    }

    inp.value = txt;

    // Modern browsers
    if(inp.setSelectionRange) {
        inp.focus();
        inp.setSelectionRange(0, 0);
    } 
    // IE8 and below
    else if (inp.createTextRange) {
        var range = inp.createTextRange();
        range.collapse(true);
        range.moveEnd('character', 0);
        range.moveStart('character', 0);
        range.select();
    }
}