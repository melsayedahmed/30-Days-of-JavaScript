// Link in Leetcode
// https://leetcode.com/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


Array.prototype.groupBy = function(fn) {
    const grouped = {},length = this.length;
    for(let i=0;i<length;i++){
      const id = fn(this[i]);
      if(grouped[id] === undefined) grouped[id] = [];
      grouped[id].push(this[i]);
    }
    return grouped;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */