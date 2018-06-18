/**
 * To find for n-th position, use who was the best one for up to n-1.
 * The base case will be for n == 1 - the own value; and for n == 2 - the max of two values
 *
 * @param {*} nums
 * @returns
 */
function houseRobberRecursive(nums) {
  const memo = [];
  f = (n) => {
      if (n == 1) return nums[0];  
      if (n == 2) return Math.max(nums[0], nums[1]);
      let take = f(n-2) + nums[n-1];
      let leave = f(n-1);
      let val = Math.max(take, leave);
      return val;
  }
  return f(nums.length);
}

function houseRobberRecursiveMemoized(nums) {
  const memo = [];
  f = (n) => {
      if (n == 1) return nums[0];  
      if (n == 2) return Math.max(nums[0], nums[1]);
      
      if (memo[n]) return memo[n];
      let take = f(n-2) + nums[n-1];
      let leave = f(n-1);
      let val = Math.max( take, leave);
      memo.push(val);
      return val;
  }
  return f(nums.length);
}

/**
 * The ith position will host the best value from 0 to i.
 * We still have as base cases n == 1 and n == 2 as above
 *
 * @param {*} nums
 * @returns
 */
function houseRobberIterativeOn(nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  const steal = [nums[0], Math.max(nums[0], nums[1])];
  for(let i = 2; i < nums.length; i++) {
    const take = nums[i] + steal[i-2];
    const leave = steal[i-1];
    steal.push(Math.max(take, leave));
  }
  return steal[steal.length-1];
}

/**
 * Since we only need the previous two values, we can have constant memory usage
 *
 * @param {*} nums
 * @returns
 */
function houseRobberNoMemory(nums) {
  let previous = 0;
  let current = 0;
  for(let i = 0; i < nums.length; i++) {
    const take = previous + nums[i];
    previous = current;
    current = Math.max(take, previous);
  }
  return current;
}

console.log(houseRobber([1]));
console.log(houseRobber([1, 1]));
console.log(houseRobber([1, 2, 3]));
console.log(houseRobber([4, 1, 2, 7, 5, 3, 1]));