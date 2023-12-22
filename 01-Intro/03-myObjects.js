"use strict";
// not a good way
// const User = {
//   name: "Ayush",
//   email: "ayushsarode@gmail.com",
//   isActive: true,
// };
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: " 2532",
    name: "A",
    email: "ayush@gmail.com",
    isActive: true,
    // error is not giving bc of optina; property
};
myUser.email = "ayushchanged@gmail";
