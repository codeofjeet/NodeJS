// Synchronous Example
console.log("Start");

function syncTask() {
  for (let i = 0; i < 3; i++) {
    console.log("Synchronous task running...");
  }
}

syncTask();

console.log("End");

// Asynchronous Example (Using setTimeout)
console.log("1. Start");

setTimeout(() => {
  console.log("2. Asynchronous task completed");
}, 2000);

console.log("3. End");

// Asynchronous Example with Promise
function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 1500);
  });
}

console.log("Start");

asyncTask().then(result => {
  console.log(result);
});

console.log("End");

// Asynchronous Example with async/await
async function run() {
  console.log("Start");

  await new Promise(resolve =>
    setTimeout(resolve, 2000)
  );

  console.log("Async task finished");
  console.log("End");
}

run();
