//NUMBER
function addTwo(num: number): number {
  return num + 7;
}

// console.log(addTwo(3)); // Logs: 10
// console.log(addTwo); // Logs: [Function: addTwo]

//STRING
function UpperCase(input: string) {
  return input.toUpperCase();
}
// console.log(UpperCase("I love to code"));

function SignUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

SignUpUser("Ayush", "ayushyadayada@gmail.com", "3873hff", false);

//if we have to call two parameters out of 3
let loginUser = (name: string, email: string, isPaid: boolean = true) => {};

loginUser("ayush", "ayush@gmail.com");

// returning more than one type

function GetVal(MyVal: number) {
  if (MyVal > 5) {
    return true;
  } else {
    return "Incorrect";
  }
}
// now in this example there are three types num, string and boolean. for num I have assigned it in parameter.w

const AnimeCharacter = ["Eren", "Mikasa", "CaptionLevi", "Armin"];

AnimeCharacter.map((Character): string => {
  return `AOT Character ${Character}`;
});

// selecting 0 index

// const AnimeCharacter = ["Eren", "Mikasa", "CaptionLevi", "Armin"];

// AnimeCharacter.map((Character, index) => {
//   if (index === 0) {
//     console.log(`Fav one is ${Character}`);
//   }
// });

//  VOID TYPE - it does not allow to return
function consoleError(ErrMsg: String): void {
  console.log(ErrMsg);
  // return 1;
  // return will give an error
}

//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function handleError(ErrMessage: string): never {
  throw new Error(ErrMessage);
}

export {};
