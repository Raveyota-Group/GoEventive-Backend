require('dotenv').config(); //enviroment variables

const express = require('express');
const session = require('express-session');
const app = express();
const cookieparser = require('cookie-parser');
const cors = require('cors');

// database connection
const mongodb = require('./model/mongoose');

// configuration import
const {corsOptions} = require('./data/config.js');
const {sessionSettings} = require('./data/config.js');

// configuration setup
app.use(session( sessionSettings))
app.use(cookieparser());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static('public'));


// routes
app.use('/',require('./route/index'));

// server start

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port '+process.env.PORT);
})