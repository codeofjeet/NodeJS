// __dirname and __filename
console.log("Directory Name:", __dirname);
console.log("File Name:", __filename);

// process object
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("Current Working Directory:", process.cwd());

// environment variable (example)
console.log("Environment Mode:", process.env.NODE_ENV);

// console
console.log("This is console log");

// setTimeout
setTimeout(() => {
  console.log("This message is shown after 2 seconds");
}, 2000);

// setInterval
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log("Interval count:", count);

  if (count === 3) {
    clearInterval(interval);
    console.log("Interval stopped");
  }
}, 1000);

// Buffer
const buffer = Buffer.from("Hello Node");
console.log("Buffer Data:", buffer);
console.log("Buffer to String:", buffer.toString());

// module and exports
console.log("Module Object:", module);
