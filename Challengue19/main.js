// Realice un programa que dada la vida de un personaje, indique una acción: ∙ Si la vida es menor a 50, que cure nuestro personaje con una poción grande de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
// ∙ la poción de vida chica cura 25 y la grande 50.

let vida = parseInt(prompt("Cuanta vida tienes ?"))
let pocionchica = 25;
let pociongrande = 50;

if(vida < 75){
    alert("Curando con pocion chica...");
    alert("Salud al "+(pocionchica+vida)+" %");
}
else if(vida >= 75){
    alert(`Tu salud es del ${vida} %`);
}