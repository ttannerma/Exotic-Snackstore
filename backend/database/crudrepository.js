/* eslint-disable quotes */
const mysql = require('mysql');
const { config } = require('./config');

class CrudRepository {
    constructor() {
        this.connection = mysql.createConnection(config);
        this.connection.connect();
    }
    // Gets all users.
    getUser(user, callback) {
        console.log(user);
        const queryString = `SELECT * FROM Users WHERE name = '${user.username}';`;
        console.log(queryString);
        this.connection.query(queryString, (error, result) => {
            console.log(result[0].password);
            if(result === undefined || error) {
                callback('User not found.');
            }
            else if(user.password !== result[0].password) {
                callback('Wrong password');
            } else {
                callback(result);
            }
        });
    }
    // Gets all products.
    getProducts(callback) {
        this.connection.query('SELECT * FROM products;', (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
    // Gets all products of a specific country
    getProductsByCountry(country, callback) {
        let sql = 'SELECT * FROM products WHERE country = ' + this.connection.escape(country) + ';';
        this.connection.query(sql, (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
    // Gets all products of a specific category
    getProductsByCategory(category, callback) {
        let sql = 'SELECT * FROM products WHERE category = ' + this.connection.escape(category) + ';';
        this.connection.query(sql, (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
    // Gets all products by search value
    getProductsBySearchValue(value, callback) {
        let sql = 'SELECT * FROM products WHERE (name LIKE ' + this.connection.escape('%' + value + '%') + ') OR (country LIKE ' + this.connection.escape('%' + value + '%') + ') OR (category LIKE ' + this.connection.escape('%' + value + '%') + ');';
        this.connection.query(sql, (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
}

module.exports = new CrudRepository();
