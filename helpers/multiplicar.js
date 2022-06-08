
const fs = require('fs');
const colors = require('colors');

const createTable = async (id = 5, listar = false, hasta = 10) => {


    let salida = '';
    let salidaI = '';
    try {

        for (let i = 1; i <= hasta; i++) {
            salida += `${colors.green(id)} ${ colors.yellow('X') } ${colors.green(i)} ${colors.yellow('=')} ${colors.red(id * i)}\n`;
            salidaI += `${id} X ${i} = ${id * i}\n`;
        }

        // Mostrar por pantalla la impresion de la tabla
        if (listar) {
            console.log('==========================='.green)
            console.log(` >> la tabla del ${colors.bgGreen(id)} es <<`.yellow);
            console.log('==========================='.green)
            console.log(salida);
        }

        // Crear archivos Txt, desde node.js
        fs.writeFile(`./salida/tabla${id}.txt`, salidaI, (err) => {
            if (err) throw err;

            console.log(`tabla del ${id} creada`);
        })

        return ` La tabla del ${id} se creo correctamente `

    } catch (error) {
        throw error;
    }

}
/**
 * Exportar funcion
 */
module.exports = {
    createTable
}