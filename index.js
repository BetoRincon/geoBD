var express = require('express');
var app = express();
const port = 3000 || process.env.PORT;


app.use('/insert', require('./routes/insert'));

app.use('/gps', (req, res, next) => {
    let request = req.query;
    // console.log(JSON.stringify(req.headers));
    console.log(`${JSON.stringify(req.headers["user-agent"])}`)
    res.send(`ok`)
    console.log(`lat = ${request.lat} y long = ${request.lon} y ruta ${request.ruta}`);
})

app.listen(port, () => {
    console.log('server listening on port ' + port);
})