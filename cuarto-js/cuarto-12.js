let counter121=3

let tag12_1 = document.createElement("p");
let text12_1 = document.createTextNode("");
tag12_1.appendChild(text1);
let element12_1 = document.getElementById("cuarto12_1");
element12_1.appendChild(tag12_1);

let tag12_2 = document.createElement("p")
let text12_2 = document.createTextNode("");
tag12_2.appendChild(text1);
let element12_2 = document.getElementById("cuarto12_2");
element12_2.appendChild(tag12_2);

let tag12_3 = document.createElement("p")
let text12_3 = document.createTextNode("");
tag12_3.appendChild(text1);
let element12_3 = document.getElementById("cuarto12_3");
element12_3.appendChild(tag12_3);

let tag12_4 = document.createElement("p")
let text12_4 = document.createTextNode("");
tag12_4.appendChild(text1);
let element12_4 = document.getElementById("cuarto12_4");
element12_4.appendChild(tag12_4);

function checkAnswers12(id){
    if (counter121==0){
        return;
    }
    let tag;
    let isRight = false;
    if (id[4]=="1"){
        tag=tag12_1
        let ans1 = document.getElementById("textbox12_1").value;
        if (ans1=="Pablo"){
            isRight=true;
        }
    }
    else if (id[4]=="2"){
        tag=tag12_2
        let ans1 = document.getElementById("textbox12_2").value;
        if (ans1=="Paula"){
            isRight=true;
        }
    }
    else if (id[4]=="3"){
        tag=tag12_3
        let ans1 = document.getElementById("textbox12_3").value;
        if (ans1=="Fernando"){
            isRight=true;
        }
    }
    else if (id[4]=="4"){
        tag=tag12_4
        let ans1 = document.getElementById("textbox12_4").value;
        if (ans1==5/100 || ans1=="cinco centésimas" || ans1=="Cinco centésimas" || ans1=="Cinco centesimas" || ans1=="cinco centesimas"){
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
        counter121--;
        tag.textContent= "Incorrecto!";
    }
    let tries=document.getElementById("tries_cuarto12");
    tries.textContent="Intentos restantes: " +counter121;
}