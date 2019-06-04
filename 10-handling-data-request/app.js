//todo 1
var http = require('http');
var fs = require('fs');
var url_1 = require('url');
var gString = require('querystring');

http.createServer(function(req, res){
    if(req.url != "/favicon.ico"){
        //todo 2
        // var access = url_1.parse(req.url);
        // var data = gString.parse(access.query);
        // console.log(access.query);
        // console.log(data);
        // console.log(data.nama);
        // console.log(data.alamat);
        // res.end();
        //end todo2
        //todo 3
        // var access = url_1.parse(req.url);
        // if(access.pathname =="/"){
        //     var data = gString.parse(access.query);
        //     res.writeHead(200,{"Content-Type" : "text/plain"});
        //     res.end(JSON.stringify(data)+" Ambil 1 1 = "+ JSON.stringify(data.nama));
        // }  
        // //end todo3
        //todo 4
        // var access = url_1.parse(req.url);
        // if(access.pathname =="/"){
        //     var data = gString.parse(access.query);
        //     res.writeHead(200,{"Content-Type" : "text/plain"});
        //     res.end(JSON.stringify(data)+" Ambil 1 1 = "+ JSON.stringify(data.nama));
        // } else if(access.pathname == "/form"){
        //     res.writeHead(200,{"Content-Type" : "text/html"});
        //     fs.createReadStream("./template/form.html").pipe(res);
        // } else{
        //     res.writeHead(404,{"Content-Type" : "text/plain"});
        //     res.end("Page Not Found");
        // }
        //end todo4
        //todo 5
        // var access = url_1.parse(req.url);
        // if(access.pathname =="/"){
        //     var data = gString.parse(access.query);
        //     res.writeHead(200,{"Content-Type" : "text/plain"});
        //     res.end(JSON.stringify(data)+" Ambil 1 1 = "+ JSON.stringify(data.nama));
        // } else if(access.pathname == "/form"){
        //     if(req.method.toUpperCase() == "POST"){
        //         //post 
        //         console.log("POST");
        //         res.writeHead(200,{"Content-Type":"text/plain"});
        //         res.end("Request POST");
        //     } else {
        //         //GET
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         fs.createReadStream("./template/form.html").pipe(res);
        //         console.log("GET");
        //     }
        // } else{
        //     res.writeHead(404,{"Content-Type" : "text/plain"});
        //     res.end("Page Not Found");
        // }
        //end todo5
        //todo 6
        var access = url_1.parse(req.url);
        if(access.pathname =="/"){
            var data = gString.parse(access.query);
            res.writeHead(200,{"Content-Type" : "text/plain"});
            res.end(JSON.stringify(data)+" Ambil 1 1 = "+ JSON.stringify(data.nama));
        } else if(access.pathname == "/form"){
            if(req.method.toUpperCase() == "POST"){
                var data_post = "";
                req.on('data', function(chunck){
                    data_post+=chunck;
                });
                req.on('end',function(){
                    //ubah ke bentuk JSON
                    data_post = gString.parse(data_post);
                    res.writeHead(200,{"Content-Type": "text/plain"});
                    res.end(JSON.stringify(data_post));
                });
            } else {
                //GET
                res.writeHead(200,{"Content-Type":"text/html"});
                fs.createReadStream("./template/form.html").pipe(res);
                console.log("GET");
            }
        } else{
            res.writeHead(404,{"Content-Type" : "text/plain"});
            res.end("Page Not Found");
        }
        //end todo6
    }
}).listen(8888);

console.log("Server is Running");