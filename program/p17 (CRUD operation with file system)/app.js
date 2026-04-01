const fs = require('fs');
const operation = process.argv[2];
if(operation == "write"){
    const name = process.argv[3];
    const content = process.argv[4];
    const fileName = 'file/' + name +'.txt';
    fs.writeFileSync(fileName, content);
}else if(operation == "read"){
    const name = process.argv[3];
    const fileName = 'file/' + name +'.txt';
    const fileData = fs.readFileSync(fileName, 'utf-8');
    console.log(fileData);
}else if(operation == "update"){
    const name = process.argv[3];
    const content = process.argv[4];
    const fileName = 'file/' + name +'.txt';
     fs.appendFileSync(fileName, content);
     const updateData = fs.readFileSync(fileName, 'utf-8');
    console.log(updateData);
}else if(operation == "delete"){
    const name = process.argv[3];
    const fileName = 'file/' + name +'.txt';
    fs.unlinkSync(fileName);
}else{
    console.log("Enter Wrong Operation")
}