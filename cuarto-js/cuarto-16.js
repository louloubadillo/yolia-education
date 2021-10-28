function finishTest(){
    let tries=document.getElementById("finalGrade");
    let grade = (globalCounter*10)/60;
    tries.textContent="Calificacion final: " + grade.toFixed(2);
}