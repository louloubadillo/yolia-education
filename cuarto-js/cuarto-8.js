let counter81=3

let tag8_1 = document.createElement("p");
let text8_1 = document.createTextNode("");
tag8_1.appendChild(text1);
let element8_1 = document.getElementById("cuarto8_1");
element8_1.appendChild(tag8_1);

let tag8_2 = document.createElement("p")
let text8_2 = document.createTextNode("");
tag8_2.appendChild(text1);
let element8_2 = document.getElementById("cuarto8_2");
element8_2.appendChild(tag8_2);

let tag8_3 = document.createElement("p")
let text8_3 = document.createTextNode("");
tag8_3.appendChild(text1);
let element8_3 = document.getElementById("cuarto8_3");
element8_3.appendChild(tag8_3);

let tag8_4 = document.createElement("p")
let text8_4 = document.createTextNode("");
tag8_4.appendChild(text1);
let element8_4 = document.getElementById("cuarto8_4");
element8_4.appendChild(tag8_4);

let percent8=0;
function checkAnswers8(id){
    let percent = document.getElementById("percentage8");
    if (counter81==0){
        percent.textContent="Calificación: " + percent8;
        return;
    }
    let tag;
    let isRight = false;
    if (id[3]=="1"){
        tag=tag8_1
        let ans1 = document.getElementById("textbox8_1").value;
        if (ans1=="Juan"){
            isRight=true;
        }
    }
    else if (id[3]=="2"){
        tag=tag8_2
        let ans1 = document.getElementById("textbox8_2").value;
        if (ans1=="Isabel"){
            isRight=true;
        }
    }
    else if (id[3]=="3"){
        tag=tag8_3
        let ans1 = document.getElementById("textbox8_3").value;
        if (ans1=="Regina"){
            isRight=true;
        }
    }
    else if (id[3]=="4"){
        tag=tag8_4
        let ans1 = document.getElementById("textbox8_4").value;
        if (ans1=="Pedro"){
            isRight=true;
        }
    }
    if (tag.textContent== "Correcto!"){
        return;
    }
    if (isRight){
        tag.textContent= "Correcto!";
        globalCounter++;
        percent8+=25;
        percent.textContent="Calificación: " + percent8;
    }
    else{
        counter81--;
        tag.textContent= "Incorrecto!";
    }
    let tries=document.getElementById("tries_cuarto8");
    tries.textContent="Intentos restantes: " +counter81;
}