const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', () => {
    res.send('hola mundo');
});

app.listen(3000, ()=>{
console.log('servidor arrancado');
});