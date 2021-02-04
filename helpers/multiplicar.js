const fs = require('fs');

const crearArchivo = (base = 5) => new Promise((resolve, reject) => {
    console.clear();
    console.log('===================');
    console.log(`=   TABLA DEL:`, base);
    console.log('===================');

    let salida = '';
    for (let i = 0; i < 10; i++) {
        salida += `${base} x ${i + 1} = ${base * (i + 1)}\n`;
    }
    fs.writeFileSync(`tabla-${base}.txt`, salida);
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