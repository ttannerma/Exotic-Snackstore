/* eslint-disable quotes */
const mysql = require('mysql');
const { config } = require('./config');
const bcrypt = require('bcrypt');
const saltRounds = 10;
let myPlaintextPassword = 's0/\/\P4$$w0rD';

class CrudRepository {
    constructor() {
        this.connection = mysql.createConnection(config);
        this.connection.connect();
    }
    // Gets all users
    getUsers(callback) {
        this.connection.query('SELECT * FROM Users;', (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
    addUser(user, callback) {
        myPlaintextPassword = user.password;
        bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
            if(err) throw err;
            const queryString = `INSERT INTO Users(userType, name, email, password)
            VALUES('user', '${user.username}', '${user.email}', '${hash}');`;
            console.log(queryString);
            this.connection.query(queryString, (error, result) => {
                if(error) throw error;
                callback(result);
            });
            // Store hash in your password DB.
        });
    }
    deleteUser(id, callback) {
        const queryString = `DELETE FROM Users WHERE ID = ${id}`;
        this.connection.query(queryString, (error, result) => {
            if(error) throw error;
            callback(result);
        });
    }
    getUser(user, callback) {
        const queryString = `SELECT * FROM Users WHERE name = '${user.username}';`;
        this.connection.query(queryString, (error, result) => {
            if(result.length === 0 || error) {
                callback('User not found.');
            }
            else if(this.comparePassword(user.password, result[0].password)) {
                callback('Wrong password');
            } else {
                callback(result);
            }
        });
    }
    comparePassword(userPassword, hashPassword) {
        bcrypt.compare(userPassword, hashPassword, function(err, res) {
            return res;
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
    getProductById(id, callback) {
        let sql = 'SELECT name, price FROM products WHERE id=' + this.connection.escape(id) + ';';
        this.connection.query(sql, (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
    addNewProduct(product, callback) {
        const queryString = `INSERT INTO products(name, price, weight, description, 
        ratings, category, stock, country, allergies)
        VALUES('${product.name}', ${product.price}, ${product.weight}, '${product.description}'
        , '', '${product.category}', ${product.stock}, '${product.country}', '${product.allergies}');`;
        this.connection.query(queryString, (error, result) => {
            if(error) throw error;
            callback(result);
        });
    }
    deleteProduct(id, callback) {
        const queryString = `DELETE FROM products WHERE ID = ${id}`;
        this.connection.query(queryString, (error, result) => {
            if(error) throw error;
            callback(result);
        });
    }
    addOrder(userData, callback) {
        console.log(userData);
        const queryString = `INSERT INTO orders (firstname, lastname, phonenumber, email, address,
            city, postalcode, paymentmethod, deliverymethod, products, totalprice)
            VALUES ('${userData.firstname}', '${userData.lastname}', '${userData.phonenumber}', '${userData.email}'
            , '${userData.address}', '${userData.city}', '${userData.postalcode}', '${userData.paymentMethod}', '${userData.deliveryMethod}','${userData.products}'
            ,'${userData.price}');`;
        this.connection.query(queryString, (error, result) => {
            if(error) throw error;
            callback(result);
        });
    }
}

module.exports = new CrudRepository();
