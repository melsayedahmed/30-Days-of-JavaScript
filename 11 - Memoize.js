// Link in Leetcode
// https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)

function memoize(fn) {
    
    const cache = {};
   
    return function(...args) {
     const key = JSON.stringify(args);
     
     if (key in cache) {
       return cache[key];
     }
     
     const result = fn.apply(this, args);
     cache[key] = result;
     
     return result;
   }
   
 }
 
 
 const memoizedSum = memoize(function(a, b) {
   return a + b;
 });
 
 console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
 console.log(memoizedSum(2, 3)); // Output: 5