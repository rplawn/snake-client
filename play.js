const connect = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  // \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}
};