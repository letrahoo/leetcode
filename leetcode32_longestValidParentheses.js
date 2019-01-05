/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function(s) {
  const stack = [0];
  let longestLen = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i + 1);
      continue;
    }
    
    stack.pop();
    
    if (!stack.length) {
      stack.push(i + 1);
      continue;
    }
    
    const curr = i + 1;
    const start = stack[stack.length - 1];
    longestLen = Math.max(longestLen, curr - start);   
  }
  
  return longestLen;
};