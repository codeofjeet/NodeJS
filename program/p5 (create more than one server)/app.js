const http = require('http');

http.createServer((req, resp) =>{
    resp.write("<h1>This is 4500 port server</h1>");
    resp.end();
}).listen(4500);


http.createServer((req, resp) => {
    resp.write("<h1>This is 5000 port server</h1>");
    resp.end()
}).listen(5000);