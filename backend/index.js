'use strict';
const express = require('express');
const crudrepo = require('./database/crudrepository.js');
const app = express();
app.use(express.json());

const server = app.listen(8080, () => {
    console.log(`Listening on port ${server.address().port}`);
});

app.get('/products', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log('Getting /products');
    crudrepo.getProducts((results) => {
        res.send(results);
    });
});

app.get('/search/:value', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    let value = req.params.value;
    console.log(`Getting /search/${value}`);
    crudrepo.getProductsBySearchValue(req.params.value, (results) => {
        res.send(results);
    });
});

//get-function to fetch all products by a country
app.get('/products/country/:value', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const value = req.params.value;
    console.log(`Getting /products/country/${value}`);
    crudrepo.getProductsByCountry(value, (results) => {
        res.send(results);
    });
});

//get-function to fetch all products by a category
app.get('/products/category/:value', (req, res) => {
    // curl http://localhost:8080/products/category/salty
    res.header('Access-Control-Allow-Origin', '*');
    const value = req.params.value;
    console.log(`Getting /products/category/${value}`);
    crudrepo.getProductsByCategory(value, (results) => {
        res.send(results);
    });
});

/*
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
