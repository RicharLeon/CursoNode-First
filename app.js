'use strict'

// importar objeto
const { createTable } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear(); // Esto es para limpiar la consola

//const id = 9;

/***
 * LLAMAR ARCHIVOS 
 */

/*
Aqui es la forma mas basica de traer datos 

console.log(process.argv); //Argumentos que vienne desde la consola
const [ , ,arg3 = 6 ] = process.argv; 
const [, id] = arg3.split('=');
console.log(id);
*/

// PAQUE    TE YARGS(PIRATA).. :: .. :: .. ::           

console.log(argv);

createTable(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg, "Archivo creado Correctamente"))
    .catch(err => console.log(err)); 
