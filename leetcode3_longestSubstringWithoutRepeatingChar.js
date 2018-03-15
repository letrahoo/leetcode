//Given a string, find the length of the longest substring without repeating characters.

// Examples:

    // Given "abcabcbb", the answer is "abc", which the length is 3.
    // Given "bbbbb", the answer is "b", with the length of 1.
    // Given "pwwkew", the answer is "wke", with the length of 3.
    // Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) {
        return 0;
    }
    var maxLength = 0, thisLength = 0, thisIndex = 0, thisHead = 0, storeArr = [];
    while(true) {
        while(storeArr[s[thisIndex]] === undefined) {
            storeArr[s[thisIndex]] = thisIndex;
            thisLength += 1;
            if(thisLength > maxLength) {
                maxLength = thisLength;
            }
            thisIndex += 1;
            if(thisIndex === s.length) {
                return maxLength;
            }
        }
        if(thisIndex === s.length - 1 ) {
            return maxLength;
        }
        thisLength += thisHead;
        var removeHead = thisHead,
            removeEnd = storeArr[s[thisIndex]];
        for(let i = removeHead; i <= removeEnd; i++) {
            delete storeArr[s[i]];
        }
        storeArr[s[removeEnd]] = thisIndex;
        thisHead = removeEnd + 1;
        thisLength -= removeEnd;
        thisIndex += 1;
    }
};

//Approach 2 Sliding Window
var lengthOfLongestSubstringSlidingWindow = function(s) {
    var len = s.length, maxLength = 0, thisHead = 0, thisIndex = 0, storeSet = new Set();
    while(thisIndex < len && thisHead < len) {
        if(!storeSet.has(s[thisIndex])){
            storeSet.add(s[thisIndex++]);
            maxLength = Math.max(maxLength, thisIndex - thisHead);
        }
        else {
            //删除浪费了循环时间,占用了 n steps, 可优化(见下)
            storeSet.delete(s[thisHead++]);
        }
    }
    return maxLength;
}

//Approach 3 Sliding Window Optimized
var lengthOfLongestSubstringSlidingWindowOptimized = function(s) {
    var maxLength = 0, thisHead = 0, thisIndex = 0, len = s.length, hash = {};
    while (thisIndex < len) {
        if (hash[s[thisIndex]] !== undefined) {
            let temp = hash[s[thisIndex]];
            //不采用删除的方式，比较当前头与重复字符的哈希值，更大者作为头，优化了循环次数
            if(temp + 1 > thisHead) {
                thisHead = temp + 1;
            };
        }
        if(maxLength < thisIndex - thisHead + 1) {
            maxLength = thisIndex - thisHead + 1;
        }
        hash[s[thisIndex]] = thisIndex++;
    }
    return maxLength;
};

//Approach 4 Assuming ASCII 128
var lengthOfLongestSubstringAscii = function(s) {
    var len = s.length, maxLength = 0, storeArr = Array.apply(null, Array(128)).map(function() { return -1 });
    for(let thisHead = 0, thisIndex = 0; thisIndex < len; thisIndex++ ) {
        thisHead = Math.max(thisHead, storeArr[s[thisIndex].charCodeAt()]);
        maxLength = Math.max(maxLength, thisIndex - thisHead + 1);
        storeArr[s[thisIndex].charCodeAt()] = thisIndex + 1;
    }
    return maxLength;
}

console.log(lengthOfLongestSubstringAscii("tmmzuxt"));