var http = require('http');
var url = require('url');
// var Router = require('routes');
// var routes = Router();
//simple nya
var routes = require('routes')();

routes.addRoute('/',function(req, res){
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("Index page");
});
//gambungkan 1
routes.addRoute('/profil',function(req, res){
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("Profil page");
});

routes.addRoute('/profil/:nama',function(req, res){
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("Profil page dari "+this.params.nama);
});
//gabungkan 1
//jika tidak ingin seperti diatas, kita bisa pakai
routes.addRoute('/profilzein/:nama?',function(req, res){
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("Profil Zein page dari "+this.params.nama);
});
//tanda tanya dia atas kita jadikan optional

//2 param
//2 param = 2 tanda tanya.
// routes.addRoute('/profil2param/:nama?/:kota?',function(req, res){
routes.addRoute('/profil2param/:nama/:kota',function(req, res){
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("Profil Zein page dari "+this.params.nama+" dari " + this.params.kota);
});

routes.addRoute('/contact', function(req, res){
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("Contact Page");
});
http.createServer(function(req, res){
    var path = url.parse(req.url).pathname;
    var match = routes.match(path);
    if(match){
        match.fn(req, res);
    } else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Page Not Found");
    }
}).listen(8888);

console.log('Server Running');