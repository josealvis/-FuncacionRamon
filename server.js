var express = require('express');
var routers = require('./Routes/routes')
var app = express();

app.use('/', routers);

app.listen(4000, function(){
    console.log('listen in port: 4000');
});