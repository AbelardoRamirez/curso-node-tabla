const fs = require('fs');

const crearArchivo = (base = 5) => {
    console.clear();
    console.log('===================');
    console.log(`=   TABLA DEL:`, base);
    console.log('===================');

    let salida = '';
    for (let i = 0; i < 10; i++) {
        salida += `${base} x ${i + 1} = ${base * (i + 1)}\n`;
    }
    console.log(salida);
    //Aqui realiza un callBack   callBack(null,{...})
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt creada`);
}


module.exports = {
    crearArchivo
}