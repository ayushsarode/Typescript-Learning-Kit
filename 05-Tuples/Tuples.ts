//  a tuple is a fixed-size, ordered list of elements, where each element can have a different data type and its position in the tuple is statically defined.

let User: [string, number, boolean];
User = ["as", 256, true];

User[1] = 536;

console.log(User);

// new element doesnt follow tuple

type rgba = [number, string];

const NewRgbaColor: rgba = [151, "as"];

NewRgbaColor[1] = "47";
