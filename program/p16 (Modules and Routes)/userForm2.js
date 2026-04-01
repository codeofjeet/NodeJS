// userForm.js
module.exports = function (resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>User Form</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <h1>User Form</h1>
                <form method="POST" action="/submit">
                    <label>Name:</label>
                    <input type="text" name="username" required>

                    <label>Email:</label>
                    <input type="email" name="email" required>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </body>
        </html>
    `);
    resp.end();
};
