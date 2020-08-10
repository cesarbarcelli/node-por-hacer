//const argv = require('yargs').argv;

const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

let abc = [];

switch (comando) {


    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        console.log(listado);
        for (let abc of listado) {
            console.log('==================='.green);
            console.log(abc.descripcion);
            console.log('Estado: ', abc.completado);
            console.log('==================='.green);
        }
        break;

    case 'actualizar':
        //console.log('1.-Actualiza todas las tareas por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);

        break;
    case 'borrar':
        //console.log('1.-Actualiza todas las tareas por hacer');
        let borrar = porHacer.borrar(argv.descripcion)
        console.log(borrar);

        break;

    default:
        console.log('Comando no es reconocido');
        break;

}