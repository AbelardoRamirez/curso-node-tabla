const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar');
//const base = 4;

console.clear();

console.log(process.argv);

/**
 * No se podra manejar de muchas maneras la base es decir
 * node app --limit=20 --base=5, siempre tomaria el tercer argumento...
 */

const [, , arg3 = 5] = process.argv;
const [,base] = arg3.split('=');
console.log(base);

crearArchivo(base)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

// crearArchivoAsync(10)
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));