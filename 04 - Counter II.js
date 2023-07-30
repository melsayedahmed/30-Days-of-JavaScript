// Link in Leetcode
// https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)

var createCounter = function(init) {
    let presentCount = init;
  
    function increment() {
      return ++presentCount;
    }
  
    function decrement() {
        return --presentCount;
    }
  
    function reset() {
        return (presentCount = init);
    }
  
    return { increment, decrement, reset };
  };