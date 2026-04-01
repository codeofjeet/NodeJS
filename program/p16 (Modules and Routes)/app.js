const http = require('http');
const userDataSubmit = require('./userDataSubmit');
const userForm = require ('./userForm');

http.createServer((req, resp)=>{
    resp.writeHead(200, {'content-type':'text/html'});
    if(req.url == '/'){
        userForm(req, resp)
    }else if(req.url == '/submit'){
        userDataSubmit(req, resp)
    }

    resp.end();
}).listen(5000);