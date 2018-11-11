var express = require('express');
var router = express.Router();
const database = require('../controllers/database');


router.get('/points/:lat/:long', (req, res) => {

    let { long, lat } = req.params;
    // let long = req.params.long;
    // let lat = req.params.lat;
    console.log(`lat: ${lat} long: ${long}`);
    database.insertPoints(lat, long);
    res.send('listo');
})

router.use('/', (req, res) => {
    console.log(req.query);
    let id = JSON.stringify(req.headers["user-agent"]);
    let { lon, lat, ruta } = req.query;
    // let long = req.params.long;
    // let lat = req.params.lat;
    console.log(`lat: ${lat} long: ${lon} id: ${id}`);
    database.insertPoints(lat, lon);
    res.send('listo');

})

module.exports = router;