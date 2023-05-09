//En un juego de pelea un personaje utiliza un skill.
//   La skill funciona de esta manera:
//    El contrincante recibirá 10 golpes
//    Cada uno de esos golpes proporciona un daño que varia entre 1000 y 2000 de manera aleatoria
//        a.Muestre cual fue el daño recibido por el contrincante en cada golpe
//        b.Muestre el daño total final que el enemigo recibió

let skill = [];
let dañofinal = 0;

for (let i = 0 ; i < 10 ; i++ ){
    let random = Math.floor(Math.random() *1000+1000);
    skill [i] = random
    console.log("Este golpe fue de "+random);
    dañofinal += skill[i];

}

console.log(`Total de daño causado:  ${dañofinal}`)