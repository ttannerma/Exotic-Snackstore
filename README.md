# Exotic-Snackstore
https://fierce-lake-40102.herokuapp.com/

This application is deployed in Heroku. Click the link above to check it out.

## Versions
v 1.0 -- 24. June 2019 -- Deployed

## Authors
Niko Hienonen
https://nikohienonen.github.io/myportfolio/

Teemu Tannerma
https://ttannerma.github.io/

## About
This is a pair project of Niko Hienonen and Teemu Tannerma. Project was bootstrapped with Create React App. The application is an online snackstore where the user can login or signup, "buy" products and rate products. The app also contains an admin panel where the admin user can view all products, add new products, view orders and remove existing users.
Front end uses ReactJS and SCSS.
Back end uses NodeJS and JavaScript.
Database uses TAMK's MySQL server, and there we made our own database for products, users and orders.

## The folder structure

    |Exotic-Snackstore
    |
    |---- backend
    |       |
    |       |---database
    |               |
    |               | config.js
    |               | crudrepository.js
    |---- frontend
            |
            |---- src
                    |
                    |---- components
                    |        |
                    |        |---- dynamic
                    |        |---- static
                    |
                    | index.js

The structure is seperated to backend and frontend folders.
You can find all components that are being used in the application in the "components" folder located in frontend.
"database" folder contains "crudrepository.js" which handles post, get, delete requests made by the application.

## Acknowledgements 

This project taught us both a lot about React and all the other technologies we used in this project. Our co-operation and communication worked seamlessly and we both are extremely pleased with the final outcome. Thank you for reading this readme and contact us if you have any questions or comments about this application!