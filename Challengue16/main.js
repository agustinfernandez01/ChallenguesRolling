let marca = prompt("Ingrese la marca del auto");
let modelo = prompt("Ingrese el modelo del auto");

let marca2 = marca.trim();
let modelo2 = modelo.trim();

if (marca2.toLowerCase() == "ford" && modelo2.toLowerCase() == "fiesta"){
    alert("tiene un descuento del 5%");
}
else if (marca2.toLowerCase() == "ford" && modelo2.toLowerCase() == "focus") {
    alert("tiene un descuento del 10%");
}