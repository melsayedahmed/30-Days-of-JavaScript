// Link in Leetcode
// https://leetcode.com/problems/sort-by/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


var sortBy = function(arr, fn) {
  return arr.sort((a,b) => fn(a) - fn(b))
};