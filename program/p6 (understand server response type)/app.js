const http = require('http')

const server = http.createServer((req, resp) =>{
    resp.setHeader("Content-Type", "text/html");
    resp.write("<h1>This is heading one</h1>");
    resp.end();
}).listen(4800);