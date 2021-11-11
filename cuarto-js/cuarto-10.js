let counter101=3

let tag10_1 = document.createElement("p");
let text10_1 = document.createTextNode("");
tag10_1.appendChild(text1);
let element10_1 = document.getElementById("cuarto10_1");
element10_1.appendChild(tag10_1);

let tag10_2 = document.createElement("p");
let text10_2 = document.createTextNode("");
tag10_2.appendChild(text1);
let element10_2 = document.getElementById("cuarto10_2");
element10_2.appendChild(tag10_2);

let tag10_3 = document.createElement("p");
let text10_3 = document.createTextNode("");
tag10_3.appendChild(text1);
let element10_3 = document.getElementById("cuarto10_3");
element10_3.appendChild(tag10_3);

let tag10_4 = document.createElement("p");
let text10_4 = document.createTextNode("");
tag10_4.appendChild(text1);
let element10_4 = document.getElementById("cuarto10_4");
element10_4.appendChild(tag10_4);

let percent10=0;
function checkAnswers10(id){
    let percent = document.getElementById("percentage10");
    if (counter101==0){
        percent.textContent="Calificación: " + percent10;
        return;
    }
    newID=id[5]
    let tag;
    if (id[3]=="1"){
        tag=tag10_1;
    }
    else if (id[3]=="2"){
        tag=tag10_2;
    }
    else if (id[3]=="3"){
        tag=tag10_3;
    }
    else if (id[3]=="4"){
        tag=tag10_4;
    }
    if (tag.textContent== "Correcto!"){
        return;
    }
    if (newID=="1"){
        tag.textContent= "Correcto!";
        globalCounter++;
        percent10+=25;
        percent.textContent="Calificación: " + percent10;
    }
    else if (newID=="2"){
        counter101--;
        tag.textContent= "Incorrecto!";
    }
    let tries=document.getElementById("tries_cuarto10");
    tries.textContent="Intentos restantes: " +counter101;
}