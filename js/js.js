//sets Introducción
/*Son una lista ordenada de valores sin duplicidad
  Permiten un rápido acceso a la data que contienen.
*/

//Creando sets, agregando itemes 
//y buscando elementos.

let items = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7]);

console.log(items);
console.log(items.size);
console.log(items.has(1));

//Removimiendo valores.

items.delete(7);
console.log(items);
console.log(items.size);

items.delete(7);

items.clear();
console.log(items);

//Comparación Object.is( items );
//forEach en los sets

let personas = new Set(['Ramón', 'Perla', 'Maria', ['Daniel']]);

personas.forEach(function(valor, llave, setOriginal) {
    console.log(valor, llave, setOriginal);
    console.log(valor === llave);
    console.log( "Comparación ", Object.is( llave ) );
});

//Convertir un set en array

let numeros = ["0", 1, 2, 3, 4, 5, 6, 7, 8, 9,7,7,7,7,1,2,3,4,5];
console.log(eliminarDuplicados( numeros ));

//Eliminar duplicados

function eliminarDuplicados( array ){
	return [...new Set(array)];
}

console.log(new Set("Ramón"));

//weekset
/*
Trabajan de una manera similar a los Sets.
Características principales:
1. En un weekset, ADD(), HAS(), REMOVE(), dan
   un error si enviamos como parámetro algo que
   no sea un objeto.
2. No tiene manera de hacer repeticiones o ciclos for in.
3. Los weeksets no tienen keys(), values(), por lo que 
   no hay manera vía programaciónde saber cuantos elementos hay dentro.
4. No tienen un for-each tampoco.
5. No tienen propiedad size. 

*/
