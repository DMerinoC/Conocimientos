class Celular{
    constructor(color,peso,resolucionPantalla,camara,ram){
        this.color=color;
        this.peso=peso;
        this.resolucionPantalla=resolucionPantalla;
        this.camara=camara;
        this.ram=ram;
        this.estado=false
    }
    prender(){
        if(this.estado==false){
            this.estado=true;
        }
    }
    apagar(){
        if(this.estado==true){
            this.estado=false;
        }
    }
    reiniciar(){

    }
    grabar(){

    }
    tomarFotos(){

    }

}

const celular1=new Celular("rojo",1.87,15,"triple",16);
const celular2=new Celular("amarillo",1.90,17,"doble,12");
const celular3=new Celular("azul",1.77,13,"mono",11);

