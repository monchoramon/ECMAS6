//por separado
function operadorRest(saludo, ...personas) {
    for (i in personas) {
        console.log(`${saludo} ${personas[i]}`);
    }
}

//Propagacion
function operadorSpread(saludo, ...personas) {
    console.log(`${saludo} ${personas}`);
}

operadorRest('Hola', 'Marcos', 'Daniel', 'Juan');

let personas      = ['daniel', 'sandra', 'gonzalo', 'maria'];
let otrasPersonas = [...personas, 'ramon', 'juan'];
operadorSpread('Que tal!!', otrasPersonas);