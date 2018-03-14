
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(express.static('image'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var fs = require("fs");
var facebookResponse='';
 
app.post('/',function(req,res){
      if(req.body.result.action==='ActionIncident'){
        if(req.body.result.parameters.description=="")
        {
            var resagent='Please enter description';
            return res.json({
                speech:resagent,
                displayText: resagent,
                source:''
              
              });
        }
      if(req.body.result.parameters.entityCategory=="")
      {
          console.log('Entry to Category');
        facebookResponse={
            "speech": "",
          "messages": [
            {
              "type": 1,
              "platform": "facebook",
              "title": "Select Category",
              "subtitle": "",
              "imageUrl": "http://www.cromacampus.com/wp-content/uploads/2017/05/servicenow-tool-training.png",
              "buttons": [
                {
                  "text": "Hardware",
                  "postback": "Hardware"
                },
                {
                  "text": "Software",
                  "postback": "Software"
                },
                {
                  "text": "Network",
                  "postback": "Network"
                }
              ]
            }
            
            
          ]
         }
         return res.json(facebookResponse);
      }
      if(req.body.result.parameters.entitySeverity=="")
      {
        console.log('Entry to severity');
        facebookResponse={
            "speech": "",
          "messages": [
            {
              "type": 1,
              "platform": "facebook",
              "title": "Select Urgency",
              "subtitle": "",
              "imageUrl": __dirname+'/image/brand.jpg',
              "buttons": [
                {
                  "text": "High",
                  "postback": "High"
                },
                {
                  "text": "Low",
                  "postback": "Low"
                },
                {
                  "text": "Medium",
                  "postback": "Medium"
                }
              ]
            }
            
            
          ]
         }
         return res.json(facebookResponse);
      }
     if( req.body.result.parameters.description!="" && req.body.result.parameters.entityCategory!="" && req.body.result.parameters.entitySeverity!=""){
        var resagent='Incident Created Successfully';
        return res.json({
            speech:resagent,
            displayText: resagent,
            source:''
          
          });
     }
    }
    });
 

app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});


