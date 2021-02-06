const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola',
    })
    .option('h', {
        alias: 'hasta',
        demandOption: false,
        type: 'number',
        default: 10,
        description: 'Mostrar la tabla de multiplicacion hasta X numero',
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'Base - tiene que ser numerico';
        }
        if (isNaN(argv.h)) {
            throw 'Hata - tiene que ser numerico';
        }
        return true;
    })
    .argv;

module.exports = argv;