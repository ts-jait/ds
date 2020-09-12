/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const counts = Array(101).fill(0);
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]]++;
  }
  let pairs = 0;
  for (let j = 0; j < counts.length; j++) {
    pairs += (counts[j] * (counts[j] - 1)) / 2;
  }
  return pairs;
};
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
