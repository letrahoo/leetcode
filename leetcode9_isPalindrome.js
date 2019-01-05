/**
*  @param {number} x
*  @return {boolean}
*/
const isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let origin = x;
  let palindrome = 0, digit = 0;
  while (origin !== 0) {
    digit = origin % 10;
    palindrome = digit + palindrome * 10;
    origin = (origin - digit) / 10;
  }
  return palindrome === x;
};
