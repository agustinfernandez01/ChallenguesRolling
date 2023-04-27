//Un hospital quiere que le hagamos una aplicacion inteligente donde el paciente ponga sus datos, su dolencia y se determine que tipo de estudio debe realizarse.

let nombreyapellido = prompt("Ingrese su nombre y apellido : ");
let genero = prompt("Indique su genero : ").toLowerCase();
let dolencia = prompt("Indique su dolencia: ").toLowerCase();

if(genero == "masculino"){
if (genero == "masculino" && dolencia == "dolor abdominal"){
    alert(` ${nombreyapellido}, Usted debe realizarse una tomografia`);
}
else{
    alert("Tomate un paracetamol rey");
}
}

if(genero == "femenino"){
    let embarazada = prompt("Usted esta embarazada ? 1-Si 0-No")
if(genero == "femenino" && dolencia == "dolor abdominal" && embarazada == 0){
    alert("usted esta embarazada");
}
else if(genero == "femenino" && dolencia == "dolor abdominal" && embarazada == 1){
    alert(`${nombreyapellido} , Usted no debe realizarse una tomografia. Usted debe realizar otro tipo de tratamiento `);
}
}