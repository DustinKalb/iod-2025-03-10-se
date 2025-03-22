//Grabs the number of sides selected by the user
function diceInput() {
  let sides = document.getElementById("numSides").value;
  return sides;
}

//Randomly generates a number depending on selected dice
function diceRoll(a) {
  return Math.floor(Math.random() * a) + 1;
}

//Creates a result, and provides it to the user via text that reads "You rolled a ___"
function diceResult() {
  let sides = diceInput();
  let result = diceRoll(sides);
  document.getElementById("result").innerText = "You rolled a " + result;
}

module.exports = {
  diceRoll,
  diceResult,
};
