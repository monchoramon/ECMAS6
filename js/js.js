//Profundizando en las clases

//Los metodos computados son nombres los cuales se pueden 
//defini por medio de una variable.
let nombreMetodo = "gritarNombre";

class Persona {

	constructor(nombre){
		this.nombre = nombre;
	}

	decirNombre(){
		console.log( this.nombre );
	}


	[nombreMetodo]() {
		console.log(this.nombre.toUpperCase() );
	}

	static crear( nombre ) {
		return new Persona(nombre);
	}

}

let nombre = Persona.crear("Ramón");
console.log( nombre );


//Herencia de clases 

class Rectangulo {
	constructor(alto, largo) {
		this.alto  = alto;
		this.largo = largo;
	}

	getArea() {
		return (this.alto * this.largo);
	}

}

let rectangulo = new Rectangulo(4,5);

class Cuadrado extends Rectangulo {

	constructor(alto) {
		super( alto, alto );
	}

	getArea() {
	    return [
	    	{ "Cuadrado, area: ":   (this.alto * this.alto) },
	    	{ "Rectangulo, area: ": super.getArea() }
	    ]
	}

}

let cuadrado = new Cuadrado(3);

console.log( cuadrado.getArea() );
console.log( cuadrado instanceof Cuadrado );
console.log( cuadrado instanceof Rectangulo );


class Figura {
	
 constructor(lado) {
     this.lado = lado;
 }
 
  obtenerVentana(){
    //return super();
  }

}
 
let figura = new Figura();
//console.log( figura.obtenerVentana() );
