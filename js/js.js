//ECMAS 5
var numeros = [1, 5, 43, 133, 4234, 4557];
var valorMaximoNumeros = Math.max.apply( Math, numeros);
console.log(valorMaximoNumeros);

//ECMAS 6
var numeros = [1, 5, 43, 133, 4234, 4557];
var valorMaximoNumeros = Math.max(...numeros);
console.log(valorMaximoNumeros);	