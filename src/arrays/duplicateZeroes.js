/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let countDuplicates = 0;
  let length = arr.length - 1;
  for (let i = 0; i <= length - countDuplicates; i++) {
    if (arr[i] === 0) {
      if (i === length - countDuplicates) {
        arr[length] = 0;
        length--;
        break;
      }
      countDuplicates++;
    }
  }
  for (let i = length - countDuplicates; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + countDuplicates] = 0;
      countDuplicates--;
      arr[i + countDuplicates] = 0;
    } else {
      arr[i + countDuplicates] = arr[i];
    }
  }
};

// console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
console.log(duplicateZeros([8, 4, 5, 0, 0, 0, 0, 7]));
// console.log(duplicateZeros([1,2,3]));
