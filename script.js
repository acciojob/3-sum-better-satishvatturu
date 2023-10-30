function threeSumClosest(nums, target) {
  if (nums.length < 3) {
    return null; // There are not enough elements to form a triplet.
  }

  nums.sort((a, b) => a - b); // Sort the array in ascending order.

  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize the closest sum with the sum of the first three elements.

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      } else {
        return currentSum; // If we find an exact match, return it.
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
