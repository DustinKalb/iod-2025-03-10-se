// 1.
function makeCounter(start) {
  let currentCount = start;
  return function incrementBy(increment) {
    currentCount = currentCount + increment;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter(0);
let counter2 = makeCounter(1);

counter1(2); // 1
counter1(2); // 2
counter2(4);
counter2(4);

// 2.
// 2a. The four tests below will print in the opposite order from which they are typed.
//     They do this because of their individually set delays.
delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
let cancelledTimerId = setTimeout(delayMsg, 10000, "#5: Delayed by 10s");
clearTimeout(cancelledTimerId);

// 3.
function debounce(func, ms) {
  let timeoutId;
  return function cancelTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this);
    }, ms);
  };
}

function printMe2(msg) {
  console.log(msg);
}
const printMe = debounce(() => printMe2("hello"), 3000); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

// 4.
function printFibonacci(start, limit) {
  let counter = 1;
  let olderNum = 0;
  let oldNum = 0;
  return function addNum() {
    counter++;
    if (counter == limit) clearInterval(tickId);
    result = start + olderNum + oldNum;
    olderNum = oldNum;
    oldNum = result;
    console.log(result);
    start = 0;
    return result;
  };
}

//let fibonacci = printFibonacci(1, 10);

//let tickId = setInterval(() => fibonacci(), 1000);

function printFibonacciTimeouts(delay, limit, start) {
  let counter = 1;
  let olderNum = 0;
  let oldNum = 0;
  setTimeout(
    function addNum(current) {
      result = start + olderNum + oldNum;
      olderNum = oldNum;
      oldNum = result;
      console.log(result);
      start = 0;
      if (current < limit) setTimeout(addNum, delay, current + 1);
    },
    delay,
    counter
  );
}

printFibonacciTimeouts(2000, 10, 1);

// 5. "If a function relies on context (this) and is passed as a reference
// instead of being called directly, its context is lost.
// 5c. It uses the new value, as long as I change the call to "carClone".
// 5e. It does not use the new value, instead it uses the original.
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

const carClone = { ...car, year: 9999, model: "999" };

const boundCar = carClone.description.bind(car); //works

setTimeout(boundCar, 200);

// 6.

Function.prototype.delay = function (ms) {
  const originalFunction = this;
  return function (...args) {
    setTimeout(() => {
      originalFunction.apply(this, args);
    }, ms);
  };
};

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply.delay(500)(5, 5, 2, 2); // prints 25 after 500 milliseconds

// 7.
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

const myClock = new DigitalClock("my clock:");
myClock.start();

class PrecisionClock extends DigitalClock {
  precision = 1;
}

// ALARM CLOCK

class AlarmClock extends DigitalClock {
  alarm() {
    let alarm = "07:00";
    let date = new Date();
    let [hours, mins] = [date.getHours(), date.getMinutes()];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    let time = `${hours}:${mins}`;
    if (time === alarm) {
      this.beep();
    }
  }

  beep() {
    clearInterval(this.alarmTimer);
    clearInterval(myClock.timer);
    this.alarmTimer = null;
    myClock.timer = null;
    console.log("Wake Up");
  }

  alarmOn() {
    this.alarm();
    this.alarmTimer = setInterval(() => this.alarm(), 1000);
  }
}

const myAlarm = new AlarmClock();
myAlarm.alarmOn();

// 8.
function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}

function validateStringArg(func) {
  return function (...args) {
    for (let arg of args) {
      if (typeof arg !== "string") {
        throw new Error("Not a string!");
      }
    }
    return func(...args);
  };
}

// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);

try {
  console.log(validatedOrderItem("Apple Watch", "iPhone", "MacBook"));
} catch (error) {
  console.log("caught an error: " + error.message);
}

try {
  console.log(validatedOrderItem("iPad", 123));
} catch (error) {
  console.log("caught an error: " + error.message);
}

// 9.
function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 20 + 1);
    const ms = delay * 1000;
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, ms);
  });
}

randomDelay()
  .then((delay) => console.log(`Delay succeeded after ${delay} seconds passed`))
  .catch((delay) =>
    console.error(`Delay failed after ${delay} seconds passed`)
  );

// 10.
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'

import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLDataOriginal(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

async function fetchURLData(url) {
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

console.log("Testing valid URL with Original Function:");
fetchURLDataOriginal("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Original Success:", data))
  .catch((error) => console.error("Original Error:", error.message));

console.log("Testing valid URL with Async Function:");
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Async Success:", data))
  .catch((error) => console.error("Async Error:", error.message));

console.log("Testing INVALID URL with Original Function:");
fetchURLDataOriginal("https://jsonplaceholder.typicode.com/invalid-url")
  .then((data) => console.log("Original Success:", data))
  .catch((error) => console.error("Original Error:", error.message));

console.log("Testing INVALID URL with Async Function:");
fetchURLData("https://jsonplaceholder.typicode.com/invalid-url")
  .then((data) => console.log("Async Success:", data))
  .catch((error) => console.error("Async Error:", error.message));
