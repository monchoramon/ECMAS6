
/*let primerNombre    = "primerNombre";    
let primerApellido  = "primerApellido";  
let segundoApellido = "segundoApellido";*/

let primerNombre    = Symbol("primer nombre");  
let primerApellido  = Symbol("primer apellido");  
let segundoApellido = Symbol("segundo apellido");

let personaNombre = {};

personaNombre[primerNombre] = "Ramón";

let personaApellidos = {
	[primerApellido]: "Martínez"
};

personaApellidos[segundoApellido] = "Cruz";

console.log( personaNombre);
console.log( personaNombre[primerNombre]);

console.log( personaApellidos );
console.log ( 
			  	personaApellidos[primerApellido], 
	          	personaApellidos[segundoApellido] 
	        );

console.log( "Soy "+toString(primerNombre) );

console.log( "primer nombre" in personaNombre );