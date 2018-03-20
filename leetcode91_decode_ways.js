// A message containing letters from A-Z is being encoded to numbers using the following mapping:
// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26

// Given an encoded message containing digits, determine the total number of ways to decode it.

// For example,
// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

// The number of ways decoding "12" is 2.

/**
 * @param {string} s
 * @return {number}
 */

 //使用动态规划
const numDecodings = function(s) {
  if(!s || s[0] === '0') {
    return 0;
  }
  var storeArr = [1, 1], len = s.length;
  for(let i =2; i <= len; i++) {
    let tmp = parseInt(s.substring(i - 1, i));
    if(tmp === 0) {
      storeArr[i] = 0;
    } else {
      storeArr[i] = storeArr[i - 1];
    }
    if(s[i - 2] !== '0') {
      tmp = parseInt(s.substring(i - 2, i));
      if(0 < tmp && tmp <= 26) {
        storeArr[i] += storeArr[i - 2];
      }
    }
  }
  return storeArr[s.length];
};

const str = "12423";

console.log(numDecodings(str));