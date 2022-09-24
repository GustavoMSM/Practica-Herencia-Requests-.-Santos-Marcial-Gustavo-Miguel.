module.exports = class Person  {
    constructor(name, ApellidoP, ApellidoM, age){
        this.name=name;
        this.ApellidoP = ApellidoP;
        this.ApellidoM = ApellidoM;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getApellidoP(){
        return this.ApellidoP;
    }

    getApellidoM(){
        return this.ApellidoM;
    }
    

    getAge(){
        return this.age;
    }
    calculateDayAlive(){
        return this.age * 365;
    }
}

function x() {

}