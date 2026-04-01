const http = require('http');

http.createServer((req, resp) => {
    resp.write("<h1>Hello I am Server");
    resp.end();
}).listen(4800);