let counter41=3

let tag4_1 = document.createElement("p");
let text4_1 = document.createTextNode("");
tag4_1.appendChild(text1);
let element4_1 = document.getElementById("cuarto4_1");
element4_1.appendChild(tag4_1);

let tag4_2 = document.createElement("p")
let text4_2 = document.createTextNode("");
tag4_2.appendChild(text1);
let element4_2 = document.getElementById("cuarto4_2");
element4_2.appendChild(tag4_2);

let tag4_3 = document.createElement("p")
let text4_3 = document.createTextNode("");
tag4_3.appendChild(text1);
let element4_3 = document.getElementById("cuarto4_3");
element4_3.appendChild(tag4_3);

let tag4_4 = document.createElement("p")
let text4_4 = document.createTextNode("");
tag4_4.appendChild(text1);
let element4_4 = document.getElementById("cuarto4_4");
element4_4.appendChild(tag4_4);

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
    else if (id[3]=="3"){
        tag=tag4_3
        let ans1 = document.getElementById("textbox4_3").value;
        if (ans1==7){
            isRight=true;
        }
    }
    else if (id[3]=="4"){
        tag=tag4_4
        let ans1 = document.getElementById("textbox4_4").value;
        if (ans1==28){
            isRight=true;
        }
    }
    if (tag.textContent== "Correcto!"){
        return;
    }
    if (isRight){
        tag.textContent= "Correcto!";
        globalCounter++;
    }
    else{
        counter41--;
        tag.textContent= "Incorrecto!";
    }
    let tries=document.getElementById("tries_cuarto4");
    tries.textContent="Intentos restantes: " +counter41;
}