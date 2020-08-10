const fs = require('fs');

let listadoPorHacer = [];

const guardadDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo graba', err);
    });

}

const cargaDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    //console.log(listadoPorHacer);
}

const crear = (descripcion) => {

    cargaDB();


    let porHacer = {
        //descripcion : descripcion,
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardadDB();

    return porHacer;

}

const getListado = () => {
    cargaDB();
    return listadoPorHacer

}

const actualizar = (descripcion, completado = true) => {
    cargaDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    //let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardadDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargaDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardadDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}