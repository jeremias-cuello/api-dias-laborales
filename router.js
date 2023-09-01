const express = require('express');
const router = express.Router();
const scraping = require('./scraping');

async function mostrarDias(res) {
    res.send(await scraping.obtenerCalendario());
}

router.get('/', (req, res) => {
    mostrarDias(res);
})

module.exports = router;