// const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLgn(direccion);
        let temp = await clima.getClima(coors.lag, coors.lng);
        return `El clima en ${ coors.direccion } es de ${ temp }`;
    } catch (e) {
        return `No se puedo determial el clima en ${direccion}`
    }






}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


// lugar.getLugarLatLgn(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));

// clima.getClima(6.547306, -71.0022311)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));