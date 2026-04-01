/**************************************
 * Common Node.js Core Modules Example
 ***************************************/

// File system
const fs = require('fs');
const path = require('path');

// OS info
const os = require('os');

// HTTP & HTTPS
const http = require('http');
const https = require('https');

// URL & querystring
const url = require('url');
const querystring = require('querystring');

// Crypto
const crypto = require('crypto');

// Events
const EventEmitter = require('events');

// Utilities
const util = require('util');

// Compression
const zlib = require('zlib');

// Streams
const { Readable } = require('stream');

// Readline
const readline = require('readline');

// Child Process
const { exec } = require('child_process');

// Timers
const { setTimeout } = require('timers');


/* 1. FILE SYSTEM */
fs.writeFileSync('demo.txt', 'Hello Node.js!', 'utf8');
console.log('FS: File written:', fs.readFileSync('demo.txt', 'utf8'));


/* 2. PATH */
console.log("PATH: File absolute path:", path.resolve('demo.txt'));


/* 3. OS */
console.log("OS: Platform =", os.platform(), "| CPU cores =", os.cpus().length);


/* 4. CRYPTO */
const hash = crypto.createHash('sha256').update('NodeJS').digest('hex');
console.log("CRYPTO: SHA256 =", hash);


/* 5. EVENTS */
const emitter = new EventEmitter();
emitter.on('greet', name => console.log(`EVENT: Hello ${name}!`));
emitter.emit('greet', 'Developer');


/* 6. UTIL */
const debug = util.debuglog('app');
debug("This is debug log from util.debuglog");


/* 7. URL + QUERYSTRING */
const parsedUrl = url.parse('https://example.com/page?name=Jeetendra&age=54');
console.log("URL:", parsedUrl.query);
console.log("Querystring parsed:", querystring.parse(parsedUrl.query));


/* 8. STREAM */
const stream = new Readable({
  read() {
    this.push("Streaming some data...\n");
    this.push(null);
  }
});
stream.pipe(process.stdout);


/* 9. ZLIB (compress text) */
zlib.gzip("Hello compression!", (err, result) => {
  console.log("ZLIB: Compressed length =", result.length);
});


/* 10. READLINE */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// This won't block; just show example
rl.question("Type something: ", answer => {
  console.log("READLINE: You typed:", answer);
  rl.close();
});


/* 11. CHILD PROCESS */
exec('node -v', (err, stdout) => {
  console.log("CHILD PROCESS: Node version =", stdout.trim());
});


/* 12. HTTP SERVER */
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello from HTTP server!");
}).listen(3000, () => console.log("HTTP: Listening on port 3000"));


/* 13. HTTPS REQUEST (example to fetch google.com) */
https.get('https://www.google.com', res => {
  console.log("HTTPS: Status Code =", res.statusCode);
});


