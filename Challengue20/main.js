//-Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y escriba el mayor, el menor y la media aritmética.
//-Se recuerda que la media aritmética de un conjunto de valores es la suma de esos valores dividida por la cantidad de valores.


//valores de entrada
let cantnum = parseInt(prompt("Cuantos numeros va a introducir ?"));
let array = [];
let sumar = 0;
//proceso
for(let i = 0 ; i <= cantnum ; i++){
    array [i] = parseInt(prompt("Ingrese un numero: "));
    var mediarit = (sumar+array[i])/cantnum;
}
let maximo = Math.max(...array);
let minimo = Math.min(...array);
//salida
console.log(`El array y sus componentes son = ${array}`);
console.log(`La media aritmetica es de = ${mediarit}`);
console.log(`El numero mas alto es el = ${maximo}`);
console.log(`El numero mas bajo es el = ${minimo}`);
