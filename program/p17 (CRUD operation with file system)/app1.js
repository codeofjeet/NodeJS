const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt");

// CREATE – Write data to a file
function createFile(content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error creating file:", err);
    } else {
      console.log("File created successfully");
    }
  });
}

// READ – Read data from a file
function readFile() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      console.log("File content:");
      console.log(data);
    }
  });
}

// UPDATE – Update (append) data to a file
function updateFile(content) {
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error("Error updating file:", err);
    } else {
      console.log("File updated successfully");
    }
  });
}

// DELETE – Delete the file
function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("File deleted successfully");
    }
  });
}

// --------- Function Calls ---------
createFile("Hello, this is my file.\n");
setTimeout(readFile, 1000);
setTimeout(() => updateFile("This line was added later.\n"), 2000);
setTimeout(readFile, 2500);
setTimeout(deleteFile, 3000);
