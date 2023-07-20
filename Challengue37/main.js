const numeroaleatorio = Math.floor(Math.random() * 10) + 1;
const num1 = numeroaleatorio;
console.log(num1)

const boton = (num1)=>{
  const valor = document.getElementById("input1");
  const nummagico = valor.value;
  console.log(numeroaleatorio)

if (isNaN(nummagico)){
    alert("Por favor ingrese un numero.")
  }
  else if(nummagico==numeroaleatorio){
    alert("Acertaste!")
  }
  else if(nummagico>numeroaleatorio){
    alert("El numero que ingresaste es mayor al numero magico")
  }
  else if(nummagico<numeroaleatorio){
    alert("El numero que ingresaste es menor al numero magico")
  }
  };


