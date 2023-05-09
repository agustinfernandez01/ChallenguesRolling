//La app pide números hasta que pida cancelar.
//Cuando se cancela se deben mostrar todos los números ingresados juntos.
//y si se ingresa algo que no sea válido se debe mostrar un alert y seguir
//pidiendo un número.

var array = [];
var a = 0;
var stop = 1;
let cadena;

do{
    array [a] = parseInt(prompt("Ingrese un numero"));
    console.log(array[a]);
    cadena = array.join(",");
    a++
    stop = parseInt(prompt("Desea ingresar otro numero? 1-si 0-no"));
}
while(stop == 1)
    
console.log(`Los numeros son ${cadena}`)