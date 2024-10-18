const fs = require("fs");
const path = require("path");

// Create a write stream to the log file
const logFilePath = path.join(__dirname, "application.log"); // Log file path
const logStream = fs.createWriteStream(logFilePath, { flags: "a" }); // 'a' means append mode

// Override console.log to write to both the console and the log file
console.log = function (message) {
  const logMessage = `${new Date().toISOString()} - ${message}\n`; // Log with timestamp
  logStream.write(logMessage); // Write to log file
  process.stdout.write(logMessage); // Also write to console (optional)
};

// Example usage of console.log
// console.log('Server started successfully');
// console.log('Some important log message');

module.exports = console.log;
