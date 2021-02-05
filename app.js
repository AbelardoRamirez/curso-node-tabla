const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser numerico';
        }
        return true;
    })
    .argv;


crearArchivo(argv.l, argv.b)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

// crearArchivoAsync(10)
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));