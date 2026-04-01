const path = require('path');
const file = 'file/abc.txt'

console.log(path.extname(file));
console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.resolve('file','abc.txt'));
console.log(path.join('file','abc.txt'));
console.log(path.normalize('/file/abc.txt'));
console.log(path.isAbsolute(file));

console.log(__dirname);
console.log(__filename)