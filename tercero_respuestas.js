stringData = '{ "q1.1": 2970, "q1.2": 4336, "q1.3": 5263, "q1.4": 3787, "q1.5": 8297, "no1": 5, "no2": 3, "no3": 2, "no4": 4, "no5": 1}';
data = JSON.parse(stringData);

// console.log(data)

function checkAnswers(id) {
    let i = document.querySelectorAll(id + ' input');
    let a = Array.from(i).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});
    
    for (const key in a) {
        let ele = document.getElementById(key);
        if (data[key] == a[key]) {
            ele.parentNode.style.backgroundColor = '#9fff9f';
            ele.setAttribute("disabled", "");
            ele.style.background = '#fff0'
            ele.style.color = 'black';
            ele.style.fontWeight = 'bolder';
        } else {
            ele.parentNode.style.backgroundColor = '#f99';
        }
        ele.style.borderColor = "#fff0";
    }
    
    let dd = document.querySelectorAll(id + ' .mover');
    let b = Array.from(dd).reduce((acc, div) => ({...acc, [div.id]: div.textContent}), {});

    for (const key in b) {
        let ele = document.getElementById(key);
        if (data[key] == b[key]) {
            ele.style.backgroundColor = '#9fff9f';
            ele.style.cursor = "default";
            ele.setAttribute("draggable", "false");
            ele.classList.add("dropped");
        } else {
            ele.style.backgroundColor = '#f99';
        }
        ele.style.borderColor = "#fff0";
    }
}