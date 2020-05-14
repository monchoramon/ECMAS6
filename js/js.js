/*
Mapas, es un nuevo tipo de colección de datos, que por mucho tiempo
fue necesario en JS.
*/

//Ej. 
/*
	Llave ------------> Valor
	nombre				Ramón
	edad                26

	Los mapas al igual que los Strong SET tienen:
	1. has() //verifica si el key pasado esta definido.
	2. delete() //eliminar un mapa por medio del key pasado.
	3. clear() //borra todo los mapas, pasando como parametro el mapa que se quiera borrar.
	4. size()
	5. iteraciones
*/

var mapa = new Map();

mapa.set("nombre", "Ramón");
mapa.set("edad", 26);
mapa.set("apellido");
mapa.set({saludo1:'Hola 1'},{saludo2:'Hola 2'});

console.log( mapa );
console.log( mapa.size );

console.log( mapa.get("nombre") );
console.log( mapa.get("edad") );
console.log( mapa.has("nombre") );
console.log( mapa.has("apellido") );

mapa.delete("nombre");
console.log( mapa.get("nombre") );
console.log( mapa.has("nombre") );

mapa.set("edad");
console.log( mapa );

//Inicializaciones de los mapas

var mapa = new Map( [ ["nombre","Ramón"], [undefined, function(fecha){ console.log(`${fecha}`); }(new Date())] ] );
console.log( mapa );
console.log( mapa.get(undefined) );

var mapa = new Map([ ["nombre","Ramón Martínez"], ["edad", 26] ]);
mapa.forEach( 
	valor => 
	console.log(`${valor}`)
)

var persona = new Map( [ ["nombre","Ramón"], ["edad",26] ] );
for (let per of persona) {
	for (let p of per) {
		console.log( p );
	}
}