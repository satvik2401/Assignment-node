const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const api = require('./src/api');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(
    session({
    secret: 'thisisasecret',
    saveUninitialized: false,
    resave: false
    })
    );
app.use('/api/v1', api);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));