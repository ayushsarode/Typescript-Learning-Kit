// when we wanna set more than one type, it should be strict not so many types
var score = 33;
score = 44;
score = "55";
var hitesh = { name: "hitesh", id: 366 };
hitesh = { username: "AS", id: 366 };
function getDBid(id) {
    //here API calls code
    console.log("DB id is ".concat(id));
}
getDBid(3);
getDBid("26");
