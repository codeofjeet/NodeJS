const http = require('http');

http.createServer((req, resp) => {
    if(req.url == '/'){
        resp.write("<h1>Home Page</h1>");
    }
    else if (req.url == '/login'){
        resp.write("<h1>Login Page</h1>");
    }
    else if(req.url == '/aboutus'){
        resp.write("<h1>About Us Page</h1>");
    }
    else if(req.url == '/contactus'){
        resp.write("<h1>Contact Us Page</h1>");
    }
    else{
        resp.write("<h1>404 Page Error</h1>")
    }

    resp.end();
}).listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});