var http = require('http');

http.createServer(function(req, res){
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("Hello Node Js");
}).listen(8888);

console.log('Server Running');