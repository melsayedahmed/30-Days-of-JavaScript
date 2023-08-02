// Link in Leetcode
// https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


async function sleep(millis) {
  await new Promise(resolve => setTimeout(resolve, millis));
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/