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

//Por qué usar la sintaxis de clases?

/* 
	1. Las clases funcionan muy parecido a la declaración LET (Estan ahí hasta que la ejecución alcanza la declaración)
	2. Todo el código dentro de la clase, funciona en modo stricto "strict mode"
	3. Todos los métodos no son enumerables.
	4. Todos los métodos internos, no tienen un constructor.
	5. Lllamar una clase sin el "new" dará un error.
	6. Intentar renombrar el nombre de la clase dentro de algún método de la misma dará un error.
	7. Las clases tienen métodos estaticos y privados.
*/ 