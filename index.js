
const express = require('express');
const dotenv = require ("dotenv") 
const routes = require('./routes');
const bodyParser = require('body-parser'); //parses the request body
const app = express();
const connectToMongoDB = require('./config/db.js');
require('dotenv').config();  //with Dotenv, we can have a dedicated file where we store all environment variables, and then they get automatically loaded into the runtime environment
require('./config/db.js');  
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(bodyParser.json());
app.use('/api/v1', routes);  //base url for APIs - /routes/index.js

app.listen(PORT, ()=>{    
    connectToMongoDB();
    console.log(`Server is up and running on PORT: ${PORT}`);
    
})

