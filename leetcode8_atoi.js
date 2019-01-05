/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = Math.pow(-2, 31);

var myAtoi = function(str) {
  const res = parseInt(str);
  if (isNaN(res)) {
    return 0;
  }
  if (res > INT_MAX) {
    return INT_MAX;
  }
  if (res < INT_MIN) {
    return INT_MIN;
  }
  return res;
};