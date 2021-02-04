const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar');
const base = 4;

console.clear();
crearArchivo(base)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

crearArchivoAsync(10)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));