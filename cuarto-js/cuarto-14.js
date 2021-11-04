let tag14_1 = document.createElement("p");
let text14_1 = document.createTextNode("");
tag14_1.appendChild(text14_1);
let element14_1 = document.getElementById("cuarto14_1");
element14_1.appendChild(tag14_1);
let counter14_1=3
let p14_1done=false;

let tag14_2 = document.createElement("p");
let text14_2 = document.createTextNode("");
tag14_2.appendChild(text14_2);
let element14_2 = document.getElementById("cuarto14_2");
element14_2.appendChild(tag14_2);
let counter14_2=3
let p14_2done=false;

let tag14_3 = document.createElement("p");
let text14_3 = document.createTextNode("");
tag14_3.appendChild(text14_3);
let element14_3 = document.getElementById("cuarto14_3");
element14_3.appendChild(tag14_3);
let counter14_3=3
let p14_3done=false;

let tag14_4 = document.createElement("p");
let text14_4 = document.createTextNode("");
tag14_4.appendChild(text14_4);
let element14_4 = document.getElementById("cuarto14_4");
element14_4.appendChild(tag14_4);
let counter14_4=3
let p14_4done=false;

let percent14=0;
function checkAnswers14(id){
    let percent = document.getElementById("percentage14");
    let num=0;
    let tag;
    let oneCor;
    if (id[4]=="1"){
        if (p14_1done){
            percent.textContent="Porcentaje: " + percent14+"%";
            return;
        }
        tag=tag14_1;
        let ans1 = document.getElementById("textbox14_1").value;
        if (ans1==((53.45)/(4))){
            oneCor=true;
        }
        num=1;
    }
    else if (id[4]=="2"){
        if (p14_2done){
            percent.textContent="Porcentaje: " + percent14+"%";
            return;
        }
        tag=tag14_2;
        let ans1 = document.getElementById("textbox14_2").value;
        if (ans1==((876.51)/(9))){
            oneCor=true;
        }
        num=2;
    }
    else if (id[4]=="3"){
        if (p14_3done){
            percent.textContent="Porcentaje: " + percent14+"%";
            return;
        }
        tag=tag14_3;
        let ans1 = document.getElementById("textbox14_3").value;
        if (ans1==((78.9)/(3))){
            oneCor=true;
        }
        num=3;
    }
    else if (id[4]=="4"){
        if (p14_4done){
            percent.textContent="Porcentaje: " + percent14+"%";
            return;
        }
        tag=tag14_4;
        let ans1 = document.getElementById("textbox14_4").value;
        if (ans1==((9.543)/(2))){
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
        percent14+=25;
        percent.textContent="Porcentaje: " + percent14+"%";
    }
    else{
        tag.textContent= "Incorrecto!";
        if (num==1){
            counter14_1--;
            let tries=document.getElementById("tries14_1");
            tries.textContent="Intentos restantes: " +counter14_1;
            if (counter14_1==0){
                p14_1done=true;
            }
        }
        else if (num==2){
            counter14_2--;
            let tries=document.getElementById("tries14_2");
            tries.textContent="Intentos restantes: " +counter14_2;
            if (counter14_2==0){
                p14_2done=true;
            }
        }
        else if (num==3){
            counter14_3--;
            let tries=document.getElementById("tries14_3");
            tries.textContent="Intentos restantes: " +counter14_3;
            if (counter14_3==0){
                p14_3done=true;
            }
        }
        else if (num==4){
            counter14_4--;
            let tries=document.getElementById("tries14_4");
            tries.textContent="Intentos restantes: " +counter14_4;
            if (counter14_4==0){
                p14_4done=true;
            }
        }
    }
}