const mongoose = require('mongoose');


const url = 'mongodb://localhost:27017/GoEventive';
const connection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('NOSQL DB:200'))
   .catch(err => console.error('NOSQL DB:500', err));


module.exports = connection;