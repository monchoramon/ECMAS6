//Promesas ES6
/*Problematica*/

function tareaAsincrona() {

	let promesa = new Promise( (resolve, reject) => {

		setTimeout(function(){
			console.log( "Proceso Asincrono terminado" );
			resolve();
		}, 3000)

	});

	return promesa;

}

tareaAsincrona().then( resolve() );

console.log("Código secuencial");

function resolve() {
	console.log("Todo OK!!!");
}

function reject() {
	console.error("Todo MAOL!!!");
}

