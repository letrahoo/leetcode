/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let digit = 0, res = 0;
  while (x !== 0) {
    digit = x % 10;
    res = res * 10 + digit;
    x = (x - digit) / 10;
  }
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
    return 0;
  } else {
    return res;
  }
};
