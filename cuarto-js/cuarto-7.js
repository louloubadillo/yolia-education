let counter71=3

let tag7_1 = document.createElement("p");
let text7_1 = document.createTextNode("");
tag7_1.appendChild(text1);
let element7_1 = document.getElementById("cuarto7_1");
element7_1.appendChild(tag7_1);

let tag7_2 = document.createElement("p")
let text7_2 = document.createTextNode("");
tag7_2.appendChild(text1);
let element7_2 = document.getElementById("cuarto7_2");
element7_2.appendChild(tag7_2);

let tag7_3 = document.createElement("p")
let text7_3 = document.createTextNode("");
tag7_3.appendChild(text1);
let element7_3 = document.getElementById("cuarto7_3");
element7_3.appendChild(tag7_3);

let tag7_4 = document.createElement("p")
let text7_4 = document.createTextNode("");
tag7_4.appendChild(text1);
let element7_4 = document.getElementById("cuarto7_4");
element7_4.appendChild(tag7_4);

function checkAnswers7(id){
    if (counter71==0){
        return;
    }
    let tag;
    let isRight = false;
    if (id[3]=="1"){
        tag=tag7_1
        let ans1 = document.getElementById("textbox7_1").value;
        if (ans1==">"){
            isRight=true;
        }
    }
    else if (id[3]=="2"){
        tag=tag7_2
        let ans1 = document.getElementById("textbox7_2").value;
        if (ans1=="<"){
            isRight=true;
        }
    }
    else if (id[3]=="3"){
        tag=tag7_3
        let ans1 = document.getElementById("textbox7_3").value;
        if (ans1=="<"){
            isRight=true;
        }
    }
    else if (id[3]=="4"){
        tag=tag7_4
        let ans1 = document.getElementById("textbox7_4").value;
        if (ans1=="="){
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
        counter71--;
        tag.textContent= "Incorrecto!";
    }
    let tries=document.getElementById("tries_cuarto7");
    tries.textContent="Intentos restantes: " +counter71;
}