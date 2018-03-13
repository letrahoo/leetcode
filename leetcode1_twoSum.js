// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
//     Given nums = [2, 7, 11, 15], target = 9,
//     Because nums[0] + nums[1] = 2 + 7 = 9,
//     return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const testNums = [2, 7, 11, 15];
const testTarget = 9;

var twoSum = function(nums, target) {
    let arr = [],
    obj = {},
    len = nums.length;
    for(let i = 0; i < len; i++ ) {
        if(obj[target - nums[i]] !== undefined) {
            arr[0] = obj[target - nums[i]];
            arr[1] = i;
            return arr;
        }
        obj[nums[i]] = i;
    }
    return "no exist!"
};

console.log(twoSum(testNums, testTarget));
console.log(twoSum([6,2,4],6));