/**
 * Solving E26
 * Created by Rae on 2/5/17.
 */

const testnum = [1, 2, 3, 4, 5];

function sumfor(nums){
  let total = 0;
  for (const num of nums){
      total += num;
  }
  return total;
}

console.log(sumfor(testnum));

function someWhile(nums){
    let total = 0;
    let i = 0;
    while(i < nums.length){
      total += nums[i];
      i++;
    }
    return total;
}

console.log(someWhile(testnum));

function sumRecursion(nums){
  if(nums.length === 0){
      return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testnum));

function sumTheSimpleWay(nums){
  return _.reduce(nums, function(memo, num){ return memo + num}, 0);
}

console.log(sumTheSimpleWay(testnum));
