// userForm.js
module.exports = function (resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.write(`
        <h1>User Form</h1>
        <form method="POST" action="/submit">
            <label>Name:</label>
            <input type="text" name="username" /><br><br>

            <label>Email:</label>
            <input type="email" name="email" /><br><br>

            <button type="submit">Submit</button>
        </form>
    `);
    resp.end();
};
