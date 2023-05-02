//En un juego de pelea recibimos un array (generarlo) con 10 golpes aleatorios que recibe un personaje, mostrar todos los valores y luego buscar cual es el golpe mas fuerte que se dio.
let golpes = [100,65,84,35,15,42,92,5,10,27];

let cantgolpes = prompt("Cuantos golpes vas a dar");
let golpe = Math.floor(Math.random()*golpes[0]) + golpes[9];
let max = golpes[0];

for (let i = 0 ; i< cantgolpes ; i++){
    let golpe = Math.floor(Math.random()*golpes[0]) + golpes[9]
    console.log(`Golpe ${i}:`+ golpe);
    if(golpe > max ){
        max = golpe
    }
}

console.log(`El golpe mas fuerte fue = ${max}`)







