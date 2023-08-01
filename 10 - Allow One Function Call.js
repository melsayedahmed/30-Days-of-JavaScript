// Link in Leetcode
// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)

var once = function(fn) {
    let c=0; //counter variable
    return function(...args){
        if(c==0){ 
            c++;
            return fn(...args);
        }
        else{
        return undefined;
        }
    }
};