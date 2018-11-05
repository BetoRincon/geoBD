var express = require('express');
var app = express();
const port = 4052 || process.env.PORT;


app.use('/insert', require('./routes/insert'));


app.listen(port, () => {
    console.log('server listening on port ' + port);
})