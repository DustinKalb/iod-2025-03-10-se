//Grabs the number of sides selected by the user
function diceInput() {
  let sides = document.getElementById("numSides").value;
  return sides;
}

//Randomly generates a number depending on selected dice
function diceRoll(a) {
  return Math.floor(Math.random() * a) + 1;
}

//Tests to make sure result is an actual number on the die using d6, d12, & d20
if (diceRoll(6) < 1 || diceRoll(6) > 6) {
  throw error;
}
if (diceRoll(12) < 1 || diceRoll(12) > 12) {
  throw error;
}
if (diceRoll(20) < 1 || diceRoll(20) > 20) {
  throw error;
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
