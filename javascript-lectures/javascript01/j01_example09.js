// npm install prompt
const prompt = require("prompt");

prompt.start();

console.log("Before prompt");

prompt.get("name", function(err, result) {
    console.log("Your name is", result.name);
    console.log("After prompt");
});