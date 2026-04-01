// userSubmitData.js
const queryString = require("querystring");

module.exports = function (req, resp) {
    let body = [];

    req.on('data', chunk => {
        body.push(chunk);
    });

    req.on('end', () => {
        const rawData = Buffer.concat(body).toString();
        const readableData = queryString.parse(rawData);

        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Submitted Data</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <div class="container">
                    <h1>Data Submitted</h1>
                    <pre>${JSON.stringify(readableData, null, 2)}</pre>
                </div>
            </body>
            </html>
        `);
        resp.end();
    });
};
