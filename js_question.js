const findSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
  return [0, 0];
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(findSum(nums, target));
