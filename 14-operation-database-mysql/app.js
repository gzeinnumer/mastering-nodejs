var http = require("http");
var url = require('url');
var router = require('routes')();
var view = require('swig-templates');

//buat koneksi
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:"Localhost",
    port:"3306",
    database:"nodejs",
    user:"root",
    password:""
});

router.addRoute('/', function(req, res){
    // res.writeHead(200,{"Content-Type":"text/plain"});
    // res.end("Index page");

    //menapilkan semua data
    // conn.query("SELECT * FROM mahasiswa", function(errors, rows, field){
    //     if(errors) throw err;
    //     console.log(rows);
    //     res.end();
    // });
    //menampilkan data 1 persatu.
    // conn.query("SELECT * FROM mahasiswa", function(errors, rows, field){
    //     if(errors) throw err;
    //     rows.forEach(function(item){
    //         console.log(item.nama);
    //     });
    //     res.end();
    // });
    //menampilkan data dengan json.
    conn.query("SELECT * FROM mahasiswa", function(errors, rows, field){
        if(errors) throw err;
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end(JSON.stringify(rows));
    });
});

//insert
router.addRoute('/insert', function(req, res){

    // res.writeHead(200, {"Content-Type" : "text/plain"});
    // res.end("Hello Insert");

    //insert data
    conn.query("INSERT INTO mahasiswa set ?",{
        no_induk : "082385804045",
        nama : "Zein",
        alamat : "Rumah"
    }, function(err, field){
        if(err) throw err;
        console.log(field.affectedRows);
        res.end();
    });
    
});

//update
router.addRoute('/update', function(req, res){
    // res.writeHead(200, {"Content-Type" : "text/plain"});
    // res.end("Hello update");
    //update data
    conn.query("UPDATE mahasiswa set ? WHERE ?",[
        { nama : "M Zein"},
        { no_induk : "0823858040"}
    ], function(err, field){
        if(err) throw err;
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end(field.changedRows+" baris diupdate");
    });
});

//delete
router.addRoute('/delete', function(req, res){
    // res.writeHead(200, {"Content-Type" : "text/plain"});
    // res.end("Hello delete");

    conn.query("DELETE FROM mahasiswa where ?",{
        no_induk : "0823858040"
    }, function(err, field){
        if(err) throw err;
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end(field.affectedRows + "baris dihapus.");
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