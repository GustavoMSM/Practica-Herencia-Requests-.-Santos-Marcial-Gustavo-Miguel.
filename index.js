const express = require('express');
const app = express();
const port = 3000;
const Person = require('./models/Person');
const Alumno = require('./models/Student');

app.get('/', (req, res) => {
  res.send('Hello World!');
  let Alumno = new Alumno("Hector","Alberto", "Mariscal", 19, "MRI5236", "Ing.Prueba","04IDFA","Vespertino");
  Alumno.x();
  res.json(Alumno);
});

app.post('/', (req, res) => {
    res.send('Hello post!');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})