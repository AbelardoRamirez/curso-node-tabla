const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


crearArchivo(argv.l, argv.b)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));