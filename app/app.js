const http = require('http');
const fs = require('fs');

var server =  http.createServer(
    (req,res)=>{
        const htmlFileContent = fs.readFileSync('./pages/index.html');
        res.end(htmlFileContent);
    }
);

server.listen(3000);