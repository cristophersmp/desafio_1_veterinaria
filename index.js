//Importar y exportar módulos en Node Js
const { registrar, leer } = require("./operaciones.js");
//usamos el método slice(2) para eliminar los dos primeros argumentos que nos da process.argv
const args = process.argv.slice(2);

if (args[0] === "registrar") {
  registrar(args[1], args[2], args[3], args[4], args[5]);
} else if (args[0] === "leer") {
  leer();
} else {
  console.log("Operación inválida.");
}
