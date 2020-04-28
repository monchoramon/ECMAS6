let persona1 = {
    nombre: 'David',
    edad: 33
};

let persona2 = {
    nombre: 'Ramón',
    edad: 100,
    conduce: true,
    tiene_vehiculo: true,
    vegetariano: false,
    casado: true
};

persona1 = {
    //padamos todo lo que tiene el objeto, persona2
    ...persona2,
    //conservando lo que tiene el objeto, persona1
    ...persona1
};


console.log(persona1, persona2);