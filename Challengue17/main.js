let nota1 = parseInt(prompt("Ingrese su primer nota"));
let nota2 = parseInt(prompt("Ingrese su segunda nota"));
let nota3 = parseInt(prompt("Ingrese su tercera nota"));

let promedio = (nota1 + nota2 + nota3)/3;

if(promedio >= 6){
    alert(`Tu promedio es de ${promedio}, estas aprobado !`);
}
else{
    alert(`Tu promedio es de ${promedio} , estudia mejor para la proxima mi rey`);
}