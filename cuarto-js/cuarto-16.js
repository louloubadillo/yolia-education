function finishTest(){
    let tries=document.getElementById("finalGrade");
    let grade = (globalCounter*100)/60;
    tries.textContent="Calificación final: " + grade.toFixed(2);
}