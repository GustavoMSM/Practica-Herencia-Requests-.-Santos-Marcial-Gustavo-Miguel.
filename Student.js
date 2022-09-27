const Person = require("./Person");

module.exports = class Alumno extends Person{
    constructor(matricula, Carrera, Cuatrimestre,Turno, materias){
        super();
        this.matricula= matricula;
        this.Carrera= Carrera;
        this.Cuatrimestre = Cuatrimestre;
        this.Turno= Turno;
        this.materias = materias;

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

    getmaterias(){
        return this.materias;
    }
  
 
    }
