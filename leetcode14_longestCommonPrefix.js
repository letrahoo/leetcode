/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  const firstStr = strs[0];
  let res = '';
  let index = 0;
  let currentChar;
  outLoop:
  while (currentChar = firstStr[index]) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][index] !== currentChar) {
        break outLoop;
      }
    }
    res += currentChar;
    index += 1;
  }
  return res;
};