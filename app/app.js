const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const pageContent = fs.readFileSync('./pages/index.ejs', 'utf-8');
const cssContent  = fs.readFileSync('./styles/main.css', 'utf-8');

var server =  http.createServer(
    (req,res)=>{
        console.log(req.url);
        var urlParts = req.url;
        switch(urlParts.pathname){
            case '/':
                var content = ejs.render(pageContent, {userName: 'UserName'});
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(content);
                res.end();
                break;
        }
    }
);

server.listen(3000);