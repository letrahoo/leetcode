/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if(nums == null || nums.length == 0) return 0;
  if(nums.length == 1) return 1;
  const len = nums.length;
  let count = 0;
  for(let i = 1 ; i < len; i++){
    if(nums[count] != nums[i]){
      count++;
      nums[count] = nums[i];
    }
  }
  return ++count;
};