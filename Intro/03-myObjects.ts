// not a good way
// const User = {
//   name: "Ayush",
//   email: "ayushsarode@gmail.com",
//   isActive: true,
// };

//returning expected typed object
// function createUser({ name: string, isPaid: boolean }) {
//   return { name: "ayush", isPaid: false };
// }
// let newUser = { name: "ayush", isPaid: false, email: "ayush@gmail.com" };
// createUser(newUser);

//This uses an arrow function (=>) and returns the object directly within the parentheses. The type annotation { name: string; price: number } indicates the expected structure of the returned value.
// function createCourse(): { name: string; price: number } {
//   return { name: "Nodejs", price: 299 };
// }

//Type Aliases
// type Credentials = {
//   name: string;
//   email: string;
//   isGoogleAuth: Boolean;
// };

// function createUser(User: Credentials): Credentials {
//   return { name: "", email: "", isGoogleAuth: true };
// }

// createUser({ name: "", email: "", isGoogleAuth: true });

// type StudentLog = {
//   name: string;
//   id: number;
//   Branch: string;
// };

// function createStudentID(Student: StudentLog): StudentLog {
//   return {
//     name: "ayush",
//     id: 35,
//     Branch: "ETC",
//   };
// }

// console.log(
//   createStudentID({
//     name: "ayush",
//     id: 35,
//     Branch: "ETC",
//   })
// );

// READONLY PROPERTIES

// Properties can also be marked as readonly for TypeScript. While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type-checking.

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; //the ? symbol is used to denote optional properties in object types. When a property in an interface or type is marked with ?, it means that the property is not required.
};

let myUser: User = {
  _id: " 2532",
  name: "A",
  email: "ayush@gmail.com",
  isActive: true,
  // error is not giving bc of optina; property
};

myUser.email = "ayushchanged@gmail";
// myUser._id = 47;
// we can change the email but not _id as we have given readonly property.

// merging two types properties in one type
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    readonly cvv: number;
  };

export {};
