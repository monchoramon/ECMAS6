//Los prototipos 
/*
	La POO (programación orinetada a objetos) de JS se encontraba basada en 
	prototipos y no en clases. (ES6 introduce clases) 
*/
//Los prototipos son un conjunto de normas para integrar 
//Programación Orientada a Objetos en JS. Pero con los prototipos, nosotros somos
//capaces de realizar tareas como:
/*
	> Herencia
	> Encapsulamiento
	> Abstracción
	> Polimorfismo
*/

//Cambiar el prototipo de un objeto
var gato = {
	sonido() {
		console.log("miau!");
	},
	chillido() {
		console.log("MIAU!!");
	},
	ronroneo(){
		console.log("rrrrrrrrrrrrrrr");
	}
}

var perro = {
	sonido(){
		console.log("guau!");
	},
	chillido(){
		console.log("auuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu!!!");
	}
}

//Herencia con la cadena de prototipos, 
let angora = Object.create( gato );
console.log( Object.getPrototypeOf( angora ) == gato );

angora.sonido();
angora.chillido();
angora.ronroneo();

console.log( "***Gato" );

Object.setPrototypeOf( angora, perro );

console.log( "***Perro" );

console.log( Object.getPrototypeOf( angora ) == gato );

angora.sonido();
angora.chillido();
//angora.ronroneo();

//Acceso al prototipo con la referencia "SUPER"

let persona = {
	saludar() {
		return "Hola";
	}
};

let amigo = {
	saludar(){
		//return Object.getPrototypeOf(this).saludar.call(this)+", saludos!!!";
		return super.saludar()+", saludos!!!";
	}
};

Object.setPrototypeOf( amigo, persona );

console.log( amigo.saludar() );

//Destrucuración de objetos

let ajustes = {
	nombre:"Ramón Martínez Cruz",
	email:"cruzcruzram@gmail.com",
	facebook:"ramamam",
	google:"ramamam123",
	premium:true,
	twitter:"ramamam321",
};

let {nombre, email, facebook, google, premium, twitter:cuentaTwit="ramamama", basketball=true} = ajustes;
console.log( nombre, ajustes );