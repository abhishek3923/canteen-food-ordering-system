var http = require('http');
var port = 3000;

var app = require('./app');
var server = http.createServer(app);
server.listen(port);

console.log("Server started and listening on 3000");