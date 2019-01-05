/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const bucket = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      bucket[nums[i] - 1] = true;
    }
  }
  let res = 1;
  for (let i = 0; i < bucket.length; i++) {
    if (!bucket[i]) {
      return i + 1;
    }
  }
  return bucket.length + 1;
};
