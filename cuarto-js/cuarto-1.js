let globalCounter=0;

let percent1=0;

let counter1=3;

let tag1 = document.createElement("p");
let text1 = document.createTextNode("");
tag1.appendChild(text1);
let element1 = document.getElementById("p1");
element1.appendChild(tag1);

let tag2 = document.createElement("p");
let text2 = document.createTextNode("");
tag2.appendChild(text2);
let element2 = document.getElementById("p2");
element2.appendChild(tag2);

let tag3 = document.createElement("p");
let text3 = document.createTextNode("");
tag3.appendChild(text3);
let element3 = document.getElementById("p3");
element3.appendChild(tag3);

let tag4 = document.createElement("p");
let text4 = document.createTextNode("");
tag4.appendChild(text4);
let element4 = document.getElementById("p4");
element4.appendChild(tag4);

function checkAnswers1(id){
    let percent = document.getElementById("percentage1");
    if (counter1==0){
        percent.textContent="Porcentaje: " + percent1+"%";
        return;
    }
    newID=id[3]
    let tag;
    if (id[1]=="1"){
        tag=tag1;
    }
    else if (id[1]=="2"){
        tag=tag2;
    }
    else if (id[1]=="3"){
        tag=tag3;
    }
    else if (id[1]=="4"){
        tag=tag4;
    }
    if (tag.textContent== "Correcto!"){
        return;
    }
    if (newID=="1"){
        tag.textContent= "Correcto!";
        globalCounter++;
        percent1+=25;
        percent.textContent="Porcentaje: " + percent1+"%";
    }
    else if (newID=="2"){
        counter1--;
        tag.textContent= "Incorrecto!";
    }
    let tries=document.getElementById("tries1");
    tries.textContent="Intentos restantes: " +counter1;
}