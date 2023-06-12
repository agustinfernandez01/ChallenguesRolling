let array = ["Piedra","Papel","Tijera"];

let random1 = Math.floor(Math.random()* array.length );
let random2 = Math.floor(Math.random()* array.length );
let jugador1 = array[random1];
let jugador2 = array[random2];

console.log("Piedra , papel o tijera!");

console.log(array[random1]);
console.log(array[random2]);

if(jugador1=="Tijera" && jugador2=="Papel"){
    console.log("Gana jugador 1");
}
else if(jugador1=="Tijera" && jugador2=="Piedra"){
    console.log("Gana jugador 2");
}
else if(jugador1=="Tijera" && jugador2=="Tijera"){
    console.log("Empate");
}
else if (jugador1=="Papel" && jugador2=="Tijera"){
    console.log("Gana jugador 2");
}
else if(jugador1=="Papel" && jugador2=="Piedra"){
    console.log("Gana jugador 1");
}
else if(jugador1=="Papel" && jugador2=="Papel"){
    console.log("Empate");
}
else if(jugador1=="Piedra" && jugador2=="Tijera"){
    console.log("Gana jugador 1");
}
else if(jugador1=="Piedra" && jugador2=="Papel"){
    console.log("Gana jugador 2");
}
else if(jugador1=="Piedra" && jugador2=="Piedra"){
    console.log("Empate");
}

