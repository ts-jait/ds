var runningSum = function (nums) {
  let totalValue = 0;
  const numMap = nums.map((value, current) => {
    return (totalValue += value);
  });
  return numMap;
};
// console.log(runningSum([1,2,3,4]));
