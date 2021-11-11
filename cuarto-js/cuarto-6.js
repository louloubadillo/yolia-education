let counter61=3

let tag6_1 = document.createElement("p");
let text6_1 = document.createTextNode("");
tag6_1.appendChild(text1);
let element6_1 = document.getElementById("cuarto6_1");
element6_1.appendChild(tag6_1);

let tag6_2 = document.createElement("p")
let text6_2 = document.createTextNode("");
tag6_2.appendChild(text1);
let element6_2 = document.getElementById("cuarto6_2");
element6_2.appendChild(tag6_2);

let tag6_3 = document.createElement("p")
let text6_3 = document.createTextNode("");
tag6_3.appendChild(text1);
let element6_3 = document.getElementById("cuarto6_3");
element6_3.appendChild(tag6_3);

let tag6_4 = document.createElement("p")
let text6_4 = document.createTextNode("");
tag6_4.appendChild(text1);
let element6_4 = document.getElementById("cuarto6_4");
element6_4.appendChild(tag6_4);

let percent6=0;
function checkAnswers6(id){
    let percent = document.getElementById("percentage6");
    if (counter61==0){
        percent.textContent="Calificación: " + percent6;
        return;
    }
    let tag;
    let isRight = false;
    if (id[3]=="1"){
        tag=tag6_1
        let ans1 = document.getElementById("textbox6_1").value;
        if (ans1==">"){
            isRight=true;
        }
    }
    else if (id[3]=="2"){
        tag=tag6_2
        let ans1 = document.getElementById("textbox6_2").value;
        if (ans1=="="){
            isRight=true;
        }
    }
    else if (id[3]=="3"){
        tag=tag6_3
        let ans1 = document.getElementById("textbox6_3").value;
        if (ans1==">"){
            isRight=true;
        }
    }
    else if (id[3]=="4"){
        tag=tag6_4
        let ans1 = document.getElementById("textbox6_4").value;
        if (ans1=="<"){
            isRight=true;
        }
    }
    if (tag.textContent== "Correcto!"){
        return;
    }
    if (isRight){
        tag.textContent= "Correcto!";
        globalCounter++;
        percent6+=25;
        percent.textContent="Calificación: " + percent6;
    }
    else{
        counter61--;
        tag.textContent= "Incorrecto!";
    }
    let tries=document.getElementById("tries_cuarto6");
    tries.textContent="Intentos restantes: " +counter61;
}