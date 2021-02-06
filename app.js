const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));