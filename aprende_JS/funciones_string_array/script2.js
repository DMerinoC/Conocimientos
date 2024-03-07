//metodos de cadenas
//--------------------------------------------------------------

//UNIR CADENAS
let cadena1 = "hola ";
let cadena2 = "perro";
let mostrar = cadena1.concat(cadena2);
document.write(mostrar);

//--------------------------------------------------------------
document.write("<br>");
document.write("<br>");
//--------------------------------------------------------------

//VER SI EMPIEZA O TERMINA UNA CADENA CON OTRA
let empiezo = "ojo con esta oracion, OJO";
let primeraIgual = "ojo";
let vof = empiezo.startsWith(primeraIgual);
let vof2 = empiezo.endsWith(primeraIgual);
document.write(vof);
document.write("<br>");
document.write(vof2); //ES FALSE PORQUE ESTÁ EN MAYÚSCULA, por lo cual no termina con la cade ojo
//LA RAZÓN PRINCIPAL DEBE SER PORQUE EL LENGUAJE ES case-sensitive, o sea, sensible a las mayúsculas y minúsculas

//--------------------------------------------------------------
document.write("<br>");
document.write("<br>");
//--------------------------------------------------------------

//VER SI UNA CADENA ESTÁ INCLUIDA EN OTRA

let busca = "estara en el medio de la oracion";
let indicador = "medio";
let indicador2 = "MEDIO";
let resultado = busca.includes(indicador);
let resultado2 = busca.includes(indicador2);
document.write(resultado);
document.write("<br>");
document.write(resultado2); //DE LA MISMA FORMA QUE EL ENDWITH, DA COMO RESULTADO FALSE PORQUE ES FALSE

//--------------------------------------------------------------
document.write("<br>");
document.write("<br>");
//--------------------------------------------------------------

//INDICE DEL CARACTER DE LA CADENA

let indice = "hola rinoceronte canguro";
let a = indice.indexOf("rinoceronte");
let a4 = indice.lastIndexOf("canguro");
document.write(a);
document.write("<br>");
document.write(a4);
//SI NO ESTÁ LA PALABRA DEVOLVERÁ -1

//--------------------------------------------------------------
document.write("<br>");
document.write("<br>");
//--------------------------------------------------------------

//AÑADIR SIGNOS O LO QUE GUSTES AL INICIO O FINAL + REPETIR

let oracion = new String("esta es una oracion para probar metodos de cadena");
let a5 = oracion.length;
document.write(a5);
document.write("<br>");
let probemos = oracion.padStart(50, "-");
let probemos2 = oracion.padEnd(50, "-");
let probemos3 = probemos2.repeat(2);
/*
SI AL TAMAÑO DE LA CADENA LE SUMAMOS 1 Y LE QUEREMOS AÑADIR 
ALGO AL INICIO, UN SIGNO O ALGO, PODEMOS UTILIZAR ESTE METODO.
*/
document.write(probemos);
document.write("<br>");
document.write(probemos2);
document.write("<br>");
document.write(probemos3);

//--------------------------------------------------------------
document.write("<br>");
document.write("<br>");
//--------------------------------------------------------------

//convertir una cadena en un arreglo

let convierto = "hola mi estimado";
let convertido = convierto.split(" ");
let ind = document.write(convertido); //muestra el arreglo
document.write("<br>");
document.write(convertido[0]); //muestra"hola"
//agarra lo que le des como parámetro y los utiliza como separador para el arreglo
document.write("<br>");
let convertido2 = convierto.split("mi"); //muestra el arreglo
document.write(convertido2);

//--------------------------------------------------------------
document.write("<br>");
document.write("<br>");
//--------------------------------------------------------------

//muestra de texto desde indices específicos
//convertir en mayúsculas y minúsculas

let investigar = "Conmigo tendras que ver";
let investiga = investigar.substring(0, 10); //muestra una parte del texto que le pidas
document.write(investiga);
document.write("<br>");

let investiga2 = investigar.toUpperCase();
let investiga3 = investigar.toLowerCase();
document.write(investiga2);
document.write("<br>");
document.write(investiga3);

//--------------------------------------------------------------
document.write("<br>");
document.write("<br>");
//--------------------------------------------------------------

//convertir un entero o float a STRING
//borrar espacios de una cadena

let numero = 59;
document.write(numero.toString()); //se convirtió a string
let borrarEsp = "     Elimina los espacios al inicio y final    ";
document.write("<br>");
document.write(borrarEsp.length);
let quitalo = borrarEsp.trim();
document.write("<br>");
document.write(quitalo.length);
//trimEnd y trimStart son lo mismo que starWith y endWith solo que cada uno con su respectiva definicion

//--------------------------------------------------------------
document.write("<br>");
document.write("<br>");
//--------------------------------------------------------------

//ARREGLOS      pop     shift       push        reverse     unshift     sort        splice

let arregloModificado = ["Diego", "edad", "año", "lenguaje"];
arregloModificado.pop(); //ELIMINÓ EL ÚLTIMO
arregloModificado.shift(); //ELIMINÓ EL PRIMERO
document.write(arregloModificado);
arregloModificado.push("continuidad");
document.write("<br>");
document.write(arregloModificado);
document.write("<br>");
document.write(arregloModificado.reverse()); //invierte el orden del arreglo
document.write("<br>");
arregloModificado.unshift("caracter");
document.write(arregloModificado);
arregloModificado.sort();
document.write("<br>");
document.write(arregloModificado);
document.write("<br>");

//metodo para eliminar y agregar elementos específicos
let arregloSplice = ["Diego", "edad", "año", "lenguaje"];
document.write(arregloSplice.splice(0, 2, "COSA")); //SPLICE(DONDE QUIERES EMPEZAR,CANTIDAD QUE QUIERES ELIMINAR DESDE DONDE INDICASTE,ELEMENTOS QUE QUIERAS AGREGAR)
document.write("<br>");
document.write(arregloSplice);

//--------------------------------------------------------------
document.write("<br>");
document.write("<br>");
//--------------------------------------------------------------

//metodo accesores              join        slice

let arregloN = ["sable", "katana", "rifle", "piedra"];
let variacion = arregloN.join("<br>Arma utilizada en la guerra: "); //lo convierte a una cadena de texto pero puede agregar texto como parámetro
document.write("Arma utilizada en la guerra: " + variacion);
document.write("<br>");
let arregloN1 = ["sable", "katana", "rifle", "piedra"];
let variacion1 = arregloN1.slice(0, arregloN1.length - 1); //te lanzará como resultado los elementos de la posicion que indicaste hasta la otra posicion
document.write(variacion1);

//--------------------------------------------------------------
document.write("<br>");
document.write("<br>");
//--------------------------------------------------------------

//METODOS PARA ARREGLOS

let personas = [
  { nombre: "Diego", hobby: "estudiar", salario: 4000 },
  { nombre: "Tania", hobby: "investigar", salario: 1100 },
  { nombre: "Jinx", hobby: "armar", salario: 5000 },
  { nombre: "Euler", hobby: "estudiar", salario: 1500 },
  { nombre: "Cantinflas", hobby: "payaso", salario: 3500 },
];

//FOREACH       NO RETORNA NADA

// let show=personas.forEach(function(persona,index){
//     document.write("<br>"+persona.nombre,index)
// })
let show = personas.forEach((persona, index) => {
  document.write("<br>" + persona.nombre, index);
});

//MAP       nos retorna otro arreglo

document.write("<br>");
let nuevoArreglo = personas.map(function (persona) {
  return "Hola " + persona.nombre;
});
document.write(nuevoArreglo);

//FILTER        filtrar personas que estudien

document.write("<br>");

let filtro = personas.filter(function (personas) {
  return personas.hobby === "estudiar";
});
console.log(filtro);

//FIND      encontrar al primero

document.write("<br>");

let x=personas.find(function(persona){
    return persona.hobby=="estudiar"
})
console.log(x)