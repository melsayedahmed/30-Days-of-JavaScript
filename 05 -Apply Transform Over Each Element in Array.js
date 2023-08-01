// Link in Leetcode
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


var map = function(arr, fn) {
    const ans=[];
    for(let i=0;i<arr.length;i++)
    ans[i]=fn(arr[i],i);
    return ans;
};