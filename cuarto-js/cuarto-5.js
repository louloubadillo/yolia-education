let tag5_1 = document.createElement("p");
let text5_1 = document.createTextNode("");
tag5_1.appendChild(text5_1);
let element5_1 = document.getElementById("cuarto5_1");
element5_1.appendChild(tag5_1);
let counter5_1=3
let p5_1done=false;

let tag5_2 = document.createElement("p");
let text5_2 = document.createTextNode("");
tag5_2.appendChild(text5_2);
let element5_2 = document.getElementById("cuarto5_2");
element5_2.appendChild(tag5_2);
let counter5_2=3
let p5_2done=false;

let tag5_3 = document.createElement("p");
let text5_3 = document.createTextNode("");
tag5_3.appendChild(text5_3);
let element5_3 = document.getElementById("cuarto5_3");
element5_3.appendChild(tag5_3);
let counter5_3=3
let p5_3done=false;

let tag5_4 = document.createElement("p");
let text5_4 = document.createTextNode("");
tag5_4.appendChild(text5_4);
let element5_4 = document.getElementById("cuarto5_4");
element5_4.appendChild(tag5_4);
let counter5_4=3
let p5_4done=false;

let percent5=0;

function checkAnswers5(id){
    let percent = document.getElementById("percentage5");
    let num=0;
    let tag;
    let oneCor;
    if (id[3]=="1"){
        if (p5_1done){
            percent.textContent="Calificación: " + percent5;
            return;
        }
        tag=tag5_1;
        let ans1 = document.getElementById("textbox5_1").value;
        if (ans1=="1/2" || ans1==1/2){
            oneCor=true;
        }
        num=1;
    }
    else if (id[3]=="2"){
        if (p5_2done){
            percent.textContent="Calificación: " + percent5;
            return;
        }
        tag=tag5_2;
        let ans1 = document.getElementById("textbox5_2").value;
        if (ans1=="2/6" || ans1==2/6){
            oneCor=true;
        }
        num=2;
    }
    else if (id[3]=="3"){
        if (p5_3done){
            percent.textContent="Calificación: " + percent5;
            return;
        }
        tag=tag5_3;
        let ans1 = document.getElementById("textbox5_3").value;
        if (ans1=="3/4" || ans1==3/4){
            oneCor=true;
        }
        num=3;
    }
    else if (id[3]=="4"){
        if (p5_4done){
            percent.textContent="Calificación: " + percent5;
            return;
        }
        tag=tag5_4;
        let ans1 = document.getElementById("textbox5_4").value;
        if (ans1=="1/3" || ans1==1/3){
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
        percent5+=25;
        percent.textContent="Calificación: " + percent5;
    }
    else{
        tag.textContent= "Incorrecto!";
        if (num==1){
            counter5_1--;
            let tries=document.getElementById("tries5_1");
            tries.textContent="Intentos restantes: " +counter5_1;
            if (counter5_1==0){
                p5_1done=true;
            }
        }
        else if (num==2){
            counter5_2--;
            let tries=document.getElementById("tries5_2");
            tries.textContent="Intentos restantes: " +counter5_2;
            if (counter5_2==0){
                p5_2done=true;
            }
        }
        else if (num==3){
            counter5_3--;
            let tries=document.getElementById("tries5_3");
            tries.textContent="Intentos restantes: " +counter5_3;
            if (counter5_3==0){
                p5_3done=true;
            }
        }
        else if (num==4){
            counter5_4--;
            let tries=document.getElementById("tries5_4");
            tries.textContent="Intentos restantes: " +counter5_4;
            if (counter5_4==0){
                p5_4done=true;
            }
        }
    }
}
