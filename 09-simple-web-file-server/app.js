//todo 1
var http = require("http");

//todo 3
var fs = require('fs');
//end todo3

http.createServer(function(req,res){

    console.log(req.url);
    //todo 4
    // res.writeHead(200,{"Content-type" : "text/html"});
    //todo 7 komentar kan ini
    // fs.createReadStream('./template/index.html').pipe(res);
    //end todo7
    //end todo4

    //todo 8
    var kode =0;
    var file = "";
    if(req.url =="/"){
        //index
        kode = 200;
        file = "index.html";
    } else if (req.url == "/contact"){
        //contact
        kode = 200;
        file = "contact.html";
    } else{
        //404
        kode = 404;
        file = "404.html";
        
    }
    res.writeHead(kode,{"Content-type" : "text/html"});
    fs.createReadStream('./template/'+file).pipe(res);
    //rnd todo8
}).listen(8888);

console.log('Server Running...');
// end todo1
