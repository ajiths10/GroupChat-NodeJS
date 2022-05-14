const http = require('http');

const express = require('express');
const bodyPaser = require('body-parser');

const app = express();

const loginPage = require('./routes/login');
const compose = require('./routes/compose');

app.use(bodyPaser.urlencoded({extended: false}))

app.use(loginPage)
app.use(compose)

app.listen(4000);