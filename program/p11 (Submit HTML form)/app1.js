const http = require('http');
const fs = require('fs');

http.createServer((req, resp)=>{
    fs.readFile('HTML/form.html', 'utf-8', (error, data)=>{
        if(error){
            resp.writeHead(500, {'content-type': 'text/plain'})
            resp.write("<h1>Enter Server Error</h1>")
            resp.end()
            return
        }
        resp.writeHead(200, {'content-type': 'text/html'})
        if(req.url == '/'){
            resp.write(data)
        }else if(req.url == '/submit'){
            resp.write("<h1>Data Submitted</h1>")
        }
        resp.end()
    })

}).listen(5500);