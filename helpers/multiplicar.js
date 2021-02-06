const fs = require('fs');
var colors = require('colors');


const crearArchivo = (base = 5, listar = true, hasta = 10) => new Promise((resolve, reject) => {

    let salida = '';
    let consola = '';
    for (let i = 0; i < hasta; i++) {
        consola += `${base.toString().yellow} ${'x'.green} ${i + 1} ${'='.green} ${(base * (i + 1)).toString().red}\n`;
        salida += `${base} x ${i + 1} = ${base * (i + 1)}\n`;
    }

    if (listar) {
        console.clear();
        console.log('==================='.yellow);
        console.log(`=   TABLA DEL:`.green, base);
        console.log('==================='.yellow);
        console.log(consola);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt creada`);
});

const crearArchivoAsync = async (base = 5) => {
    console.clear();
    console.log('===================');
    console.log(`=   TABLA DEL:`, base);
    console.log('===================');

    let salida = '';
    for (let i = 0; i < 10; i++) {
        salida += `${base} x ${i + 1} = ${base * (i + 1)}\n`;
    }
    console.log(salida);
    try {
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada`;
    } catch (err) {
        throw err;
    }
};


module.exports = {
    crearArchivo,
    crearArchivoAsync
}