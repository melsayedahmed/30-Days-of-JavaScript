// Link in Leetcode
// https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */