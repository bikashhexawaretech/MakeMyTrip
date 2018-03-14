
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var fs = require("fs");

 
 
 

app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});


