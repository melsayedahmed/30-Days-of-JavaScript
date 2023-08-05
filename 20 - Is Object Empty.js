// Link in Leetcode
// https://leetcode.com/problems/is-object-empty/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


var isEmpty = function(obj) {
  return Object.keys(obj).length === 0 ? true : false;
};