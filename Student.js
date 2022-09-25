const Person = require("./Person");

module.exports = class Alumno extends Person{
    constructor(matricula, Carrera, Cuatrimestre,Turno){
        super();
        this.matricula= matricula;
        this.Carrera= Carrera;
        this.Cuatrimestre = Cuatrimestre;
        this.Turno= Turno;
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

 
