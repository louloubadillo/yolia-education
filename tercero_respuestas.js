stringData = '{ "q1.1": 2970, "q1.2": 4336, "q1.3": 5263}';
data = JSON.parse(stringData);

// console.log(data)

function checkAnswers(id) {
    let i = document.querySelectorAll(id +' input');
    let a = Array.from(i).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});

    for (const key in a) {
        console.log(data[key], a[key])
        if (data[key] == a[key]) {
            document.getElementById(key).parentNode.style.backgroundColor = '#00ff00'
        } else {
            document.getElementById(key).parentNode.style.backgroundColor = '#ff0000'
        }
    }
}