// 1.
function ucFirstLetters(words) {
  return words
    .split(" ")
    .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("los angeles"));

// 2.
function truncate(myString, maxLength) {
  let maxLengthAdj = maxLength++;
  return myString.length > maxLength
    ? myString.slice(0, maxLengthAdj) + "..."
    : myString;
}

console.log(truncate("This text will be truncated if it is too long", 25));

// 3.
const animals = ["Tiger", "Giraffe"];
animals.push("Bat", "Horse");
animals.unshift("Elephant", "Badger");
animals.sort();

function replaceMiddleAnimal(newValue) {
  if (animals.length % 2 == 0) {
    let middle = animals.length / 2;
    animals[middle] = newValue;
    animals[middle - 1] = newValue;
    return animals;
  }
  let middle = animals.length / 2;
  animals[middle - 0.5] = newValue;
  return animals;
}

function findMatchingAnimals(beginsWith) {
  let matchingAnimals = animals.filter(
    (animals) => animals.charAt(0) == beginsWith
  );
  return matchingAnimals;
}

console.log(animals);
console.log(replaceMiddleAnimal("Dog"));
console.log(findMatchingAnimals("B"));

// 4.
function camelCase(cssProp) {
  let noDash = cssProp
    .split("-")
    .map((cssProp) => cssProp.charAt(0).toUpperCase() + cssProp.slice(1))
    .join("");
  return noDash.charAt(0).toLowerCase() + noDash.slice(1);
}

//function camelCase(cssProp) {
//  let noDash = cssProp.split("-");
//  let newCssProp = "";
//  for (let i = 0; i < noDash.length; i++) {
//   newCssProp +=
//      i == 0
//        ? noDash[i]
//        : noDash[i].charAt(0).toUpperCase() + noDash[i].slice(1);
//  }
//  return newCssProp;
//}

//function camelCase(cssProp) {
//  let noDash = cssProp.split("-");
//  let newCssProp = "";
//  for (let i = 0; i < noDash.length; i++) {
//    if (i == 0) {
//      newCssProp += noDash[i];
//    } else {
//      newCssProp += noDash[i].charAt(0).toUpperCase() + noDash[i].slice(1);
//    }
//  }
//  return newCssProp;
//}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

// 5.
// 5a. Seems like the initial code returned strings instead of numbers which were concatenated
let twentyCents = 0.2;
let tenCents = 0.1;

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

function currencyAddition(float1, float2) {
  let solution = Number(float1) + Number(float2);
  return solution.toFixed(2);
}

function currencyOperation(float1, float2, operation) {
  switch (operation) {
    case "addition":
      let solution1 = Number(float1) + Number(float2);
      return solution1.toFixed(2);
    case "subtraction":
      let solution2 = Number(float1) - Number(float2);
      return solution2.toFixed(2);
    case "division":
      let solution3 = Number(float1) / Number(float2);
      return solution3.toFixed(2);
    case "multiplication":
      let solution4 = Number(float1) * Number(float2);
      return solution4.toFixed(2);
    default:
      "Please double check your inputs!";
  }
}

console.log(currencyAddition(fixedTwenty, fixedTen));
console.log(currencyOperation(fixedTwenty, fixedTen, "multiplication"));

// 6.
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const favCharacters = ["Naruto", "Simon", "Mob", "Stark", "Naruto"];

function unique(duplicateArray) {
  const newArray = new Set(duplicateArray);
  return newArray;
}

console.log(unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(favCharacters));

// 7.
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(bookId) {
  let result = books.find((books) => books.id == bookId);
  return result.title;
}

function getOldBooks(yearsOld) {
  let result = books.filter((books) => books.year < yearsOld);
  return result;
}

function addGenre(newGenre) {
  const result = books.map((books) => ({ ...books, genre: newGenre }));
  return result;
}

console.log(getBookTitle(2));
console.log(getOldBooks("1950"));
console.log(addGenre("classic"));

// 8.
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "9999999999");

const phoneBookDEF = new Map();
phoneBookDEF.set("Dustin", "0463878953");
phoneBookDEF.set("Ethan", "0473852455");
phoneBookDEF.set("Freya", "0485827399");

function printPhoneBook(contacts) {
  for (let item of contacts) {
    console.log(item);
  }
}

const phoneBookABCDEF = new Map([...phoneBookABC, ...phoneBookDEF]);

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookABCDEF);

// 9.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(addSalaries) {
  const salariesMap = new Map(Object.entries(addSalaries));
  let totalSalaries = 0;
  for (let value of salariesMap.values()) {
    totalSalaries += value;
  }
  return totalSalaries;
}

function topEarner(salaries) {
  let maxSalary = 0;
  let topEarner = null;
  for (const employer in salaries) {
    if (salaries.hasOwnProperty(employer)) {
      if (salaries[employer] > maxSalary) {
        maxSalary = salaries[employer];
        topEarner = employer;
      }
    }
  }
  return topEarner;
}

console.log(sumSalaries(salaries));
console.log(topEarner(salaries));

// 10.
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());

console.log(today.getHours() + " hours have passed so far today");
let minutes = today.getHours() * 60;
console.log(minutes + " minutes have passed so far today");
let seconds = minutes * 60;
console.log(seconds + " seconds have passed so far today");

function getAge(birthday, today) {
  const startDate = new Date(birthday);
  const endDate = new Date(today);

  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();
  const dateDiff = endDate.getDate() - startDate.getDate();

  console.log(
    `I am ${yearsDiff} years, ${monthsDiff} months and ${dateDiff} days old`
  );
}

getAge("2000-02-20", "2025-04-21");

function daysInBetween(date1, date2) {
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();
  const dateDiff = endDate.getDate() - startDate.getDate();

  const totalYears = yearsDiff * 365;
  const totalMonths = monthsDiff * 30;
  const TotalDays = totalYears + totalMonths + dateDiff;
  return TotalDays;
}

console.log(daysInBetween("2010-03-15", "2020-04-20"));
