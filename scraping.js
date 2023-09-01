const puppeteer = require('puppeteer');

exports.obtenerCalendario = async() => {
    const browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://www.argentina.gob.ar/interior/feriados-nacionales-' + new Date().getFullYear());

    const calendario = await page.evaluate(() => {
        return holidays2023;
    });

    browser.close();

    return calendario;
};