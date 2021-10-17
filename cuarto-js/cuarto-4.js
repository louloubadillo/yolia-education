let counter41=3

let tag4_1 = document.createElement("p");
let text4_1 = document.createTextNode("");
tag4_1.appendChild(text1);
let element4_1 = document.getElementById("cuarto4_1");
element4_1.appendChild(tag4_1);

let tag4_2 = document.createElement("p")
tag4_2.style.cssText="position: relative; left: 110px;";
let text4_2 = document.createTextNode("");
tag4_2.appendChild(text1);
let element4_2 = document.getElementById("cuarto4_2");
element4_2.appendChild(tag4_2);

function checkAnswers4(id){
    if (counter41==0){
        return;
    }
    let tag;
    let isRight = false;
    if (id[3]=="1"){
        tag=tag4_1
        let ans1 = document.getElementById("textbox4_1").value;
        if (ans1==5){
            isRight=true;
        }
    }
    else if (id[3]=="2"){
        tag=tag4_2
        let ans1 = document.getElementById("textbox4_2").value;
        if (ans1==15){
            isRight=true;
        }
    }
    if (isRight){
        tag.textContent= "Correcto!";
    }
    else{
        counter41--;
        tag.textContent= "Incorrecto!";
    }
    let tries=document.getElementById("tries_cuarto4");
    tries.textContent="Intentos restantes: " +counter41;
}