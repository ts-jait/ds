/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target) {
  if (nums.length === 0) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let midPosition = Math.round((left + right) / 2);
    if (nums[midPosition] === target) {
      return midPosition;
    } else if (nums[midPosition] > target) {
      right = midPosition - 1;
    } else {
      left = midPosition + 1;
    }
  }
  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));
