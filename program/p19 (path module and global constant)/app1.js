const path = require("path");

const filePath = "/users/student/projects/node/index.js";

// basename
console.log("Base Name:", path.basename(filePath));

// dirname
console.log("Directory Name:", path.dirname(filePath));

// extension
console.log("Extension:", path.extname(filePath));

// join
const joinedPath = path.join("users", "student", "projects", "node");
console.log("Joined Path:", joinedPath);

// resolve
const resolvedPath = path.resolve("projects", "node", "index.js");
console.log("Resolved Path:", resolvedPath);

// normalize
const messyPath = "/users//student/../student/node//index.js";
console.log("Normalized Path:", path.normalize(messyPath));

// parse
const parsedPath = path.parse(filePath);
console.log("Parsed Path Object:", parsedPath);

// format
const formattedPath = path.format({
  root: "/",
  dir: "/users/student/projects/node",
  base: "app.js",
});
console.log("Formatted Path:", formattedPath);

// isAbsolute
console.log("Is Absolute:", path.isAbsolute(filePath));

// separator
console.log("Path Separator:", path.sep);
