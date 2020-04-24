

function agregar_alumnos( array_alumnos, ...nuevosAlumnos ) {

	console.log(nuevosAlumnos);

	for (let i = 0; i < nuevosAlumnos.length; i++) {
		array_alumnos.push( nuevosAlumnos[i] );
	}

	return array_alumnos;

}


let array_alumnos = ['Ramón'];
let array_alumnos_seguimiento = agregar_alumnos(array_alumnos, 'Diana', 'Ruben', 'Juan');

console.log( array_alumnos_seguimiento );

//ewrewrwerewr
rterer