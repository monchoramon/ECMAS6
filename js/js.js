//Funciones de Flecha ó Arrow Functions
var miFuncion2 = function(valor) {
    console.log(valor);
}(400);

let miFuncion1 = (valor) => valor;

console.log(miFuncion1('b'));

var sumar2 = function(numeros) {
    var suma = 0;
    for (x in numeros) {
        suma += numeros[x];
    }
    return suma;
}

let numerosPrimero = [0];
let numeros = [...numerosPrimero, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(sumar2(numeros));

//Retornando y/o manejo de objeto

var objeto1 = function(id, nombre) {
    return {
        id: id,
        nombre: nombre
    }
}

var objeto2 = (id, nombre) => ({
    id: id,
    nombre: nombre
});


console.log(objeto1(1, 'Ramón Martínez Cruz'));
console.log(objeto2(2, 'Daniel Gomez'));

//Funciones anonimas, son ejecutadas en el momento de que son creadas

var saludo1 = function(nombre) {
    return "Hola " + nombre;
}('Ramón');
console.log(saludo1);

let saludo2 = ((nombre) => `Hola ${nombre}`)('Juan Daniel');
console.log(saludo2);

//ES5

var manejador1 = {
    id: 123,

    init: function() {
        document.addEventListener("click", (function(event) {
            this.clickEnPagina(event.type);
            //console.log(this);
        }).bind(this), false /*ejecutar función cuando ocurra el evento*/ );
    }, // fin del init

    clickEnPagina: function(type) {
        alert("Manejando " + type + " para el id: " + this.id);
    }
}

console.log(manejador1);
manejador1.init();

/**********************************/

//ES6

var manejador2 = {
    id: 124,

    init: function() {
        document.addEventListener("click",
            (event) => this.clickEnPagina(event.type));
    }, // fin del init

    clickEnPagina: function(type) {
        alert("Manejando " + type + " para el id: " + this.id);
    }
}

manejador2.init();

//Test
var incrementos = ((valor_a_variable, valor_a_objeto) => {
	var a = valor_a_variable;

	var b = {
		a: valor_a_objeto,
    	b: /*
    		Incremento desde que se crea la variable, no espera hasta el final del objeto, 
    		si el incremento estuviera frgente a la variable a, se incrementaría hasta 
    		el final, cuando el objeto ya estuviera creado por completo.
    		*/
    	++a
	}

	console.log(a, b.a, ++b.b);

})(3,3);

//funciones de flechas y arreglos

var arreglo = [3,5,4,4,45,33,45,4,33];
var arregloOrdenadoES5 = arreglo.sort(function(a,b){
	return a-b;
});

let arregloOrdenadoES6 = arreglo.sort( (a,b) =>a-b );

console.log(arregloOrdenadoES5, arregloOrdenadoES6);

//Identificando funciones de tipo flecha y otros ejemplos

 var restar = (a,b) => a-b;
 console.log( typeof restar );
 console.log( restar instanceof Function );

 // var restarLlamada = new restar(1,2);

var ejemplo = function(x,y) {
 	( (a,b) => {
		console.log( arguments[0] );
 	})();
}(10,20);