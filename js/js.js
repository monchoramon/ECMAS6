/*
Objetos literales en ES6, este tipo de estructura es el más utilizados
en JS, (JSON se construyó por medio de esta sintaxis)
*/

function crearPersona( nombre, apellidos, edad){
	return {
		nombre,
		apellidos,
		edad
	}
}

var ramon = crearPersona("Ramón", "Martínez Cruz", 26);
console.log( ramon );