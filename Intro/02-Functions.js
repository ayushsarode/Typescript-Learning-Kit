"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//NUMBER
function addTwo(num) {
    return num + 7;
}
console.log(addTwo(3)); // Logs: 10
console.log(addTwo); // Logs: [Function: addTwo]
//STRING
function UpperCase(input) {
    return input.toUpperCase();
}
console.log(UpperCase("I love to code"));
function SignUpUser(name, email, password, isPaid) { }
SignUpUser("Ayush", "ayushyadayada@gmail.com", "3873hff", false);
//if we have to call two parameters out of 3
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser("ayush", "ayush@gmail.com");
