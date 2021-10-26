let tag11_1 = document.createElement("p");
let text11_1 = document.createTextNode("");
tag11_1.appendChild(text11_1);
let element11_1 = document.getElementById("cuarto11_1");
element11_1.appendChild(tag11_1);
let counter11_1=3
let p11_1done=false;

let tag11_2 = document.createElement("p");
let text11_2 = document.createTextNode("");
tag11_2.appendChild(text11_2);
let element11_2 = document.getElementById("cuarto11_2");
element11_2.appendChild(tag11_2);
let counter11_2=3
let p11_2done=false;

let tag11_3 = document.createElement("p");
let text11_3 = document.createTextNode("");
tag11_3.appendChild(text11_3);
let element11_3 = document.getElementById("cuarto11_3");
element11_3.appendChild(tag11_3);
let counter11_3=3
let p11_3done=false;

let tag11_4 = document.createElement("p");
let text11_4 = document.createTextNode("");
tag11_4.appendChild(text11_4);
let element11_4 = document.getElementById("cuarto11_4");
element11_4.appendChild(tag11_4);
let counter11_4=3
let p11_4done=false;


function checkAnswers11(id){
    let num=0;
    let tag;
    let oneCor;
    if (id[4]=="1"){
        if (p11_1done){
            return;
        }
        tag=tag11_1;
        let ans1 = document.getElementById("textbox11_1").value;
        if (ans1==34/10){
            oneCor=true;
        }
        num=1;
    }
    else if (id[4]=="2"){
        if (p11_2done){
            return;
        }
        tag=tag11_2;
        let ans1 = document.getElementById("textbox11_2").value;
        if (ans1==63/100){
            oneCor=true;
        }
        num=2;
    }
    else if (id[4]=="3"){
        if (p11_3done){
            return;
        }
        tag=tag11_3;
        let ans1 = document.getElementById("textbox11_3").value;
        if (ans1==7/10){
            oneCor=true;
        }
        num=3;
    }
    else if (id[4]=="4"){
        if (p11_4done){
            return;
        }
        tag=tag11_4;
        let ans1 = document.getElementById("textbox11_4").value;
        if (ans1==64321/1000){
            oneCor=true;
        }
        num=4;
    }
    
    if (oneCor){
        tag.textContent= "Correcto!";
    }
    else{
        tag.textContent= "Incorrecto!";
        if (num==1){
            counter11_1--;
            let tries=document.getElementById("tries11_1");
            tries.textContent="Intentos restantes: " +counter11_1;
            if (counter11_1==0){
                p11_1done=true;
            }
        }
        else if (num==2){
            counter11_2--;
            let tries=document.getElementById("tries11_2");
            tries.textContent="Intentos restantes: " +counter11_2;
            if (counter11_2==0){
                p11_2done=true;
            }
        }
        else if (num==3){
            counter11_3--;
            let tries=document.getElementById("tries11_3");
            tries.textContent="Intentos restantes: " +counter11_3;
            if (counter11_3==0){
                p11_3done=true;
            }
        }
        else if (num==4){
            counter11_4--;
            let tries=document.getElementById("tries11_4");
            tries.textContent="Intentos restantes: " +counter11_4;
            if (counter11_4==0){
                p11_4done=true;
            }
        }
    }
}