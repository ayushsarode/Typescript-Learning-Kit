// BASIC SYNTAX: let variable_name: type = value;

// STRING
const Name: String = "Ayush";
console.log(Name);

//also method will show up only of that particular type

//NUMBER
let Num: number;
Num = 9709.55;
console.log(Num);

// ANY - can say it is a marker

// this is when you need the type the most as the system can't decide what type is the Answer, it sets to "any", so better set the type here. IT SHOULD HAVE STRICT TYPE

// let Answer; // if we didn't set a type, it will show "any" type

let Answer: string;

function getAnswer() {
  return "Hello world";
}
// this is not possible as I already declared Datatype
// function getAnswer() {
//     return 9;
//   }

Answer = getAnswer();
console.log(Answer);

export {};
