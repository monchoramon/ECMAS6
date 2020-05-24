
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

	const getSalario = (empleado) => {

		return new Promise( (resolve, reject) => {

 				let salario  = salarios.find( salarios => salarios.id  == empleado.id );

				if ( !salario ) {	
					reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
				} else {
					let allDatasEmployed = {
						nombre:  empleado.nombre,
						salario: salario.salario,
						id: salario.id
					}
					resolve(allDatasEmployed);
				}

		});

	}

	const getEmpleado = (id) => {

		return new Promise( (resolve, reject) => {

			const empleadoBD = empleados.find( empleados => empleados.id == id );

			if ( !empleadoBD ) {
				reject(`El empleado con el ID ${id}, no existe`);
			} else {
				resolve(empleadoBD);
			}

		});	

	};

	getEmpleado(1)
		.then( getSalario )
		.then( console.log )
	.catch( error => {
		console.log( error );
	});
	
	/*getEmpleado(3).then( empleado => {
		
		getSalario(empleado).then( resp => {
			console.log( resp );
		}).catch( error => {
			console.log( error);
		});

	}).catch( error => {
		console.log( error);
	});*/

