const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&metric=imperial&appid=92f212d3821f84a1c9bcc5c7eefeae5c`)

    if (resp.data.cod === '400') {
        throw new Error(`No se encontro el clima para dichos datos ${lat} ${lng}`);
    }
    let temp = resp.data.main.temp
    return temp
}

module.exports = {
    getClima
}