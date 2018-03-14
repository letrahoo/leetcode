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
// var lengthOfLongestSubstring = function(s) {
//     if(s.length === 0) {
//         return 0;
//     }
//     var maxLength = 0, thisLength = 0, thisIndex = 0, thisHead = 0, storeArr = [];
//     while(true) {
//         while(storeArr[s[thisIndex]] === undefined) {
//             storeArr[s[thisIndex]] = thisIndex;
//             thisLength += 1;
//             if(thisLength > maxLength) {
//                 maxLength = thisLength;
//             }
//             thisIndex += 1;
//             if(thisIndex === s.length) {
//                 return maxLength;
//             }
//         }
//         if(thisIndex === s.length - 1 ) {
//             return maxLength;
//         }
//         thisLength += thisHead;
//         var removeHead = thisHead,
//             removeEnd = storeArr[s[thisIndex]];
//         for(let i = removeHead; i <= removeEnd; i++) {
//             delete storeArr[s[i]];
//         }
//         storeArr[s[removeEnd]] = thisIndex;
//         thisHead = removeEnd + 1;
//         thisLength -= removeEnd;
//         thisIndex += 1;
//     }
// };

//代码优化 & 简化
var lengthOfLongestSubstring = function(s) {
    var maxLength = 0, thisHead = 0, thisIndex = 0, len = s.length, hash = {};
    while (thisIndex < len) {
        if (hash[s[thisIndex]] !== undefined) {
            let temp = hash[s[thisIndex]];
            if(temp + 1 > thisHead) {
                thisHead = temp + 1;
            };
        }
        if(maxLength < thisIndex - thisHead + 1) {
            maxLength = thisIndex - thisHead + 1
        }
        hash[s[thisIndex]] = thisIndex++;
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("tmmzuxt"));