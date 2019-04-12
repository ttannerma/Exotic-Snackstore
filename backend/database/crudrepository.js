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
        let sql = 'SELECT * FROM products WHERE country = ' + this.connection.escape(country) + ';';
        this.connection.query(sql, (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
    // a function to get all products of a category
    getProductsByCategory(category, callback) {
        let sql = 'SELECT * FROM products WHERE category = ' + this.connection.escape(category) + ';';
        this.connection.query(sql, (error, results) => {
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
