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

var gato = {
	sonido() {
		console.log("miau!");
	},
	chillido() {
		console.log("MIAU!!");
	}
}

var perro = {
	sonido(){
		console.log("guau!");
	}
}

let angora = Object.create( gato );
console.log( Object.getPrototypeOf( angora ) == gato );

angora.sonido();
angora.chillido();

Object.setPrototypeOf( angora, perro );

console.log( Object.getPrototypeOf( angora ) == gato );

angora.sonido();
angora.chillido();
