//Funciones de Flecha ó Arrow Functions
var miFuncion2 = function(valor) {
	return valor;
}

let miFuncion1 = (valor) => valor;

console.log( miFuncion2('a') );
console.log( miFuncion1('b') );

var sumar2 = function(numeros) {
	var suma = 0;
	for (x in numeros) {
		suma += numeros[x];
	}
	return suma;
}

let numerosPrimero = [0];
let numeros = [...numerosPrimero,1,2,3,4,5,6,7,8,9];

console.log( sumar2(numeros) );