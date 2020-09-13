var numberOfSteps = function (num) {
  let count = 0;
  while (num !== 0) {
    if (num % 2 !== 0) {
      num = num - 1;
    } else {
      num = num >> 1;
    }
    count++;
  }
  return count;
};

// console.log(numberOfSteps(14));