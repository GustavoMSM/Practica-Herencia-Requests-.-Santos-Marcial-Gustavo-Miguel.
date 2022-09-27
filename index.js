const express = require('express');
const app = express();
const port = 3000;
const Person = require("./Person.js");
const Alumno = require("./Student.js");
const currentFile = '${currentDir}Student.js';

app.get('/', (req, res) => {
  let Alumno = new Alumno(
    "Hector",
    "Alberto", 
    "Mariscal", 
    25, 
    "MRI52306", 
    "Ing.en desarrollo de software",
    "Septimo",
    "SemiPresencial",
    5);
  Alumno.x();
  res.json(Alumno);

});

app.get('/', (req, res) => {
  let Alumno = new Alumno(
    "Kevin",
    "Lopez", 
    "Madrigal", 
    21, 
    "LKC01423", 
    "Licenciatura en aduanas y logistica",
    "Segundo",
    "Presencial",
    5);
  Alumno.x();
  res.json(Alumno);
  
});

app.get('/', (req, res) => {
  let Alumno = new Alumno(
    "Eva",
    "Torres", 
    "Dolores", 
    19, 
    "ASD41235", 
    "Licenciatura en administración de empresas",
    "Primero",
    "Online",
    5);
  Alumno.x();
  res.json(Alumno);
  
});

app.get('/', (req, res) => {
  let Alumno = new Alumno(
    "Cristiano",
    "Marin", 
    "Robles", 
    26, 
    "SDF42268", 
    "Ing.en desarrollo de software",
    "Cuarto",
    "SemiPresencial",
    5);
  Alumno.x();
  res.json(Alumno);
  
});

app.get('/', (req, res) => {
  let Alumno = new Alumno(
    "Maria",
    "Gonzalez", 
    "Cruz", 
    20, 
    "BVC58542", 
    "Ing.en multimedia",
    "Tercero",
    "Presencial",
    5);
  Alumno.x();
  res.json(Alumno);
  
});
app.get('/api/v1/Student/:matricula', function(req, res) {
  const matricula = req.params.id;
  const rawData = fs.readFileSync(currentFile);
  const jsonFile = JSON.parse(rawData);
  const response = jsonFile.find(u => u.matricula === + matricula);
  res.json({data: response});
});

app.get('/api/v1/search', function(req, res) {
  const matricula = req.query.id;
  const materias = req.query.materias;
  const rawData = fs.readFileSync(currentFile);
  const jsonFile = JSON.parse(rawData);
  const response = jsonFile.filter(u =>{
      if(+u.matricula === +matricula) return true;
  });
  res.json({data: response});
});

app.post('./Student', function(req, res) {
  const currentData = data;
  const response = {error:false, msg:"La cuenta se creo con exito",data: null};
  if(req.body.Name && req.body.ApellidoP && req.body.ApellidoM && req.body.age && req.body.Carrera && req.body.Cuatrimestre && req.body.Turno && req.body.Materias){
      const dataSave = {
      matricula: req.body.Matricula,
      Name: req.body.Nombre,
      ApellidoP: req.body.ApellidoP,
      ApellidoM: req.body.ApellidoM,
      age: req.body.age,
      Carrera: req.body.Carrera,
      Cuatrimestre: req.body.Cuatrimestre,
      Turno: req.body.Turno,
      Materias: req.body.Materias
  };
  currentData.push(dataSave);
  fs.writeFile("./Students.json/",JSON.stringify(currentData),(err ) =>{
  response.error = ture;
  response.msg = "Server error";
  });
  response.data = dataSave;
  }else{
      response.error = true;
      response.msg = "Invalid data";
  }
  ResizeObserver.json(Response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
