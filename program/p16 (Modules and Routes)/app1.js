// app.js
const http = require("http");
const userForm = require("./userForm1");
const userSubmitData = require("./userSubmitData1");

const server = http.createServer((req, resp) => {

    if (req.url === "/" && req.method === "GET") {
        userForm(resp);
    }
    else if (req.url === "/submit" && req.method === "POST") {
        userSubmitData(req, resp);
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
