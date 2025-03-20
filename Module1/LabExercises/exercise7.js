// this function returns the difference of two numbers
function sub(a, b) {
  return a - b;
}
if (sub(2, 1) != 1) {
  error;
}
if (sub(1, 1) < 0) {
  error;
}
if (sub(5, 6) > 0) {
  error;
}

// this function returns the sum of two numbers
function sum(a, b) {
  return a + b;
}
if (sum(2, 1) != 3) {
  error;
}
if (sum(0, 1) < 0) {
  error;
}
if (sum(0, -1) > 0) {
  error;
}

// this function returns the quotient of two numbers
function div(a, b) {
  return a / b;
}
if (div(2, 1) != 2) {
  error;
}
if (div(10, 2) == 0) {
  error;
}
if (div(10, -2) > 0) {
  error;
}

// this function returns the product of two numbers
function mul(a, b) {
  return a * b;
}
if (mul(2, 1) != 2) {
  error;
}
if (mul(0, 0) != 0) {
  error;
}
if (mul(1, -1) > 0) {
  error;
}

console.log(sub(2, 1));
console.log(sum(2, 1));
console.log(div(2, 1));
console.log(mul(2, 1));

// this function returns "Hello [NAME GOES HERE]"
function myFunction(name1) {
  return "Hello" + " " + name1;
}

console.log(myFunction("Dustin"));
