// Enums in TypeScript allow you to define a set of named constant values for better code readability and maintainability.

// restricting user choice
enum Seatchoice {
  AISLE = 10,
  MIDDLE, // its 11
  WINDOW, // its 12 by def
}

const UserSeat = Seatchoice.AISLE;

console.log(UserSeat);
