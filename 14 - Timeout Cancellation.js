// Link in Leetcode
// https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


const cancellable = function(fn, args, t) {
  // cancelFn function//
  const cancelFn = function (){
    clearTimeout(timer);
};
const timer = setTimeout(()=>{
    fn(...args)
}, t);
return cancelFn ;
};


/**
*  const result = []
*
*  const fn = (x) => x * 5
*  const args = [2], t = 20, cancelT = 50
*
*  const log = (...argsArr) => {
*      result.push(fn(...argsArr))
*  }
*       
*  const cancel = cancellable(fn, args, t);
*           
*  setTimeout(() => {
*     cancel()
*     console.log(result) // [{"time":20,"returned":10}]
*  }, cancelT)
*/