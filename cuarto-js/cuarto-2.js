let tag5 = document.createElement("p");
let text5 = document.createTextNode("");
tag5.appendChild(text5);
let element5 = document.getElementById("p5");
element5.appendChild(tag5);
let counter5=3
let p5done=false;

let tag6 = document.createElement("p");
let text6 = document.createTextNode("");
tag6.appendChild(text6);
let element6 = document.getElementById("p6");
element6.appendChild(tag6);
let counter6=3
let p6done=false;


let tag7 = document.createElement("p");
let text7 = document.createTextNode("");
tag7.appendChild(text7);
let element7 = document.getElementById("p7");
element7.appendChild(tag7);
let counter7=3
let p7done=false;


let tag8 = document.createElement("p");
let text8 = document.createTextNode("");
tag8.appendChild(text8);
let element8 = document.getElementById("p8");
element8.appendChild(tag8);
let counter8=3
let p8done=false;

let percent2=0;

function checkAnswers2(id){
    let percent = document.getElementById("percentage2");
    let tag1 = document.createElement("p");
    let text1 = document.createTextNode("");
    tag1.appendChild(text1);
    let element1 = document.getElementById("p5");
    element1.appendChild(tag1);
    let num=0;
    newID=id[1];
    let tag;
    let oneCor;
    let twoCor;
    if (id[1]=="5"){
        if (p5done){
            percent.textContent="Calificación " + percent2;
            return;
        }
        tag=tag5;
        let ans1 = document.getElementById("p5.1").value;
        let ans2 = document.getElementById("p5.2").value;
        if (ans1==3){
            oneCor=true;
        }
        if (ans2==3){
            twoCor=true;
        }
        num=5;
    }
    else if (id[1]=="6"){
        if (p6done){
            percent.textContent="Calificación " + percent2;
            return;
        }
        tag=tag6;
        let ans1 = document.getElementById("p6.1").value;
        let ans2 = document.getElementById("p6.2").value;
        if (ans1==6){
            oneCor=true;
        }
        if (ans2==6){
            twoCor=true;
        }
        num=6;
    }
    else if (id[1]=="7"){
        if (p7done){
            percent.textContent="Calificación " + percent2;
            return;
        }
        tag=tag7;
        let ans1 = document.getElementById("p7.1").value;
        let ans2 = document.getElementById("p7.2").value;
        if (ans1==4){
            oneCor=true;
        }
        if (ans2==4){
            twoCor=true;
        }
        num=7;

    }
    else if (id[1]=="8"){
        if (p8done){
            percent.textContent="Calificación " + percent2;
            return;
        }
        tag=tag8
        let ans1 = document.getElementById("p8.1").value;
        let ans2 = document.getElementById("p8.2").value;
        if (ans1==5){
            oneCor=true;
        }
        if (ans2==5){
            twoCor=true;
        }
        num=8;
    }
    if (tag.textContent== "Correcto!"){
        return;
    }
    if (oneCor&&twoCor){
        tag.textContent= "Correcto!";
        globalCounter++;
        percent2+=25;
        percent.textContent="Calificación: " + percent2;
    }
    else{
        tag.textContent= "Incorrecto!";
        if (num==5){
            counter5--;
            let tries=document.getElementById("triesp5");
            tries.textContent="Intentos restantes: " +counter5;
            if (counter5==0){
                p5done=true;
            }
        }
        else if (num==6){
            counter6--;
            let tries=document.getElementById("triesp6");
            tries.textContent="Intentos restantes: " +counter6;
            if (counter6==0){
                p6done=true;
            }
        }
        else if (num==7){
            counter7--;
            let tries=document.getElementById("triesp7");
            tries.textContent="Intentos restantes: " +counter7;
            if (counter7==0){
                p7done=true;
            }
        }
        else if (num==8){
            counter8--;
            let tries=document.getElementById("triesp8");
            tries.textContent="Intentos restantes: " +counter8;
            if (counter8==0){
                p8done=true;
            }
        }
    }
}
