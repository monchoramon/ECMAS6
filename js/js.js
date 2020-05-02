/*
Objetos literales en ES6, este tipo de estructura es el más utilizados
en JS, (JSON se construyó por medio de esta sintaxis)
*/

function crearPersona( nombre, apellidos, edad) {
	return {
		nombre,
		apellidos,
		edad
	}
}

var ramon = crearPersona("Ramón", "Martínez Cruz", 26);
console.log( ramon );

//Métodos Concisos, en ES6 ya no es necesario poner la palabra resevada function cuando se
//crea un metodo o función, solo basta con poner el nombre de la función.

var persona = {
	nombre: "Ramón",
	getNombre() {
		console.log(this.nombre);
	}
}

persona.getNombre();




