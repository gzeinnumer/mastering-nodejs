//todo 1
var http = require("http");

http.createServer(function(req,res){

    //todo 4 put todo 2 and 3 inside if
    //jika req tidak sama
    if(req.url != "/favicon.ico"){
        //todo 3
        console.log(req.url);
        //end todo3
        //todo 2
        res.writeHead(200,{"Content-type" : "text/plain"});
        res.write("Hello from Node Js Server\n");
        //todo 5
        res.write("You req : "+req.url);
        res.end();
        //end todo5
        //end todo2
    }
    //end todo4
    
}).listen(8888);

console.log('Server Running...');
//end todo1