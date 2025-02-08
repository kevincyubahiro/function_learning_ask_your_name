const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,  // Corrected the case here
    output: process.stdout, // Corrected the property name to 'output'
});

rl.question("What is your name? ", (data) => {
    console.log("are you sure " + data + "?\n");
    rl.close();
});

rl.on("close", () => {
    console.log("Closed");
});
