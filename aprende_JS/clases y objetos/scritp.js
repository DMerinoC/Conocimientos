//para crear funciones se utiliza la palabra reservada "function"
// function saludo(){
//     rpta=prompt("Cómo estás?");
//     if(rpta=="bien"){
//         alert("que bueno");
//     }
//     else{
//         alert("que pena")
//     }
// }
// saludo();
//es una funcion sin más como en cualquier lenguaje de programación

//------------------------------------------------------------------------------------------------------

//funciones flecha
// const saludar=(nombre)=>{
//     document.write(`Hola ${nombre} puedes entrar`);
// }
// saludoDia=saludar("Diego");

//------------------------------------------------------------------------------------------------------

//PROGRAMCION ORIENTADA A OBJETOS POO

/*conceptos
1 clase
2 objeto
3 atributo
4 metodo
5 constructor
6 instanciacion
*/
class animal {
    // PROPIEDADES
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info=`soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color}`
  }
//   MÉTODOS
  verInfo(){
    document.write(this.info+"<br>")
  }
}

// HERENCIA
class perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza=raza;
    }
    ladrar(){
        alert("guau");
    }
    set setRaza(nuevoNombre){
        this.raza=nuevoNombre;
    }
    get getRaza(){
        return this.raza;
    }
}
class pajaro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza=raza;
    }
    canto(){
        alert("grrr");
    }
}
class rinoceronte extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza=raza;
    }
    cuerno(){
        alert("muerto");
    }
}

const perro1 = new perro("perro",15,"rojo","grandanes"); //instanciando
const pajaro1 = new pajaro("pajaro",5,"amarillo"); //instanciando
const rinoceronte1 = new rinoceronte("rinoceronte",30,"plomo"); //instanciando

//----------
console.log(perro1);
console.log(pajaro1);
console.log(rinoceronte1);
//----------

// document.write(perro1.color+"<br>")

// perro1.ladrar();
perro1.verInfo();
// pajaro1.canto();
pajaro1.verInfo();
// rinoceronte1.cuerno();
rinoceronte1.verInfo();
perro1.setRaza="carlongo"
document.write(perro1.getRaza);
/*
abstracion: caracteristicas específicas de un objeto
modularidad: descomponer un programa en partes más pequeñas en vez de tener todo el código gigante
encapsulamiento: que todos los datos sean privados
polimorfismo: que un objeto se comporte distinto que otros
*/