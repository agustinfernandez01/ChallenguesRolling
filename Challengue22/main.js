//Realizar una calculadora simple que incluya suma, resta, multiplicación y división.

var dentro = true;
let num1 ;
let num2 ;

while(dentro==true){
    var operacion = parseInt(prompt("Que operacion desea realizar ? 1-suma 2-resta 3-multiplicacion 4-division 5-salir"));

    if(isNaN(operacion)){
        alert("Error, ingrese una operacion valida.")
    }
    else{
        if(operacion<1 && operacion>5){
            alert("Ingrese una operacion valida!")
        }
        else{
            switch(operacion){
                case 1:
                    num1 = parseInt(prompt("Ingrese el primer numero"));
                    num2 = parseInt(prompt("Ingrese el segundo numero"));
                    alert("Calculando...")
                    alert("El resultado es: "+(num1 + num2));
                    break
                case 2:
                    num1 = parseInt(prompt("Ingrese el primer numero"));
                    num2 = parseInt(prompt("Ingrese el segundo numero"));
                    alert("Calculando...")
                    alert("El resultado es: "+(num1 - num2));
                    break
                case 3:
                    num1 = parseInt(prompt("Ingrese el primer numero"));
                    num2 = parseInt(prompt("Ingrese el segundo numero"));
                    alert("Calculando...")
                    alert("El resultado es: "+(num1 * num2));
                    break
                case 4:
                    num1 = parseInt(prompt("Ingrese el primer numero"));
                    num2 = parseInt(prompt("Ingrese el segundo numero"));
                    alert("Calculando...")
                    alert("El resultado es: "+(num1 / num2));
                    break
                case 5:
                    alert("saliendo de calculadora...")
                    dentro = false;
                    break
            }
        }
    }
}