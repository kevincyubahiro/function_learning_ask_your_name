import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask1() {
    rl.question("Do you have a problem? Type T if yes or F if not: ", (data) => {
        if (data.toLowerCase() === "f") {
            console.log('Interface closed');
            rl.close(); // Close the interface
        } else if (data.toLowerCase() === "t") {
            ask2(); // Call the next question if "T"
        } else {
            console.log("Invalid input, please enter T or F.");
            ask1(); // Re-ask the question if the input is invalid
        }
    });
}

function ask2() {
    rl.question("Try again. Make research after. Type T if you're ready or F if not: ", (data) => {
        if (data.toLowerCase() === "t") {
            console.log("Closing...");
            rl.close(); // Close the interface when user types "T"
        } else if (data.toLowerCase() === "f") {
            console.log("You chose not to continue.");
            rl.close(); // Close the interface if the user doesn't want to continue
        } else {
            console.log("Invalid input, please enter T or F.");
            ask2(); // Re-ask the second question if the input is invalid
        }
    });
}

// Start asking the first question
ask1();
