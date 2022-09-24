const Person = require("./Person");

module.exports = class Alumno extends Person{
    constructor(matricula, ApellidoP, ApellidoM,Carrera, Cuatrimestre,Turno){
        this.matricula= matricula;
        this.Carrera= Carrera;
        this.Cuatrimestre = Cuatrimestre;
        this.Turno= Turno;
    }

    super(){

    }

    getmatricula(){
        return this.matricula;
    }
    

    getCarrera(){
        return this.Carrera;
    }

    getCuatrimestre(){
        return this.Cuatrimestre;

    }
    
    getTurno(){
        return this.Turno;
    }

  
        
    }

 