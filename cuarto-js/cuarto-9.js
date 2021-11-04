let counter91=3

let tag9_1 = document.createElement("p");
let text9_1 = document.createTextNode("");
tag9_1.appendChild(text1);
let element9_1 = document.getElementById("cuarto9_1");
element9_1.appendChild(tag9_1);

let tag9_2 = document.createElement("p");
let text9_2 = document.createTextNode("");
tag9_2.appendChild(text1);
let element9_2 = document.getElementById("cuarto9_2");
element9_2.appendChild(tag9_2);

let tag9_3 = document.createElement("p");
let text9_3 = document.createTextNode("");
tag9_3.appendChild(text1);
let element9_3 = document.getElementById("cuarto9_3");
element9_3.appendChild(tag9_3);

let tag9_4 = document.createElement("p");
let text9_4 = document.createTextNode("");
tag9_4.appendChild(text1);
let element9_4 = document.getElementById("cuarto9_4");
element9_4.appendChild(tag9_4);


let percent9=0;
function checkAnswers9(id){
    let percent = document.getElementById("percentage9");
    if (counter91==0){
        percent.textContent="Porcentaje: " + percent9+"%";
        return;
    }
    newID=id[4]
    let tag;
    if (id[2]=="1"){
        tag=tag9_1;
    }
    else if (id[2]=="2"){
        tag=tag9_2;
    }
    else if (id[2]=="3"){
        tag=tag9_3;
    }
    else if (id[2]=="4"){
        tag=tag9_4;
    }
    if (tag.textContent== "Correcto!"){
        return;
    }
    if (newID=="1"){
        tag.textContent= "Correcto!";
        globalCounter++;
        percent9+=25;
        percent.textContent="Porcentaje: " + percent9+"%";
    }
    else if (newID=="2"){
        counter91--;
        tag.textContent= "Incorrecto!";
    }
    let tries=document.getElementById("tries_cuarto9");
    tries.textContent="Intentos restantes: " +counter91;
}