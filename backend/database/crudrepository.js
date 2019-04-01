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
    // a function to get all products of a specific country
    getProductsByCountry(country, callback) {
        this.connection.query('SELECT * FROM products WHERE country = ' + country + ';',
         (error, results) => {
             if (error) throw error;
             callback(results);
         })
    }
    // a function to get all products of a category
    getProductsByCategory(category, callback) {
        this.connection.query('SELECT * FROM products WHERE category = ' + category + ';',
         (error, results) => {
             if (error) throw error;
             callback(results);
         })
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
