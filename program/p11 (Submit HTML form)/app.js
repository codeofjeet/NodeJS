const http = require('http');

http.createServer((req, resp)=>{
    resp.writeHead(200, {"content-type": 'text/html'})
    if(req.url == '/'){
        resp.write(`
            <form action='/submit' method='post'>
            <input type='text' placeholder="Enter user name" name='username' /><br/><br/>
            <input type='password' placeholder="Enter password" name='password' /><br/><br/>
            <button>Submit</button>
            </form>
            `);
    }else if(req.url == '/submit'){
        resp.write("<h1>Form submitted</h1>")
    }
    resp.end();
}).listen(5000);