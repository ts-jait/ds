/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandy = Math.max(...candies);
  const candyList = [];
  candies.forEach((candy, index) => {
    candyList.push(extraCandies + candy >= maxCandy);
  });
  return candyList;
};

//console.log(kidsWithCandies([2,3,5,1,3]));
