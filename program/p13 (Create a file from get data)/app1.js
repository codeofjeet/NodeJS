const http = require('http');
const fs = require('fs');
const quetyString = require('querystring');
let readableData

http.createServer((req, resp)=>{
    fs.readFile('HTML/form.html', 'utf-8', (error, data)=>{
        if(error){
            resp.writeHead(500, {'content-type': 'text/plain'})
            resp.write("<h1>Enter Server Error</h1>")
            resp.end()
            return
        }
        resp.writeHead(200, {'content-type': 'text/html'})
        if(req.url == '/'){
            resp.write(data)
        }else if(req.url == '/submit'){
            let dataBody = [];
            req.on('data', (chunk)=>{
                dataBody.push(chunk)
            });
            
            req.on('end', ()=>{
                let rawData = Buffer.concat(dataBody).toString();
                readableData = quetyString.parse(rawData)
                let dataString = "User name is:- " + readableData.name + "  Password is:- " + readableData.password;
                fs.writeFileSync("Text/" + readableData.name + ".txt", dataString, 'utf-8', (err)=>{
                    if(err){
                        resp.write("<h1>Internal Server Error</h1>")
                        resp.end()
                        return false
                    }else{
                        console.log("File Created")
                    }
                })
            })
            resp.write("<h1>Data Submitted</h1>")
            
        }
        resp.end()
    })

}).listen(5500);