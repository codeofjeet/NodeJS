const http = require('http');

const userData = [
    {
        name: "Anil Jain",
        age: 38
    },
    {
        name: "Deepak Mulchandani",
        age: 42
    },
    {
        name: "Deepti Khanna",
        age: 38
    },
    {
        name: "Divya Soni",
        age: 31
    },
    {
        name: "Bhupendra Shekhawat",
        age: 38
    }
]

http.createServer((req, resp)=>{
    resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify(userData));
    resp.end()
}).listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});