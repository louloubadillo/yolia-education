let tag15_1 = document.createElement("p");
let text15_1 = document.createTextNode("");
tag15_1.appendChild(text15_1);
let element15_1 = document.getElementById("cuarto15_1");
element15_1.appendChild(tag15_1);
let counter15_1=3
let p15_1done=false;

let tag15_2 = document.createElement("p");
let text15_2 = document.createTextNode("");
tag15_2.appendChild(text15_2);
let element15_2 = document.getElementById("cuarto15_2");
element15_2.appendChild(tag15_2);
let counter15_2=3
let p15_2done=false;

let tag15_3 = document.createElement("p");
let text15_3 = document.createTextNode("");
tag15_3.appendChild(text15_3);
let element15_3 = document.getElementById("cuarto15_3");
element15_3.appendChild(tag15_3);
let counter15_3=3
let p15_3done=false;

let tag15_4 = document.createElement("p");
let text15_4 = document.createTextNode("");
tag15_4.appendChild(text15_4);
let element15_4 = document.getElementById("cuarto15_4");
element15_4.appendChild(tag15_4);
let counter15_4=3
let p15_4done=false;

let percent15=0;
function checkAnswers15(id){
    let percent = document.getElementById("percentage15");
    let num=0;
    let tag;
    let oneCor;
    if (id[4]=="1"){
        if (p15_1done){
            percent.textContent="Porcentaje: " + percent15+"%";
            return;
        }
        tag=tag15_1;
        let ans1 = document.getElementById("textbox15_1").value;
        if (ans1==((3456.73)*(9))){
            oneCor=true;
        }
        num=1;
    }
    else if (id[4]=="2"){
        if (p15_2done){
            percent.textContent="Porcentaje: " + percent15+"%";
            return;
        }
        tag=tag15_2;
        let ans1 = document.getElementById("textbox15_2").value;
        if (ans1==((54290.1)*(24))){
            oneCor=true;
        }
        num=2;
    }
    else if (id[4]=="3"){
        if (p15_3done){
            percent.textContent="Porcentaje: " + percent15+"%";
            return;
        }
        tag=tag15_3;
        let ans1 = document.getElementById("textbox15_3").value;
        if (ans1==((0.453)*(432))){
            oneCor=true;
        }
        num=3;
    }
    else if (id[4]=="4"){
        if (p15_4done){
            percent.textContent="Porcentaje: " + percent15+"%";
            return;
        }
        tag=tag15_4;
        let ans1 = document.getElementById("textbox15_4").value;
        if (ans1==((678.4)*(97))){
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
        percent15+=25;
        percent.textContent="Porcentaje: " + percent15+"%";
    }
    else{
        tag.textContent= "Incorrecto!";
        if (num==1){
            counter15_1--;
            let tries=document.getElementById("tries15_1");
            tries.textContent="Intentos restantes: " +counter15_1;
            if (counter15_1==0){
                p15_1done=true;
            }
        }
        else if (num==2){
            counter15_2--;
            let tries=document.getElementById("tries15_2");
            tries.textContent="Intentos restantes: " +counter15_2;
            if (counter15_2==0){
                p15_2done=true;
            }
        }
        else if (num==3){
            counter15_3--;
            let tries=document.getElementById("tries15_3");
            tries.textContent="Intentos restantes: " +counter15_3;
            if (counter15_3==0){
                p15_3done=true;
            }
        }
        else if (num==4){
            counter15_4--;
            let tries=document.getElementById("tries15_4");
            tries.textContent="Intentos restantes: " +counter15_4;
            if (counter15_4==0){
                p15_4done=true;
            }
        }
    }
}