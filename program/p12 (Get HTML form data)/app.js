const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, resp) => {

    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('HTML/form.html', 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                resp.end('Internal Server Error');
                return;
            }
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.end(data);
        });
    }

    else if (req.url === '/submit' && req.method === 'POST') {
        let body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const rawData = Buffer.concat(body).toString();
            const readableData = queryString.parse(rawData);

            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write('<h1>Data Submitted</h1>');
            resp.write(`<pre>${JSON.stringify(readableData, null, 2)}</pre>`);
            resp.end();
        });
    }

}).listen(5500);
