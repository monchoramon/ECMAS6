
	const empleados = [
		{
			id:1,
			nombre:"Ramón"
		},
		{
			id:2,
			nombre:"Nayeli"
		},
		{
			id:3,
			nombre:"Adrian"
		}
	];

	const salarios = [
		{
			id:1,
			salario:40000
		},
		{
			id:2,
			salario:4500
		},
	];

	const getEmpleado = (id, callback) => {

		let empleadoBD = empleados.find( empleados => empleados.id == id );

		if ( !empleadoBD ) {
			callback(`El empleado con el ID ${id}, no existe`);
		} else {
			callback(null, empleadoBD);
		}

	}

	const getSalario = (id, nombre, callback) => {

		let salario  = salarios.find( salarios => salarios.id  == id );

		if ( !salario ) {	
			callback(`No se encontró un salario para el empleado ${nombre}`);
		} else {
			callback(null, salario);
		}

	}

	getEmpleado(3, (error, usuario) => {

		if ( error ) {
			return console.log( error );
		}

			getSalario(usuario.id, usuario.nombre, (error, salario) => {

				if ( error ) {
					return console.log( error );
				}

				let datosCompletosUsuario = {
					nombre:  usuario.nombre,
					salario: salario.salario,
					id: salario.id
				}

					console.log( `El salario de ${datosCompletosUsuario.nombre} es de $${datosCompletosUsuario.salario}` );

			});	

	});
