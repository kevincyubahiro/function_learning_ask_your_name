// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function ask1() {
//     rl.question("Do you have a problem? Type T if yes or F if not: ", (data) => {
//         if (data.toLowerCase() === "f") {
//             console.log('Interface closed');
//             rl.close(); 
//         } else if (data.toLowerCase() === "t") {
//             ask2(); 
//         } else {
//             console.log("Invalid input, please enter T or F.");
//             ask1(); 
//         }
//     });
// }

// function ask2() {
//     rl.question("Try again. Make research after. Type T if you're ready or F if not: ", (data) => {
//         if (data.toLowerCase() === "t") {
//             console.log("Closing...");
//             rl.close();
//         } else if (data.toLowerCase() === "f") {
//             console.log("You chose not to continue.");
//             rl.close(); 
//         } else {
//             console.log("Invalid input, please enter T or F.");
//             ask2();
// }


// ask1();
// // 