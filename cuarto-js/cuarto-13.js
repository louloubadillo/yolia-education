let tag13_1 = document.createElement("p");
let text13_1 = document.createTextNode("");
tag13_1.appendChild(text13_1);
let element13_1 = document.getElementById("cuarto13_1");
element13_1.appendChild(tag13_1);
let counter13_1=3
let p13_1done=false;

let tag13_2 = document.createElement("p");
let text13_2 = document.createTextNode("");
tag13_2.appendChild(text13_2);
let element13_2 = document.getElementById("cuarto13_2");
element13_2.appendChild(tag13_2);
let counter13_2=3
let p13_2done=false;

let tag13_3 = document.createElement("p");
let text13_3 = document.createTextNode("");
tag13_3.appendChild(text13_3);
let element13_3 = document.getElementById("cuarto13_3");
element13_3.appendChild(tag13_3);
let counter13_3=3
let p13_3done=false;

let tag13_4 = document.createElement("p");
let text13_4 = document.createTextNode("");
tag13_4.appendChild(text13_4);
let element13_4 = document.getElementById("cuarto13_4");
element13_4.appendChild(tag13_4);
let counter13_4=3
let p13_4done=false;


function checkAnswers13(id){
    let num=0;
    let tag;
    let oneCor;
    if (id[4]=="1"){
        if (p13_1done){
            return;
        }
        tag=tag13_1;
        let ans1 = document.getElementById("textbox13_1").value;
        if (ans1==((12*4)+(56*5))){
            oneCor=true;
        }
        num=1;
    }
    else if (id[4]=="2"){
        if (p13_2done){
            return;
        }
        tag=tag13_2;
        let ans1 = document.getElementById("textbox13_2").value;
        if (ans1==((23)*(5+3))){
            oneCor=true;
        }
        num=2;
    }
    else if (id[4]=="3"){
        if (p13_3done){
            return;
        }
        tag=tag13_3;
        let ans1 = document.getElementById("textbox13_3").value;
        if (ans1==((301*3)+(763*5))){
            oneCor=true;
        }
        num=3;
    }
    else if (id[4]=="4"){
        if (p13_4done){
            return;
        }
        tag=tag13_4;
        let ans1 = document.getElementById("textbox13_4").value;
        if (ans1==((23456*1)-(609*2))){
            oneCor=true;
        }
        num=4;
    }
    if (tag.textContent== "Correcto!"){
        return;
    }
    if (oneCor){
        tag.textContent= "Correcto!";
        globalCounter++;
    }
    else{
        tag.textContent= "Incorrecto!";
        if (num==1){
            counter13_1--;
            let tries=document.getElementById("tries13_1");
            tries.textContent="Intentos restantes: " +counter13_1;
            if (counter13_1==0){
                p13_1done=true;
            }
        }
        else if (num==2){
            counter13_2--;
            let tries=document.getElementById("tries13_2");
            tries.textContent="Intentos restantes: " +counter13_2;
            if (counter13_2==0){
                p13_2done=true;
            }
        }
        else if (num==3){
            counter13_3--;
            let tries=document.getElementById("tries13_3");
            tries.textContent="Intentos restantes: " +counter13_3;
            if (counter13_3==0){
                p13_3done=true;
            }
        }
        else if (num==4){
            counter13_4--;
            let tries=document.getElementById("tries13_4");
            tries.textContent="Intentos restantes: " +counter13_4;
            if (counter13_4==0){
                p13_4done=true;
            }
        }
    }
}