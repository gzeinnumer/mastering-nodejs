var http = require("http");
var url = require('url');
var router = require('routes')();
var view = require('swig-templates');

router.addRoute('/', function(req, res){
    //res.writeHead(200,{"Content-Type":"text/plain"});
    //res.end("Index page");
    var html = view.compileFile('./template/index.html')();
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(html);
});

router.addRoute('/contact', function(req, res){
    var html = view.compileFile('./template/contact.html')();
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(html);
});
//dengan param
router.addRoute('/profile', function(req, res){
    var html = view.compileFile('./template/profile.html')({
        title1 : "Profile dari Zein"
    });
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(html);
});
http.createServer(function(req, res){
    var path = url.parse(req.url).pathname;
    var match = router.match(path);
    if(match){
        match.fn(req, res);
    } else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Page Not Found!!");
    }
    
}).listen(8888);

console.log("Server is running");