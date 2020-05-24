
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

	const getSalario = async(empleado) => {
		
		let salario  = salarios.find( salarios => salarios.id  == empleado.id );

		if ( !salario ) {	
			throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
		} else {
			let allDatasEmployed = {
				nombre:  empleado.nombre,
				salario: salario.salario,
				id: salario.id
			}
			return allDatasEmployed;
		}

	}

	const getEmpleado = async(id) => {

		const empleadoBD = empleados.find( empleados => empleados.id == id );

		if ( !empleadoBD ) {
			throw new Error(`No existe un empleado con el ID ${ id }`);
		} else {
			return empleadoBD;
		}

	};


const getInformacion = async(id) => {

	const empleado  = await getEmpleado(id);
	const respuesta = await getSalario( empleado );

	return `${ empleado.nombre } tiene un salario de ${respuesta.salario}`

}

getInformacion(1).then( mensaje => {
	console.log( mensaje );
});