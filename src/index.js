const express = require('express');
const routes = require('./routes');


console.log('oiii')
const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);