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


//Nombre de propiedades computadas o procesadas

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