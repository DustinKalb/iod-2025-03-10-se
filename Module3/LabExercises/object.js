// 1.
function ucFirstLetters(words) {
  return words
    .split(" ")
    .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("los angeles"));
