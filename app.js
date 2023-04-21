/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  // Create a new array to store the running sum
  const runningSumArray = [];

  // Initialize the running sum to zero
  let sum = 0;

  // Loop through the input array
  for (let i = 0; i < nums.length; i++) {
    // Add the current element to the running sum
    sum += nums[i];

    // Add the running sum to the output array
    runningSumArray.push(sum);
  }

  // Return the output array
  return runningSumArray;
};
