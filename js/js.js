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
console.log( persona instanceof Object  );

//Declaración básica de una clase en ES6
class Persona2 {
	
	constructor( nombre ) {
		this.nombre = nombre;
	}	

	decirNombre() {
		console.log(this.nombre);
	}

}

var persona2 = new Persona2("Juan");
persona2.decirNombre();

console.log( persona2 instanceof Persona2  );
console.log( persona2 instanceof Object  );
console.log( typeof Persona2  );
console.log( typeof Persona2.prototype  );
