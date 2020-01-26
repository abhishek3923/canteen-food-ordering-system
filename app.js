const express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const mangoose = require("mongoose");
mangoose.connect("mongodb://localhost:27017/emisha", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
app.get('/',()=>{
    res.sendFile(index.js);
})

var x = require('./router');
app.use('/xyz', x);

module.exports = app;
