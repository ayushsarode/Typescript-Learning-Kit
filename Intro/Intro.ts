// BASIC SYNTAX: let variable_name: type = value;

const Name: String = "Ayush";
console.log(Name);

//also method will show up only of that particular type

let Num: number;
Num = 9709.55;
console.log(Num);

let Answer: string;

// this is when you need the type the most as the system can't decide what type is the Answer, it sets to "any", so better set the type here
function getAnswer() {
  return "Hello world";
}

Answer = getAnswer();
console.log(Answer);

export {};
