const mysql = require('mysql');
const { config } = require('./config');

class CrudRepository {
    constructor() {
        this.connection = mysql.createConnection(config);
        this.connection.connect();
    }
    getProducts(callback) {
        this.connection.query('SELECT * FROM products;', (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
    getProductsBySearchValue(value, callback) {
        let sql = 'SELECT * FROM products WHERE name LIKE ' + this.connection.escape('%' + value + '%') + ';';
        this.connection.query(sql, (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
}

module.exports = new CrudRepository();
