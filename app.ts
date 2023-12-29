var rotate = function(nums, k) {
    k %= nums.length; // Handle cases where k is larger than the array length
    
    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse the remaining n-k elements
    reverse(nums, k, nums.length - 1);
};

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Example usage
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

console.log("Original Array:", nums);
rotate(nums, k);
console.log("Rotated Array:", nums);
