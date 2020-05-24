

const getUsuarioById = ( id, callback ) => {

	"use strict";

	const usuario = {
		nombre:"Ramón",
		id:14
	};

	if ( id == 20 ) {
		callback(`El usuario con el ID: ${id} no existe.`);
	} else {
		callback( null, usuario );
	}

};

getUsuarioById(20, (err, user) => {

	if ( err ) {
		return console.log(err);
	}

	console.log("Usuario de base de datos",
				 user);
	
});