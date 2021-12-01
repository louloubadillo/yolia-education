let counter31=3

let tag3_1 = document.createElement("p");
let text3_1 = document.createTextNode("");
tag3_1.appendChild(text1);
let element3_1 = document.getElementById("cuarto3_1");
element3_1.appendChild(tag3_1);

let tag3_2 = document.createElement("p");
let text3_2 = document.createTextNode("");
tag3_2.appendChild(text1);
let element3_2 = document.getElementById("cuarto3_2");
element3_2.appendChild(tag3_2);

let tag3_3 = document.createElement("p");
let text3_3 = document.createTextNode("");
tag3_3.appendChild(text1);
let element3_3 = document.getElementById("cuarto3_3");
element3_3.appendChild(tag3_3);

let tag3_4 = document.createElement("p");
let text3_4 = document.createTextNode("");
tag3_4.appendChild(text1);
let element3_4 = document.getElementById("cuarto3_4");
element3_4.appendChild(tag3_4);

let percent3=0;

function checkAnswers3(id){
    let percent = document.getElementById("percentage3");
    if (counter31==0){
        percent.textContent="Calificación: " + percent3;
        return;
    }
    newID=id[4]
    let tag;
    if (id[2]=="1"){
        tag=tag3_1;
    }
    else if (id[2]=="2"){
        tag=tag3_2;
    }
    else if (id[2]=="3"){
        tag=tag3_3;
    }
    else if (id[2]=="4"){
        tag=tag3_4;
    }
    if (tag.textContent== "Correcto!"){
        return;
    }
    if (newID=="1"){
        tag.textContent= "Correcto!";
        globalCounter++;
        percent3+=25;
        percent.textContent="Calificación: " + percent3;
    }
    else{
        counter31--;
        tag.textContent= "Incorrecto!";
    }
    let tries=document.getElementById("tries_cuarto3");
    tries.textContent="Intentos restantes: " +counter31;
}