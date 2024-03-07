//MATH
let numeroCua = 100;
let numeroCub = 729;
let resultado = Math.sqrt(numeroCua);
document.write(resultado);
document.write("<br>");
let resultado2 = Math.cbrt(numeroCub);
document.write(resultado2); //raiz cubica
document.write("<br>");
let resultado3 = Math.max(20, 5, 12, 244, 12);
document.write(resultado3);
document.write("<br>");
let resultado4 = Math.min(20, 5, 12, 244, 12);
document.write(resultado4);
document.write("<br>");
//--------------------------------------------------------------------
document.write("<br>");
//--------------------------------------------------------------------
//RANDOM
//round()   DEVUELVE EL ENTERO MÁS CERCANO
//floor()   DEVUELVE EL ENTERO A LA BAJA
//fround()  REDONDEA UN NUMERO FLOTANTE, SUS DECIMALES
var auxRand = [];
while (auxRand.length < 10) {
  let numRand = Math.floor(Math.random() * 10);
  if (!auxRand.includes(numRand)) {
    auxRand.push(numRand);
  }
}
console.log(auxRand);
//--------------------------------------------------------------------
document.write("<br>");
//--------------------------------------------------------------------
//sqrt1_2   RAIZ CUADRADA DE 1/2=UN NUMERO
//sqrt1_2   RAIZ CUADRADA DE 2=1.414
//CONTANTE DE EULER   Math.e
//Math.LN2  logaritmo natural de 2
//Math.LN10 logaritmo natural de 10
//Math.Log2e logaritmo de e en base 2
//Math.Log10e logaritmo de e en base 10
document.write(Math.LOG10E)