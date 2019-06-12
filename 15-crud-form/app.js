var http = require("http");
var url = require('url');
var router = require('routes')();
var view = require('swig-templates');
var gString = require('querystring');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : "localhost",
    port : 3306,
    database : "nodejs",
    user : "root",
    password : ""
});

router.addRoute('/', function(req, res){
    // var html = view.compileFile('./template/index.html')({
    //     title1 : "Data Mahasiswa"
    // });
    // res.writeHead(200, {"Content-Type":"text/html"});
    // res.end(html);

    connection.query("SELECT * FROM mahasiswa", function(err, rows, field){
        if(err) throw err;

        var html = view.compileFile('./template/index.html')({
            title1 : "Data Mahasiswa",
            data : rows
        });

        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(html);
    });
});

router.addRoute('/insert', function(req, res){
    if(req.method.toUpperCase() == "POST"){
        var data_post ="";
        req.on('data',function(chunks){
            data_post +=chunks;
        });

        req.on('end', function(){
            data_post = gString.parse(data_post);
            // console.log(data_post);
            // res.end();
            //data post sudah dalam bantuk object, jadi kita bisa lansung pakai.

            connection.query("INSERT INTO mahasiswa set ?", data_post, function(err, field){
                if(err) throw err;

                res.writeHead(302, {"Location" : "/"});
                res.end();
            });
        });
    } else{
        var html = view.compileFile('./template/form.html')();
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(html);
    }
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