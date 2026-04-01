// app.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const userForm = require("./userForm2");
const userSubmitData = require("./userSubmitData2");

const server = http.createServer((req, resp) => {

    if (req.url === "/" && req.method === "GET") {
        userForm(resp);
    }
    else if (req.url === "/submit" && req.method === "POST") {
        userSubmitData(req, resp);
    }
    else if (req.url === "/style.css") {
        const cssPath = path.join(__dirname, "style.css");
        fs.readFile(cssPath, (err, data) => {
            resp.writeHead(200, { 'Content-Type': 'text/css' });
            resp.write(data);
            resp.end();
        });
    }
    else {
        resp.writeHead(404, { 'Content-Type': 'text/html' });
        resp.write("<h1>404 Page Not Found</h1>");
        resp.end();
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
