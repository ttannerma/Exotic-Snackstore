'use strict';
const express = require('express');
const crudrepo = require('./database/crudrepository.js');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());

const server = app.listen(8080, () => {
    console.log(`Listening on port ${server.address().port}`);
});

app.post('/users/login', (req, res) => {
    const user = req.body;
    crudrepo.getUser(user, (results) => {
        if(results[0].id) { 
            const returnUser = {
                username: results[0].name
                , userType: results[0].userType
            };
            res.status(200).send(returnUser);
        } else {
            res.status(404).send(results);
        }
    });
});
app.get('/users', (req, res) => {
    crudrepo.getUsers(results => {
        res.send(results);
    });
});
app.delete('/users/:id([0-9]+)', (req, res) => {
    const id = req.params.id;
    console.log(id);
    crudrepo.deleteUser(id, results => {
        res.send(200, 'Succesfully Deleted');
    });
});

app.post('/users/signup', (req, res) => {
    const user = req.body;
    crudrepo.addUser(user, (results) => {
        res.send(results);
    });
});

// Fetch all products
app.get('/products', (req, res) => {
    console.log('Getting /products');
    crudrepo.getProducts(results => {
        res.send(results);
    });
});
// Add new Product
app.post('/products', (req, res) => {
    var productData = req.body;
    crudrepo.save(productData, (result) => {
        res.send(result);
    });
});
// Fetch all products by search value
app.get('/search/:value', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    let value = req.params.value;
    console.log(`Getting /search/${value}`);
    crudrepo.getProductsBySearchValue(req.params.value, (results) => {
        res.send(results);
    });
});

// Fetch all products by a country
app.get('/countries/:country', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const country = req.params.country;
    console.log(`Getting /countries/${country}`);
    crudrepo.getProductsByCountry(country, (results) => {
        res.send(results);
    });
});

// Fetch all products by a category
app.get('/category/:value', (req, res) => {
    // curl http://localhost:8080/category/salty
    res.header('Access-Control-Allow-Origin', '*');
    const value = req.params.value;
    console.log(`Getting /category/${value}`);
    crudrepo.getProductsByCategory(value, (results) => {
        res.send(results);
    });
});

// Fetch product by id
app.get('/products/id/:id', (req, res) => {
    // curl http://localhost:8080/products/id/1
    res.header('Access-Control-Allow-Origin', '*');
    const value = req.params.id;
    console.log(`Getting /product/id/${value}`);
    crudrepo.getProductById(value, (results) => {
        res.send(results);
    });
});
/*
app.get('/countries/:country', (req, res) => {
    // curl http://localhost:8080/countries/japan
    res.header('Access-Control-Allow-Origin', '*');
    const country = req.params.country;
    console.log(`Getting /countries/${country}`);
})


app.get('/products/:id([0-9]+)', (req, res) => {
  crudrepo.findById(req.params.id, (results) => {
    let obj = JSON.stringify(results)
    res.send(`Results with id: ${req.params.id} ` + '\n' + obj)
  })
})

app.post('/products', (req, res) => {
  var productData = req.body
  crudrepo.save(productData, (result) => {
    res.send(result)
  })
})

app.delete('/products/:id([0-9]+)', (req, res) => {
  crudrepo.deleteById(req.params.id, (results) => {
    res.send(results)
  })
})
*/
