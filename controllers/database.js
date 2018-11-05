const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
/**
 * Función sólo para testear la BD
 */
function databaseConnection() {


    connection.connect((err) => {

        if (err) {
            console.error('error: ' + err)
            return;
        }
        else if (!err) {
            console.log('conexión exitosa');
        }
    })

}

/**
 * Función para insertar puntos en la BD
 * @param  {} lat latitud pasada por url
 * @param  {} long longitu pasada por url
 */
function insertPoints(lat, long) {
    let point = `POINT(${lat} ${long})`;
    let query = `INSERT INTO gps VALUES (NULL,ST_GeomFromText('${point}'))`;
    connection.query(query, (err, result, fields) => {
        if (!err) {
            console.log(`results: ${result}`);
        } else if (err) {
            console.log(`error: ${err}`);
        }
    })
}
/**
 * Función para consultar a la BD
 */
function getPoints() {
    // consulta de la db para traerse como objeto legible los puntos 
    let query = `SELECT id, ST_AsText(point) AS POINT,  ST_X(point) AS LATITUD, ST_Y(point) AS LONGITUDE FROM gps;`;
    connection.query(query, (err, result, fields) => {
        if (!err) {
            console.log(`results: ${result}`);
            result.forEach(element => {
                console.log(element);
            });
        } else if (err) {
            console.log(`error: ${err}`);
        }
    })
}


module.exports = {
    databaseConnection,
    insertPoints
} 
