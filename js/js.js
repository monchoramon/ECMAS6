let persona1 = {
    nombre: 'Ramón',
    edad: 100
};

/*
	En JS todos los objetos son pasados por referencia, lo que hace
	que el cambio de los objetos no sea una asignación por valor, si no
	que hace una asignacíón en memoria donde se encuentra el obejeto,
	por lo tanto el valor se cambia implicitamente no importa que objeto
	se utilice, siempre los cambios se haran con los mismos datos 
	a los objetos.
*/

//Encerrando entre llaves y utilizando el operador spread, 
//podemos copiar todas las propiedades del cualquier objeto
//rompera la relación entre objetos, serán independientes.

let persona2 = persona1;
persona2.edad = 120;

let persona3 = { ...persona1 }
persona3.nombre = 'Daniel';
persona3.edad   = 130;

console.log(persona1, persona2, persona3);