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

console.log( Persona.prototype );

var persona = new Persona("Ramon");
persona.decirNombre();
persona.gritarNombre();