//sin conectores logicos

let vida = parseInt(prompt("Cuanta vida tiene ?"));

while(vida>=0 && vida<=20){
    console.log("HUYA !");
    break
}
while(vida>=21 && vida<=50){
    console.log("MODO DEFENSIVO !");
    break
}
while(vida>=51 && vida<=80){
   console.log("Modo moderado...");
    break
}
while(vida>=81 && vida<=100){
    console.log("MODO OFENSIVO !");
    break
}

//con conectores logicos

let vida2 = parseInt(prompt("Cuanta vida tiene ?"));

if(vida2>=0 && vida2<=20){
    console.log("HUYA !");
}
else if(vida2>=21 && vida2<=50){
    console.log("MODO DEFENSIVO !");
}
else if(vida2>=51 && vida2<=80){
    console.log("Modo moderado...");
}
else if(vida2>=81 && vida2<=100){
    console.log("MODO OFENSIVO !");
}