var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('/Travel-check-main/reg.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
console.log("Server runing at http://localhost:8080/");

http.createServer(function(req, res) {
    fs.readFile('/Travel-check-main/index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
    fs.appendFile("users.txt","habiba",function(err){
        if(err) throw err;
        });
}).listen(3000);
console.log("Server runing at http://localhost:3000/");

