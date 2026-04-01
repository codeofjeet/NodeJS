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
        resp.write('<h1>Data Submitted</h1>');
        resp.write(`<pre>${JSON.stringify(readableData, null, 2)}</pre>`);
        resp.end();
    });
};
