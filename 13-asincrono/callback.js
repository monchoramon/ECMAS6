

const getUsuarioById = ( id, callback ) => {

	"use strict";

	const usuario = {
		nombre:"Ramón",
		id:14
	};

	callback( null, usuario );

};

getUsuarioById(1, (err, user) => {
	console.log("Usuario de base de datos", user);
});