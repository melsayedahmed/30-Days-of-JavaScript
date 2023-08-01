// Link in Leetcode
// https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


var filter = function(arr, fn) {
    let size = 0;
   for (let i = 0; i < arr.length; ++i) {
       if (fn(arr[i], i)) {
           arr[size] = arr[i];
           size++;
       }
   }
   // Ensure array is of length size
   while (arr.length > size) {
       arr.pop();
   }
   return arr
};