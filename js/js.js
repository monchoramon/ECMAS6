/*
Objetos literales en ES6, este tipo de estructura es el más utilizados
en JS, (JSON se construyó por medio de esta sintaxis)
*/

function crearPersona(nombre, apellidos, edad) {
    return {
        nombre,
        apellidos,
        edad
    }
}

var ramon = crearPersona("Daniel", "Gomez", 26);
console.log(ramon);

//Métodos Concisos, en ES6 ya no es necesario poner la palabra resevada function cuando se
//crea un metodo o función, solo basta con poner el nombre de la función.

var persona = {
    nombre: "Juan Perez",
    getNombre() {
        console.log(this.nombre);
    }
}

persona.getNombre();


//Nombre de propiedades computadas o procesadas, las propiedades computadas
//pueden tener funciones sin ningún problema [funcion()]

var persona = {};
var apellidos = "apellidos";

persona["primer nombre"] = "Ramón";
persona[apellidos] = "Martínez Cruz";
persona.edad = 26;

console.log(persona["primer nombre"]);
console.log(persona[apellidos]);
console.log(persona);

var persona = {
    nombre: "Wendy"
};

console.log(persona);

//ES6 
var apellido = "primer apellido";
var persona = {
    "primer nombre": "Diego",
    [apellido]: "Gonzales"
};

console.log(persona["primer nombre"]);
console.log(persona[apellido]);

//Ejemplo con subfijo

var subFijo = "nombre";
var persona = {
    ["primer " + subFijo]: "Juan",
    ["segundo " + subFijo]: "Maria"
};

console.log( persona );

//Nuevos metodos:Object.is()

console.log(+0==-0);
console.log(+0===-0);
console.log( Object.is(+0, -0) );

console.log("===");

console.log(NaN==NaN);
console.log(NaN===NaN);
console.log(Object.is(NaN,NaN));

console.log("===");

console.log(5==5);
console.log(5=="5");

console.log("===");

console.log(5===5);
console.log(5==="5");

console.log("==== 5 contra 5 ====");

console.log(Object.is(5, 5));
console.log(Object.is(5, "5"));

//Nuevo método:Object.assign();

var objReceptor = {};
var objDonador  = {
	// nombre:"mi-archivo.js",
	// directorio:"C://mis_archivos"
	get nombre() {
		return "mi-archivo.js";
	}
}

function mezclar (objReceptor, objDonador) {
	Object.keys(objDonador).forEach( (key) => {
		objReceptor[key] = objDonador[key];
	});
	console.log( Object.keys(objDonador) );
	return objReceptor;
}

console.log( objReceptor, objDonador );

//ES5
console.log( mezclar( objReceptor, objDonador ) );
//ES6
console.log( Object.assign( objReceptor, objDonador ) );

//Orden de enumeración de las propiedades de los objetos
/*
	1. Todas las llaves van en orden ascendente.
	2. Todas las llaves tipo string, van ordenadas en la manera que fueron
	   agregadas al objeto.
	3. Todos los símbolos en el orden que fueron agregados al objeto. 
*/

var objeto = {
	c:1,
	0:1,
	x:1,
	15:1,
	r:1,
	3:1,
	b:1
}

objeto.d    = 1;
objeto["2"] = 1;
objeto["a"] = 1;
objeto["z"]   = 1;

console.log( Object.getOwnPropertyNames( objeto ).join(",") );
console.log( Object.keys(objeto) );
console.log( JSON.stringify(objeto) );

var totalPropiedadesObjeto = Object.keys(objeto);

for (i in totalPropiedadesObjeto ){
	console.log(totalPropiedadesObjeto[i]);
}