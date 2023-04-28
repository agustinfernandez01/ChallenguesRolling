
let i = 1;
let cantoro = 0;
let cantvida = 0;

while(i<11){
    let numrandom = Math.floor(Math.random()*3)+1;
    console.log(`Abre el cofre numero ${i}`)
    if(numrandom == 1){
        console.log("Obtienes +10 de oro !");
        cantoro++;
    }
    else if(numrandom == 2){
        console.log("Obtiene +2 de vida");
        cantvida++;
    }
    else if(numrandom == 3){
        console.log("No obtienes nada")
    }
    console.log("");
i++    
}

console.log("Obtuvo "+ cantoro*10 + " de oro y "+ cantvida*2 +" posiones de vida");