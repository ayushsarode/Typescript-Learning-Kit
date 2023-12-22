// when we wanna set more than one type, it should be strict not so many types

let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "ash", id: 366 };
hitesh = { username: "AS", id: 366 };

// function getDBid(id: number | string) {
// here API calls code
//   console.log(`DB id is ${id}`);
// }

// getDBid(3);
// getDBid("26");

// if we want specific type for a particular property
function getDBid(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

const data: number[] = [1, 2, 4, 5]; // here you can't add string array to do that -

const data1: (number | string)[] = [1, 3, 4, 5, "55"];
