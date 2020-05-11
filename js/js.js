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

//forEach en los sets

let personas = new Set(['Ramón', 'Perla', 'Maria', ['Daniel']]);

personas.forEach(function(valor, llave, setOriginal) {
    console.log(valor, llave, setOriginal);
    console.log( valor === llave );
})