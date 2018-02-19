var express = require('express');
var app = express();

app.get('/', function(req, res){
  var path = require('path');
  res.sendFile(path.resolve('../web/chatTest.html'));
});

server.listen(80, function(){
    console.log('HTTP listening on 80');
  });