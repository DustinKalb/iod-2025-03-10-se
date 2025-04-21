// 1.
console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(!true); // false
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // "  -9  5"
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(" \t \n" - 2); // -2

// 2.
// three and four are strings, therefore + will only concatenate them
// lessThan2 compares 30 and 4 as strings, and since "3" is less than "4", 30 is less
let three = "3";
let four = "4";
let thirty = "30";

// what is the value of the following expressions?
let addition = Number(three) + Number(four); // one solution is two surround three and four with Number()
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;

let lessThan1 = three < four;
let lessThan2 = Number(thirty) < Number(four); // this problem can be solved the same way

// another solution: replace the values with numbers instead of strings
// "3" -> 3, "4" -> 4, "30" -> 30

// 3.
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true"); // will print: non-empty string
if (null) console.log("null is true");
if (-1) console.log("negative is true"); // will print: non-zero number
if (1) console.log("positive is true"); // will print: non-zero number

// 4.
// += will concatenate the produced value with the existing one
let a = 6,
  b = 8;
let result = `${a} + ${b} is `;

result += a + b < 10 ? "less than 10" : "greater than 10";

console.log(result);

// 5.
const getGreeting = function (name) {
  return "Hello " + name + "!";
};

const getGreeting2 = (name) => {
  return "Hello " + name + "!";
};

console.log(getGreeting("Dustin"));
console.log(getGreeting2("Dustin"));

// 6.
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) => {
    return person.numFingers == 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.";
  },
};

inigo.greeting(westley);
inigo.greeting(rugen);

// 7.
const basketballGame = {
  score: 0,
  numFouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foul() {
    this.numFouls++;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  fullTime() {
    console.log("Fulltime score is " + this.score);
    return this;
  },
};

//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .foul()
  .halfTime()
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .foul()
  .fullTime();

// 8.
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
const orlando = {
  name: "Orlando",
  population: 320_742,
  state: "FL",
  founded: "22 September 1875",
  timezone: "Eastern",
};

function printInfo(city) {
  for (let key in city) {
    console.log(`${key}: ${city[key]}`);
  }
}

printInfo(sydney);
printInfo(orlando);

// 9.
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

const moreSports = [...teamSports];
moreSports.push("Football");
moreSports.unshift("Baseball");

let dog2 = dog1;
dog2 = "Spots";

const cat2 = { ...cat1, name: "Rocket Launcher" };

console.log(teamSports);
console.log(dog1);
console.log(cat1);

// 10.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDrive() {
    return this.age >= 16;
  }
}

let user1 = new Person("Dustin", 25);
let user2 = new Person("Cheyenne", 24);
let user3 = new Person("Sophie", 15);

function printPerson(user) {
  for (let key in user) {
    console.log(`${key}: ${user[key]}`);
  }
}

printPerson(user1);
console.log(user1.canDrive());
printPerson(user2);
console.log(user2.canDrive());
printPerson(user3);
console.log(user3.canDrive());
