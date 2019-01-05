/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const Stack = [];
  const parantheses = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const len = s.length;
  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      Stack.push(char);
    } else if ((char === ')' || char === '}' || char === ']')
      && Stack.pop() !== parantheses[char]) {
        return false;    
    }
  }
  return Stack.length === 0;
};