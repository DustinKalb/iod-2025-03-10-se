let myArray = ["Naruto", "Sasuke", "Sakura", "Kakashi", "Itachi"];

myArray[0] = "Not Naruto";
myArray[3] = "Not Kakashi";

myArray.unshift("Jiraiya");
myArray.pop();

console.log(myArray);
