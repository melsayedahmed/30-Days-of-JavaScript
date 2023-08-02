// Link in Leetcode
// https://leetcode.com/problems/cache-with-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


var TimeLimitedCache = function() {
    this.pairs = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const vol = this.pairs.get(key);
    const ans = vol && (vol !== -1) ? true : false
    this.pairs.set(key, {
        val: value,
        dur: duration,
        index: (vol?.index ?? 0) + 1,
    });
    const lll = (duration, ind) => {
        setTimeout(() => {
            const volIn =  this.pairs.get(key);
            if (ind === volIn.index) {
                this.pairs.set(key, {
                    ...volIn,
                    val: -1
                });
                return ans;
            }
            lll(volIn.dur, volIn.index)
        }, duration)
    }
    lll(duration, this.pairs.get(key).index);
    return ans;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.pairs.get(key)?.val ?? -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let sum = 0;
    for (let [key, value] of this.pairs) {
        if (value.val !== -1) sum++;
    }
    return sum;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */