// Link in Leetcode
// https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


var join = function(arr1, arr2) {
  const newObj  = {};
 const arrs = [...arr1, ...arr2]
 for(let index =0; index<=arrs.length-1; index++){
     newObj[arrs[index].id] ={ ...newObj[arrs[index].id],
      ...arrs[index]};
 };
 return Object.values(newObj)
};