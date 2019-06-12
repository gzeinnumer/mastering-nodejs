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

router.addRoute('/update/:id1', function(req, res){
    connection.query("SELECT * FROM mahasiswa WHERE ?",{
        no_induk : this.params.id1}, 
        function(err, rows, field){
            if(rows.length){
                var data1 = rows[0];
                if(req.method.toUpperCase() == "POST"){
                    var data_post = "";
                    req.on('data', function(chunks){
                        data_post += chunks;
                    });

                    req.on('end', function(){
                        data_post = gString.parse(data_post);
                        connection.query("UPDATE mahasiswa SET ? WHERE ?",[
                            data_post,
                            { no_induk : data1.no_induk }
                        ],
                        function(err, field){
                            if(err) throw err;

                            res.writeHead(302, {"Location":"/"});
                            res.end();
                        });
                    });
                } else{
                    var html = view.compileFile('./template/form_update.html')({
                        data : data1
                    });
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(html);
                }
            } else{
                res.writeHead(404,{"Content-Type":"text/plain"});
                res.end(html);
            }
        });
});

router.addRoute('/delete/:id1', function(req, res){
    connection.query("DELETE FROM mahasiswa WHERE ?",
        {no_induk : this.params.id1}, 
        function(err, rows){
            if(err) throw err;

            res.writeHead(302,{"Location":"/"});
            res.end();
        });
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