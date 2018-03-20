// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1:
//     nums1 = [1, 3]
//     nums2 = [2]
//     The median is 2.0
// Example 2:
//     nums1 = [1, 2]
//     nums2 = [3, 4]
//     The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var i = 0,
        j = 0,
        count = 0,
        middleLeft = -1;
    var len = nums1.length + nums2.length;
    while (i < nums1.length || j < nums2.length) {
        var curr = 0;
        if (nums2[j] === undefined || nums1[i] <= nums2[j]) {
            curr = nums1[i];
        } else if (nums1[i] === undefined || nums1[i] > nums2[j]) {
            curr = nums2[j];
        }
        count++;
        if (len % 2 !== 0) {
            if (count === (len - 1) / 2 + 1) {
                return curr;
            }
        } else {
            if (count === len / 2) {
                middleLeft = curr;
            } else if (count === (len / 2 + 1) && middleLeft !== -1) {
                return (curr + middleLeft) / 2;
            }
        }
        if (nums2[j] === undefined || nums1[i] <= nums2[j]) {
            i++;
        } else if (nums1[i] === undefined || nums1[i] > nums2[j]) {
            j++;
        }
    }
    return 0;
};

console.log(findMedianSortedArrays());