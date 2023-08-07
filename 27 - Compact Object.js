// Link in Leetcode
// https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


let getCompact = (val) => {
  if (Array.isArray(val)) {
      let resultArray = [];
      // console.log(`Iterating thru array: ${JSON.stringify(val)}`);
      for (let subVal of val) {
          let compactSub = getCompact(subVal);
          if (Boolean(compactSub)) {
              resultArray.push(compactSub);
          }
      }
      return resultArray;
  }

  if (typeof val === 'object' && val !== null) {
      let resultObject = {};
      // console.log(`Iterating thru object: ${JSON.stringify(val)}`);
      for (let [key, subVal] of Object.entries(val)) {
          // console.log(`Checking key ${key}: ${JSON.stringify(subVal)}`);
          let compactSub = getCompact(subVal);
          if (Boolean(compactSub)) {
              resultObject[key] = compactSub;
          }
      }
      return resultObject;
  }

  if (Boolean(val) === true) return val;
  return undefined;
}

var compactObject = function(obj) {
  // console.log(Object.entries(obj));
  return getCompact(obj);
};