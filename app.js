const express = require('express');
const app = express()
const route = require('./routes/route')
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(route)
module.exports = app