function printFibonacciTimeouts(start, limit) {
  let counter = 1;
  let olderNum = 0;
  let oldNum = 0;
  return setTimeout(function addNum(current) {
    result = start + olderNum + oldNum;
    olderNum = oldNum;
    oldNum = result;
    console.log(result);
    start = 0;
    if (current < limit) setTimeout(addNum, current + 1);
  }, counter);
}

printFibonacciTimeouts(1, 10);
