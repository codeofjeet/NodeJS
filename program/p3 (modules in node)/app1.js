const fs = require('fs');
const os = require('os');
const {log, warn} = require('console');

console.log(os.platform());
console.log(os.hostname());
console.log("Node js");
console.log(process.cwd());
console.warn(process.pid);

log("Node js");
warn("React js");