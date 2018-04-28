/**
 * @param {string} s
 * @return {string[][]}
 */
let partition = function(s) {
    let arr1 = [];
    let arr2 = [];
    backtrace(arr1, arr2, s, 0);
    return arr1;
};

let checkPalindrome = function(s) {
  let str = String(s);
  for(let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if(str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome('12321'));

let backtrace = function(arr1, arr2, string, start) {
  if(start === string.length) {
    arr1.push([].concat(arr2));
  } 
  else {
    for(let i = start; i < string.length; i++){
      if(checkPalindrome(string.substring(start, i + 1))){
          arr2.push(string.substr(start, i - start + 1));
          backtrace(arr1, arr2, string, i + 1);
          arr2.pop();
      }
    }
  }
}

console.log(partition('aab'));