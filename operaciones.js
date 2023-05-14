//Importar FileSystem
const fs = require("fs");
//funcion para registar en el citas.json
function registrar(nombre, edad, animal, color, enfermedad) {
  const citas = JSON.parse(fs.readFileSync("./citas.json", "utf8"));
  citas.push({
    nombre: nombre,
    edad: edad,
    animal: animal,
    color: color,
    enfermedad: enfermedad,
  });
  fs.writeFileSync("./citas.json", JSON.stringify(citas));
}
//Leer archivos con el módulo File System
function leer() {
  const citas = JSON.parse(fs.readFileSync("./citas.json", "utf8"));
  console.log(citas);
}
//Exportar módulos en Node Js
module.exports = {
  registrar,
  leer,
};
