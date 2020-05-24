

const getNombre = async() => {

	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			resolve("Ramón")
		}, 3000);
	});

}


const saludo = async() => {
	const nombre = await getNombre();
	return `Hola ${nombre}`;
}

saludo().then( saludo => {
	console.log( saludo );
});