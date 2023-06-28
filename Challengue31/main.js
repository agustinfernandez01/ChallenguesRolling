class pelicula {
    constructor(genero,año,titulo,sinopsis){
        this.genero = genero
        this.año = año
        this.titulo = titulo
        this.sinopsis = sinopsis
    }
    mostrar(){
        console.log(`Datos de la pelicula: \n - Año: ${this.año} \n - Genero: ${this.genero} \n - Titulo: ${this.titulo} \n - Sinopsis: ${this.sinopsis}`)  
    }   
}

let pelicula1 = new pelicula("Terror","1992","El Conjuro","Muñeca endemoniada");
let pelicula2 = new pelicula("Accion","2005","RyF","Autos , destruccion y mas");
let pelicula3 = new pelicula("Aventura","2016","Batman","El heroe de la noche");
let pelicula4 = new pelicula("Comedia","2023","Son como niños","Padres irresponsables");

let peliculas = [pelicula1.mostrar(),pelicula2.mostrar(),pelicula3.mostrar(),pelicula4.mostrar()]

console.log(peliculas)