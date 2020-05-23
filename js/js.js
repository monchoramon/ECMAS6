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

class Figura{
	
 constructor(lado){
     this.lado = lado;
 }
 
  obtenerVentana(){
   return super();
  }

}
 
let figura = new Figura();
 
console.log( figura.obtenerVentana() );