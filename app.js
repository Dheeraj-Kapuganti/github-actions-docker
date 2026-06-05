const http = require('http');

http.createServer((req,res) => {
    res.end("Hello github actions");
}).listen(3000);