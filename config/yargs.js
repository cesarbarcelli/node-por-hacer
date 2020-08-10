const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const opts1 = {
    descripcion
}

const opts2 = {
    descripcion,
    completado
}

const opts3 = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts1)
    .command('actualizar', 'Actualiza el estado completado de la tarea', opts2)
    .command('borrar', 'Borrar una tarea', opts3)
    .help()
    .argv;


/*const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .help()
    .argv;
*/
module.exports = {
    argv
}