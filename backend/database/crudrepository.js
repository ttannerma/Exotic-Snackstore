const mysql = require('mysql');
const { config } = require('./config');

class CrudRepository {
    constructor() {
        this.connection = mysql.createConnection(config);
        this.connection.connect();
    }
    getProducts(callback) {
        this.connection.query('SELECT * FROM products;', (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }
}

module.exports = new CrudRepository();
