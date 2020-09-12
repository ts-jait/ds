/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const shuffledArray = [];
  for (let i = 0; i < nums.length / 2; i++) {
    shuffledArray.push(nums[i]);
    shuffledArray.push(nums[i + n]);
  }
  return shuffledArray;
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
