function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return [nums[left], nums[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // If no such pair exists
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const target = 10;
const result = twoSum(nums, target);
if (result) {
    console.log(`Pair with sum ${target} found: [${result[0]}, ${result[1]}]`);
} else {
    console.log(`No pair found with sum ${target}`);
}
