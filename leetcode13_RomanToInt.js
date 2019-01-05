/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const len = s.length;
  let res = 0;
  const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  for (let sIndex = 0; sIndex < len - 1; sIndex++) {
      const curRoman = s[sIndex]
    if (map[curRoman] < map[s[sIndex + 1]]) {
      res -= map[curRoman];
    } else {
      res += map[curRoman];
    }
  }
  res += map[s[len - 1]];
  return res;
};
