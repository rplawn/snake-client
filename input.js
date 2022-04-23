const { moveCommands, messages } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
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
if (moveCommands[key]) {
  connection.write(`Move: ${moveCommands[key]}`)
}
if (messages[key]) {
  connection.write(`Say: ${messages[key]}`)
}
// if (key === 'w') {
//   connection.write("Move: up");
// }
// if (key === 'a') {
//   connection.write("Move: left");
// }
// if (key === 's') {
//   connection.write("Move: down");
// }
// if (key === 'd') {
//   connection.write("Move: right");
// }
};

module.exports = setupInput;