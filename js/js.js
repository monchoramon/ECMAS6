//Introduccion a las clases en JS

function Persona ( nombre ) {
	this.nombre = nombre;

	this.gritarNombre = function() {
		console.log( this.nombre.toUpperCase() );
	}
}

Persona.prototype.decirNombre = function() {
	console.log( this.nombre );
}

var persona = Persona("Ramon");
//persona.decirNombre();
//persona.gritarNombre();

console.log( persona instanceof Persona  );
