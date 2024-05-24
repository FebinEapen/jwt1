//defined routes for directing user

const express = require('express');
const { registerUser, loginUser, getUsers } = require('../userController');
const { userRegisterValidate, userLoginValidate } = require('../utils/userValidation');
const { ensureAuthenticated } = require('../utils/auth');
const routes = express.Router();  



routes.post('/register', userRegisterValidate ,registerUser);
           //first parameter =       second parameter =      third parameter = 
           //url tail                   middleware                fn call
           //                        (validates reg request)     (userController)

routes.post('/login', userLoginValidate, loginUser);  //provides jwt + user info

routes.get('/users', ensureAuthenticated, getUsers);  




/*
routes.post('/register',(req,res) => {
    res.send('Registration Successful');
});
routes.post('/login',(req,res) => {
    res.send('Login successful')
});

*/
module.exports = routes;   