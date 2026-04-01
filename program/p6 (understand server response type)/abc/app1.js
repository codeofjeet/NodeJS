const http = require('http');
const fs = require('fs');
const path = require('path');
const age = 30;
const server = http.createServer((req, resp) => {
    if (req.url === "/p1.jpg") {
        const imagePath = path.join(__dirname, "p1.jpg");
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                resp.writeHead(404);
                resp.end("Image not found");
            } else {
                resp.writeHead(200, { "Content-Type": "image/jpeg" });
                resp.end(data);
            }
        });
    } else {
        resp.setHeader("Content-Type", "text/html");
        resp.end(`
            <html>
                <head>
                    <title>Server Response Type</title>
                </head>
                <body>
                    <img src='p1.jpg' width=200px>
                    <h1>Deepti Khanna</h1>
                    <h3>Software Developer</h3>
                    <h3>`+age+`</h3>
                </body>
            </html>
        `);
    }
}).listen(4800, () => {
    console.log("Server running at http://localhost:4800");
});
